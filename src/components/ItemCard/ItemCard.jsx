
import { Link } from "react-router-dom";
import "./ItemCard.scss";



export default function ItemCard({item, action}){
    
    const date = item.time.split("T");
    const listPath = `/product/${item.id}`;
    const userPath = `/user/product/${item.id}`;

    return (
        <>
        {action ? (
            <Link to={userPath} className="item-card">           
                <h6 className="item-card__name">{item.name}</h6>
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
        ) : (
            <Link to={listPath} className="item-card">
                <h6 className="item-card__name">{item.name}</h6>
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
        )}       
        </>
    );
}