import { useEffect, useState } from "react";
import { getUserItemList } from "../../utils/api";
import ItemCard from "../ItemCard/ItemCard";
import { Link, useNavigate, useParams } from "react-router-dom";
import './UserProfile.scss';
import swapIcon from '../../assets/logo/swap_logo_2.png';

export default function UserProfile ({profileInfo, userloginToken}){
    const {first_name, last_name, address, postal_code, email, contact_number} = profileInfo;

    const navigate = useNavigate();
    const [itemList, setItemList] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        getUserItemList(id, userloginToken)
            .then((response) => {
                setItemList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);


    return (
        <section className="user-profile">
            <div>
                <ul className="user-profile__information">
                    <li className="user-profile__list">
                        <h4 className="user-profile__header">Name:</h4>
                        <p className="user-profile__info">{first_name} {last_name}</p>
                    </li>
                    <li className="user-profile__list">
                        <h4 className="user-profile__header">Email:</h4>
                        <p className="user-profile__info">{email}</p>
                    </li>
                    <li className="user-profile__list">
                        <h4 className="user-profile__header">Address:</h4>
                        <p className="user-profile__info">{address}</p>
                    </li>
                    <li className="user-profile__list">
                        <h4 className="user-profile__header">Postal Code:</h4>
                        <p className="user-profile__info">{postal_code}</p>
                    </li>
                    <li className="user-profile__list">
                        <h4 className="user-profile__header">Contact Number:</h4>
                        <p className="user-profile__info">{contact_number}</p>
                    </li>
                    <li className="user-profile__list">
                        <button className="user-profile__button"
                            onClick={() => (navigate(`/user/edit/${id}`))}
                        >
                            Edit your profile
                        </button>
                    </li>
                    <li className="user-profile__list">
                    <Link to={`/additem/${id}`} className="user-profile__add-item">
                        <p className="user-profile__name">Add your new product here</p>
                        <img className="user-profile__image" src={swapIcon} alt='add_image'/>
                    </Link>
                    </li>
                </ul>
                
            </div>
            <div className="user-profile__products">
                {
                    itemList.map((item) => {
                        return (
                            <ItemCard key={item.id} item={item} action={true}/>
                        );
                    })
                }
            </div>
            {/* <Link to={`/additem/${id}`} className="user-profile__add-item">
                <p className="user-profile__name">Add your new product here</p>
                <img className="user-profile__image" src={swapIcon} alt='add_image'/>
            </Link> */}
        </section>
    );
}