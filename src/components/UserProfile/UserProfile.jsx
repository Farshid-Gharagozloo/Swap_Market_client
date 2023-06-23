import { useEffect, useState } from "react";
import { getUserItemList } from "../../utils/api";
import ItemCard from "../ItemCard/ItemCard";
import { useParams } from "react-router-dom";


export default function UserProfile ({profileInfo}){
    const {first_name, last_name, address, postal_code, email, contact_number} = profileInfo;

    const [itemList, setItemList] = useState([]);
    const {id} = useParams();

    useEffect(() => {
        getUserItemList(id)
            .then((response) => {
                setItemList(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);


    return (
        <section className="user-profile">
            <div className="user-profile__information">
                <ul>
                    <li>
                        <h4 className="user-profile__header">Name:</h4>
                        <p className="user-profile__info">{first_name}, {last_name}</p>
                    </li>
                    <li>
                        <h4 className="user-profile__header">Email:</h4>
                        <p className="user-profile__info">{email}</p>
                    </li>
                    <li>
                        <h4 className="user-profile__header">Address:</h4>
                        <p className="user-profile__info">{address}</p>
                    </li>
                    <li>
                        <h4 className="user-profile__header">Postal Code:</h4>
                        <p className="user-profile__info">{postal_code}</p>
                    </li>
                    <li>
                        <h4 className="user-profile__header">Contact Number:</h4>
                        <p className="user-profile__info">{contact_number}</p>
                    </li>
                </ul>
            </div>
            <div className="user-profile__products">
                {
                    itemList.map((item) => {
                        return (
                            <ItemCard key={item.id} item={item}/>
                        );
                    })
                }
            </div>
        </section>
    );
}