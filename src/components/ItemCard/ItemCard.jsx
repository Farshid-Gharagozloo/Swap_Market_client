import default_img from '../../assets/image/gandalf.jpg';

export default function ItemCard({item}){

    // const item = {
    //     id: 1,
    //     name: "item_1",
    //     user_name: "silver_dragon123",
    //     category: "Hobbies",
    //     price: 22,
    //     interchangeable: "yes",
    //     address: "47 Maple Street",
    //     time: "2023-06-20T19:58:05.000Z"
    //   };

    return (
        <section className="item-card">
            <p className="item-card__user">{item.user_name}</p>
            <h6 className="item-card__name">{item.name}</h6>
            <img style={{width:200}} src={default_img} alt='item_image'/>
            <p className="item-card__price">{item.price}</p>
            <p className="item-card__category">{item.category}</p>
            <p className="item-card__address">{item.address}</p>
            <p className="item-card__time">{item.time}</p>
        </section>
    );
}