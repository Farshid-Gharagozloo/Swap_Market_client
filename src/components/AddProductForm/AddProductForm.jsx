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
        image: "",
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

        let fd = new FormData();
        fd.append("name", e.target.name.value);
        fd.append("user_id", 2);
        fd.append("category", e.target.category.value);
        fd.append("description", e.target.description.value);
        fd.append("price", e.target.price.value);
        fd.append("interchangeable", e.target.interchangeable.value);
        fd.append("exchangeable_items", []);
        fd.append("image", e.target.image.files[0]);

        onSubmit(fd);
    };

    return (
        <>
            {/* <form action="http://localhost:8080/upload" placeholder="upload"
                className="upload" method="POST" encType="multipart/form-data">
                <input type="file" name="image"/>
                <input type="submit"/>
            </form> */}
            <form className="add-product" onSubmit={handleSubmit} >
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
                    <input type="file" name="image" accept="image/*" />
                </div>
                <div className="add-product__actions">
                    <Button variant='cancel' />
                    <Button type='submit'>Add Product</Button>
                </div>
            </form>
        </>
    );
}