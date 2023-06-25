
export default function ItemCard({item}){

    return (
        <section className="item-card">
            <p className="item-card__user">{item.user_name}</p>
            <h6 className="item-card__name">{item.name}</h6>
            <img style={{width:200}} src={item.image_url} alt='item_image'/>
            <p className="item-card__price">{item.price}$</p>
            <p className="item-card__category">{item.category}</p>
            <p className="item-card__address">{item.address}</p>
            <p className="item-card__time">{item.time}</p>
        </section>
    );
}