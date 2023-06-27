import ActionButton from "../ActionButton/ActionButton";
import deleteIcon from '../../assets/icons/delete-svgrepo-com.svg';
import editIcon from '../../assets/icons/edit-svgrepo-com.svg';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from '../Modal/Modal';
import './ProductUser.scss';


export default function ProductUser ({productInfo, onDelete, id}){

    const navigate = useNavigate();
    const [showModal, setShowModal] = useState(false);

    const exchange = productInfo.exchangeable_items.join(", ");
    const handleDelete = () => {
        setShowModal(true);
    };

    const handleEdit = () => {
        navigate(`/product/edit/${id}`);
    };
    

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