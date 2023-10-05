import { useEffect, useState } from 'react';
import { getListByCategory, getListByUsername, getItemMessages } from '../../utils/api';
import ItemCard from "../ItemCard/ItemCard";
import './ProductDetails.scss';
import ListOfMessages from '../ListOfMessages/ListOfMessages';
import Input from '../Input/Input';
import Button from '../Button/Button';
import { formValidate, messageRules } from '../../utils/validators';


export default function ProductDetails ({productInfo, id, onSubmit}){

    const exchange = productInfo.exchangeable_items.join(", ");
    const [categoryList, setCategoryList] = useState([]);
    const [userList, setUserList] = useState([]);
    const [messageList, setMessageList] = useState(undefined);
    const [newMessage, setNewMessage] = useState({
        text_message: "",
        user_id: productInfo.user_id
    });
    const [errorMessage, setErrorMessage] = useState({
        message_error: false
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        const error = messageRules(newMessage);
        setErrorMessage(error);

        if (!formValidate(error)) {
            return;
        }

        else {
            onSubmit(newMessage)
        }
    }

    useEffect (() => {
        getListByCategory(productInfo.category, id)
            .then((response) => {
                setCategoryList(response.data);
            })
            .catch((error) => {
                return error.console.log(error);
            });

        getListByUsername(productInfo.user_name,id)
            .then((response) => {
                setUserList(response.data);
            })
            .catch((error) => {
                return error.console.log(error);
            });

        if (sessionStorage.authToken) {

            getItemMessages(id,sessionStorage.user)
                .then((response) => {
                    setMessageList(response.data);
                })
                .catch((error) => {
                    return error.console.log(error);
                });
        }
        
    }, [id]);

    if (!categoryList.length){
        return (
            <h4>Loading ...</h4>
        );
    }

    // console.log(newMessage);

    return (
        <section className="product-details">
            <div className="product-details__item-information">
                <img src={productInfo.image_url} alt="product_img" className='product-details__image' />
                <div className="product-details__info">
                    <p className="product-details__price">
                        <span className="product-details__title">Price : </span>
                        {productInfo.price}$
                    </p>
                    <p className="product-details__item">
                        <span className="product-details__title">Description : </span>
                        {productInfo.description}
                    </p>
                    <p className="product-details__item">
                        <span className="product-details__title">Category : </span>
                        {productInfo.category}
                    </p>
                    <p className="product-details__item">
                        <span className="product-details__title">Open to swap with : </span>
                        {exchange}
                    </p>
                    <p className="product-details__user-info">
                        <span className="product-details__user-title">Owner : </span>
                        {productInfo.user_name}
                    </p>
                    <p className="product-details__user-info">
                        <span className="product-details__user-title">Address : </span>
                        {productInfo.address}, {productInfo.postal_code}
                    </p>
                    <p className="product-details__user-info">
                        <span className="product-details__user-title">Phone : </span>
                        {productInfo.phone}
                    </p>
                    <p className="product-details__user-info">
                        <span className="product-details__user-title">Email : </span>
                        {productInfo.email}
                    </p>
                </div>
            </div>

            {!messageList ? null : (
                <div className="product-details__table">
                    {
                        messageList.map((message, index) => {
                            return (
                                <ListOfMessages key={index} message={message} 
                                user_id={productInfo.user_id} owner={productInfo.user_name} customer={message.yourself} />
                            );
                        })
                    }
                
                    <form className="product-details__sending-message" onSubmit={handleSubmit} >
                        <Input 
                            type="textarea"
                            placeholder="Send a Message to the Owner"
                            name="message"
                            hasError={errorMessage.message_error}
                            onChange={(e) => setNewMessage({ ...newMessage, text_message: e.target.value })}
                        />

                        <Button type='submit'>send</Button>
                    </form>
                </div>
            
            )}

            {!categoryList.length ? null : ( 
            <div className="product-details__table">
                <h4 className="product-details__table-title">Other Products From {productInfo.category} Category: </h4>
                <div className="product-details__category-table">
                    {
                        categoryList.map((item) => {
                            return (
                                <ItemCard key={item.id} item={item} />
                            );
                        })
                    }
                </div>
            </div>)}
            {!userList.length ? null : ( 
            <div className="product-details__table">
            <h4 className="product-details__table-title">Other Products From {productInfo.user_name}: </h4>
                <div className="product-details__category-table">
                    {
                        userList.map((item) => {
                            return (
                                <ItemCard key={item.id} item={item} />
                            );
                        })
                    }
                </div>
            </div>)}
        </section>
    );
}