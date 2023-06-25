

export default function ProductDetails ({productInfo}){

    // const productInfo = {
    //     "name": "item_1",
    //     "user_name": "silver_dragon123",
    //     "category": "Arts",
    //     "description": "long description about item .......",
    //     "price": 77,
    //     "address": "47 Maple Street",
    //     "postal_code": "12345",
    //     "email": "emma.walker@example.com",
    //     "phone": 1234567,
    //     "image_url": "http://localhost:8080/images/1687624337159.jpg",
    //     "exchangeable_items": [
    //       "chair"
    //     ]
    //   };


    return (
        <section className="product-details">
            <img style={{width:500}} src={productInfo.image_url} alt="product_img" />
            <div className="product-details__info">
                <p className="product-details__price">
                    Price : {productInfo.price}
                </p>
                <p className="product-details__description">
                    Description : {productInfo.description}
                </p>
                <p className="product-details__category">
                    Category : {productInfo.category}
                </p>
                <p className="product-details__exchanges">
                    Open to swap with : {productInfo.exchangeable_items}
                </p>
            </div>
            <div className="product-details__contact">
                <p className="product-details__user-name">
                    Owner : {productInfo.user_name}
                </p>
                <p className="product-details__address">
                    Address : {productInfo.address}, {productInfo.postal_code}
                </p>
                <p className="product-details__phone">
                    Phone : {productInfo.phone}
                </p>
                <p className="product-details__email">
                    Email : {productInfo.email}
                </p>
            </div>
        </section>
    );
}