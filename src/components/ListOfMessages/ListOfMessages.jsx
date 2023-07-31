import { useState } from 'react';
import './ListOfMessages.scss';
import ActionButton from '../ActionButton/ActionButton';
import deleteIcon from "../../assets/icons/x-button.png";
import Modal from '../Modal/Modal';
import { deleteMessage } from "../../utils/api";


export default function ListOfMessages ({ message, user_id, owner, customer}){

    const [showModal, setShowModal] = useState(false);

    let date = new Date(message.create_time);
    date = date.toLocaleString();
    let datetext = date.split(",");
    datetext = datetext[0].split("/");
    datetext = datetext.map((text) =>{
        return (text.length === 1) ? '0'+ text : text;  
    });

    const handleDelete = () => {
        setShowModal(true);
    };

    const onDelete = (id) => {
        deleteMessage(id)
            .then(() => {
                setShowModal(false);
                window.location.reload(false);
            })
            .catch((error) => console.log(error));
    }

    const author = message.writer_id == user_id ? owner : customer;

    return (
        <div className={message.writer_id === Number(sessionStorage.user) ? "messages messages--active" : "messages" } >
            <section className="messages__header">
                <h4 className={message.writer_id === Number(sessionStorage.user) ? "messages__title messages__title--active" : "messages__title" }>
                    { author }
                </h4>
                <p className="messages__created-time">{ datetext[0] }/{ datetext[1] }/{ datetext[2] } </p>
            </section>

            <p className="messages__text">{ message.text_message }</p>

            {message.writer_id === Number(sessionStorage.user) ? 
                (
                    <section className="messages__footer">
                        <ActionButton src={deleteIcon} alt="delete_icon" onClick={handleDelete} active={true} />
                    </section>
                ) : null
            }
            
            {showModal && (
                <Modal
                title={`Delete this message?`}
                onDelete={() => onDelete(message.message_id)}
                onClose={() => setShowModal(false)}
                >
                Please confirm that you’d like to delete this message. You won’t be
                able to undo this action.
                </Modal>
            )}
        </div>
    );    
}