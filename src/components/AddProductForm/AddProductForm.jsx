import Input from "../Input/Input";
import Button from '../Button/Button';
import { useState } from 'react';
import { formValidate, addItemRules } from '../../utils/validators';

export default function AddProductForm ({onSubmit}){

    const [newItem, setNewItem] = useState({
        name: "",
        user_id: 2,
        category: "",
        description: "",
        price: "",
        interchangeable: "",
        exchangeable_items: []
    });
    const [itemError, setItemError] = useState({
        name: false,
        user_id: false,
        category: false,
        description: false,
        price: false,
        interchangeable: false,
        exchangeable_items: false       
    });    


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(newItem);

        const errors = addItemRules(newItem);
        setItemError(errors);

        if (!formValidate(errors)){
            return;
        }

        onSubmit(newItem);
    };

    return (
        <form action="" className="add-product" onSubmit={handleSubmit} method="POST" encType="multipart/form-data">
            <div className="add-product__inputs">
                <Input
                    placeholder="product Name"
                    name="name"
                    hasError={itemError.name}
                    onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                />
                <Input
                    placeholder="Category"
                    name="category"
                    hasError={itemError.category}
                    onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                />
                <Input
                    placeholder="Description About Item"
                    name="description"
                    hasError={itemError.description}
                    onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                />
                <Input
                    placeholder="Price"
                    name="price"
                    hasError={itemError.price}
                    onChange={(e) => setNewItem({ ...newItem, price: Number( e.target.value )})}
                />
                <Input
                    placeholder="Interchangeable"
                    name="interchangeable"
                    hasError={itemError.interchangeable}
                    onChange={(e) => setNewItem({ ...newItem, interchangeable: e.target.value })}
                />

                <input type="file" name="image"/>
            </div>
            <div className="add-product__actions">
                <Button variant='cancel' />
                <Button type='submit'>Add Product</Button>
            </div>
        </form>
    );
}