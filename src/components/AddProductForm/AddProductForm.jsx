import Input from "../Input/Input";
import Button from '../Button/Button';
import RadioButton from '../RadioButton/RadioButton';
import { useState } from 'react';
import { formValidate, addItemRules } from '../../utils/validators';
import './AddProductForm.scss'
import { useNavigate } from "react-router-dom";

export default function AddProductForm({ onSubmit, categoryList, user_id }) {

    const navigate = useNavigate();
    const [newItem, setNewItem] = useState({
        name: "",
        user_id: user_id,
        category: "",
        description: "",
        price: "",
        interchangeable: 'no',
        image: "",
        exchange: 0,
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

    const exItems = ["1", "2", "3", "4", "5"];

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = addItemRules(newItem);
        setItemError(errors);

        if (!formValidate(errors)) {
            return;
        }

        let fd = new FormData();
        fd.append("name", e.target.name.value);
        fd.append("user_id", newItem.user_id);
        fd.append("category", newItem.category);
        fd.append("description", e.target.description.value);
        fd.append("price", e.target.price.value);
        fd.append("interchangeable", newItem.interchangeable);
        fd.append("exchangeable_items", JSON.stringify(newItem.exchangeable_items));
        fd.append("image", e.target.image.files[0]);

        onSubmit(fd);
    };

    const handleExchangeableItemChange = (index, value) => {
        const updatedItems = [...newItem.exchangeable_items];
        updatedItems[index] = value;
        setNewItem({ ...newItem, exchangeable_items: updatedItems });
    };

    return (
        <>
            <form className="add-product" onSubmit={handleSubmit}>
                <div className="add-product__inputs-left">
                    <Input
                        placeholder="Product Name"
                        name="name"
                        hasError={itemError.name}
                        onChange={(e) => setNewItem({ ...newItem, name: e.target.value })}
                    />

                    <Input
                        type="select"
                        label="Category"
                        placeholder="Please Select"
                        name="category"
                        hasError={itemError.category}
                        onChange={(e) => setNewItem({ ...newItem, category: e.target.value })}
                    >
                        {categoryList.map((item, index) => (
                            <option value={item.category_name} key={index}>
                                {item.category_name}
                            </option>
                        ))}
                    </Input>

                    <Input
                        type="textarea"
                        placeholder="Description About Item"
                        name="description"
                        hasError={itemError.description}
                        onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                    />

                    <Input
                        placeholder="Price"
                        name="price"
                        hasError={itemError.price}
                        onChange={(e) => setNewItem({ ...newItem, price: Number(e.target.value) })}
                    />

                </div>

                <div className="add-product__inputs-right">
                    <p className="add-product__radio">Open to Swap:</p>
                    <RadioButton
                        label="fffff"
                        name="interchangeable"
                        options={[
                            { label: 'Yes', value: 'yes' },
                            { label: 'No', value: 'no' },
                        ]}
                        selectedValue={newItem.interchangeable}
                        onChange={(e) => setNewItem({ ...newItem, interchangeable: e.target.value })}
                    />

                    {newItem.interchangeable === 'yes' && (
                        <Input
                            type="select"
                            label="Exchange Items Number"
                            placeholder="Please Select"
                            name="exchange"
                            value={newItem.exchange}
                            onChange={(e) => setNewItem({ ...newItem, exchange: Number(e.target.value) })}
                        >
                            {exItems.map((item, index) => (
                                <option value={item} key={index}>
                                    {item}
                                </option>
                            ))}
                        </Input>
                    )}

                    {newItem.interchangeable === 'yes' &&
                        exItems.slice(0, newItem.exchange).map((_, index) => (
                            <Input
                                placeholder={`Item ${index + 1}`}
                                name="ex"
                                key={index}
                                onChange={(e) => handleExchangeableItemChange(index, e.target.value)}
                            />
                        ))}

                    <p className="add-product__radio">Please upload your image:</p>                    
                    <input required type="file" name="image" accept="image/*" className="add-product__upload"/>
                </div>
                <div className="add-product__actions">
                    <Button variant='cancel' onClick={() => navigate(-1)} />
                    <Button type='submit'>Add Product</Button>
                </div>
            </form>
        </>
    );
}
