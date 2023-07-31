import ActionButton from "../ActionButton/ActionButton";
import deleteIcon from '../../assets/icons/delete-svgrepo-com.svg';
import editIcon from '../../assets/icons/edit-svgrepo-com.svg';
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Modal from '../Modal/Modal';
import './ProductUser.scss';
import { getItemMessages, sendMessageToUser  } from "../../utils/api";
import ProductContactsMessages from "../ProductContactsMessages/ProductContactsMessages";


export default function ProductUser ({productInfo, onDelete, id}){

    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);
    const [customerMessages, setCustomerMessages] = useState([]);
    
    const arrangedMessageList = [];

    const addResponse = async (message) => {
        try {
            const sending = await sendMessageToUser(id, sessionStorage.user, message);
            window.location.reload(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect (() => {
        if (sessionStorage.authToken) {
            getItemMessages(id, sessionStorage.user)
                .then((response) => {
                    setCustomerMessages(response.data);
                })
                .catch((error) => {
                    return error.console.log(error);
                });
        }

    }, [id]);

    const exchange = productInfo.exchangeable_items.join(", ");
    const handleDelete = () => {
        setShowModal(true);
    };

    const handleEdit = () => {
        navigate(`/product/edit/${id}`);
    };
    

    function removeDuplicates(arr) {
        let unique = [];
        arr.forEach(element => {
            if (!unique.includes(element.caller)) {
                unique.push(element.caller);
            }
        });
        return unique;
    }

    if (customerMessages.length) {
        const uniqueCallerPersons = removeDuplicates(customerMessages);

        uniqueCallerPersons.forEach((element) => {
            arrangedMessageList.push( customerMessages.filter(message => message.caller === element));
        })
    }

    return (
        <section className="product-user">
            <img src={productInfo.image_url} alt="product_img" className='product-user__image' />
            <div className="product-user__info">
                <p className="product-user__price">
                    <span className="product-user__title">Price : </span>
                    {productInfo.price}$
                </p>
                <p className="product-user__item">
                    <span className="product-user__title">Description : </span>
                    {productInfo.description}
                </p>
                <p className="product-user__item">
                    <span className="product-user__title">Category : </span>
                    {productInfo.category}
                </p>
                <p className="product-user__item">
                    <span className="product-user__title">Open to swap with : </span>
                    {exchange}
                </p>
                <div className="product-user__actions">
                    <ActionButton src={deleteIcon} alt="delete_icon" onClick={handleDelete} />
                    <ActionButton src={editIcon} alt="edit_icon" onClick={handleEdit} />                
                </div>
            </div>

            {!customerMessages.length ? null : (
                <div className="product-user__table">
                    {
                        arrangedMessageList.map((list, index) => {
                            return (
                                <ProductContactsMessages key={index} messageList={list}
                                    productInfo={productInfo} onSubmit={addResponse} />
                            );
                        })
                    }
                </div>
            )

            }

            {showModal && (
                <Modal
                title={`Delete ${productInfo.name} item?`}
                onDelete={() => onDelete(id)}
                onClose={() => setShowModal(false)}
                >
                Please confirm that you’d like to delete {productInfo.name} from your product list. You won’t be
                able to undo this action.
                </Modal>
            )}
        </section>
    );
}