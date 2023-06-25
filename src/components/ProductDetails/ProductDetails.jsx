import './ProductDetails.scss';

export default function ProductDetails ({productInfo}){

    const exchange = productInfo.exchangeable_items.join(", ");

    return (
        <section className="product-details">
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
            </div>
            <div className="product-details__contact">
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
        </section>
    );
}