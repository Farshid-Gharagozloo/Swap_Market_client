
import { Link, useNavigate } from "react-router-dom";
import "./ItemCard.scss";
import ActionButton from "../ActionButton/ActionButton";
import editIcon from '../../assets/icons/edit-24px.svg';



export default function ItemCard({item, action}){
    const navigate = useNavigate();
    const date = item.time.split("T");
    const path = `/product/${item.id}`

    const handleEdit = () => {
        navigate(`/product/edit/${item.id}`);
    };

    return (
        <section className="item-card">
            <div className="item-card__divided">
                <h6 className="item-card__name">{item.name}</h6>
                {action ? (
                    <ActionButton src={editIcon} alt="edit_icon" onClick={handleEdit} />
                ): null}
            </div>
            <Link to={path} className="item-card__link">
                <img className="item-card__image" src={item.image_url} alt='item_image'/>
                <p className="item-card__price">{item.price}$</p>
                <p className="item-card__info">
                    <span className="item-card__title">User Name: </span>   
                    {item.user_name}</p>
                <p className="item-card__info">
                    <span className="item-card__title">Category: </span>
                    {item.category}</p>
                <p className="item-card__info">
                    <span className="item-card__title">Address: </span>
                    {item.address}</p>
                <p className="item-card__info">{date[0]}</p>
            </Link>
        </section>
    );
}