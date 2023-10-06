import { useState } from "react";
import Button from "../Button/Button";
import Input from "../Input/Input";
import ListOfMessages from "../ListOfMessages/ListOfMessages";
import { formValidate, messageRules } from '../../utils/validators';
import './ProductContactsMessages.scss';


export default function ProductContactsMessages ({ messageList, productInfo, onSubmit }){

    const [newMessage, setNewMessage] = useState({
        text_message: "",
        user_id: ""
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

        onSubmit(newMessage)
    }

    return (
        <>
            {
                messageList.map((message, index) => {
                    if (message.writer_id !== productInfo.user_id){
                        newMessage.user_id = message.writer_id;
                    }
                    return (
                        <ListOfMessages key={index} message={message} user_id={productInfo.user_id} 
                            owner={message.yourself} customer={message.caller} />
                    );
                })
            }

            <form className="product-messages__sending" onSubmit={handleSubmit}>
                <Input
                    type="textarea"
                    placeholder="Send a response to the message"
                    name="message"
                    hasError={errorMessage.message_error}
                    onChange={(e) => setNewMessage({ ...newMessage, text_message: e.target.value })}
                />

                <Button type='submit'>send</Button>
            </form>
        </>
    );
}