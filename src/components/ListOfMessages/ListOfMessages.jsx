import './ListOfMessages.scss';

export default function ListOfMessages ({ message, user_id, user_name}){

    let date = new Date(message.create_time);
    date = date.toLocaleString();
    let datetext = date.split(",");
    datetext = datetext[0].split("/");
    datetext = datetext.map((text) =>{
        return (text.length === 1) ? '0'+ text : text;  
    });


    const author = message.writer_id === user_id ? user_name : message.yourself;

    return (
        <div className={message.writer_id === Number(sessionStorage.user) ? "messages messages--active" : "messages" } >
            <section className="messages__header">
                <h4 className={message.writer_id === Number(sessionStorage.user) ? "messages__title messages__title--active" : "messages__title" }>
                    { author }
                </h4>
                <p className="messages__created-time">{ datetext[0] }/{ datetext[1] }/{ datetext[2] } </p>
            </section>

            <p className="messages__text">{ message.text_message }</p>
        </div>
    );    
}