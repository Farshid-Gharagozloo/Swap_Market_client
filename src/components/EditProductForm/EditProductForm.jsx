import Input from "../Input/Input";
import Button from '../Button/Button';
import RadioButton from '../RadioButton/RadioButton';
import { useState } from 'react';
import { formValidate, addItemRules } from '../../utils/validators';
import './EditProductForm.scss';
import { useNavigate } from "react-router-dom";


export default function EditProductForm ({ onSubmit, categoryList, editItem, itemId }){

    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState({
        name: editItem.name,
        id: itemId,
        user_id: editItem.user_id,
        category: editItem.category,
        description: editItem.description,
        price: editItem.price,
        interchangeable: 'no',
        image_url: editItem.image_url,
        exchange: 0,
        exchangeable_items: editItem.exchangeable_items
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

        const errors = addItemRules(selectedItem);
        setItemError(errors);

        if (!formValidate(errors)) {
            return;
        }

        let fd = new FormData();
        fd.append("name", e.target.name.value);
        fd.append("id", itemId);
        fd.append("user_id", selectedItem.user_id);
        fd.append("category", selectedItem.category);
        fd.append("description", e.target.description.value);
        fd.append("price", e.target.price.value);
        fd.append("interchangeable", selectedItem.interchangeable);
        fd.append("exchangeable_items", JSON.stringify(selectedItem.exchangeable_items));
        fd.append("image", e.target.image.files[0]);

        // console.log(fd);
        onSubmit(fd);

        // onSubmit(selectedItem);
    };

    const handleExchangeableItemChange = (index, value) => {
        const updatedItems = [...selectedItem.exchangeable_items];
        updatedItems[index] = value;
        setSelectedItem({ ...selectedItem, exchangeable_items: updatedItems });
    };

    return (
        <>
            <form className="edit-product" onSubmit={handleSubmit}>
                <div className="edit-product__inputs-left">
                    <Input
                        placeholder="Product Name"
                        name="name"
                        value={selectedItem.name}
                        hasError={itemError.name}
                        onChange={(e) => setSelectedItem({ ...selectedItem, name: e.target.value })}
                    />

                    <Input
                        type="select"
                        label="Category"
                        placeholder="Please Select"
                        name="category"
                        value={selectedItem.category}
                        hasError={itemError.category}
                        onChange={(e) => setSelectedItem({ ...selectedItem, category: e.target.value })}
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
                        value={selectedItem.description}
                        hasError={itemError.description}
                        onChange={(e) => setSelectedItem({ ...selectedItem, description: e.target.value })}
                    />

                    <Input
                        placeholder="Price"
                        name="price"
                        value={selectedItem.price}
                        hasError={itemError.price}
                        onChange={(e) => setSelectedItem({ ...selectedItem, price: Number(e.target.value) })}
                    />

                </div>

                <div className="edit-product__inputs-right">

                    <p className="edit-product__radio">Open to Swap:</p>
                    <RadioButton
                        name="interchangeable"
                        options={[
                            { label: 'Yes', value: 'yes' },
                            { label: 'No', value: 'no' },
                        ]}
                        selectedValue={selectedItem.interchangeable}
                        onChange={(e) => setSelectedItem({ ...selectedItem, interchangeable: e.target.value })}
                    />

                    {selectedItem.interchangeable === 'yes' && (
                        <Input
                            type="select"
                            label="Exchange Items Number"
                            placeholder="Please Select"
                            name="exchange"
                            value={selectedItem.exchange}
                            onChange={(e) => setSelectedItem({ ...selectedItem, exchange: Number(e.target.value) })}
                        >
                            {exItems.map((item, index) => (
                                <option value={item} key={index}>
                                    {item}
                                </option>
                            ))}
                        </Input>
                    )}

                    {selectedItem.interchangeable === 'yes' &&
                        exItems.slice(0, selectedItem.exchange).map((_letter, index) => (
                            <Input
                                placeholder={`Item ${index + 1}`}
                                name="ex"
                                key={index}
                                onChange={(e) => handleExchangeableItemChange(index, e.target.value)}
                            />
                        ))}

                    <p className="edit-product__radio">Please upload your image:</p>                    
                    <input required type="file" name="image" accept="image/*" className="edit-product__upload"/>
                </div>
                <div className="edit-product__actions">
                    <Button variant='cancel' onClick={() => navigate(-1)} />
                    <Button type='submit'>Edit Product</Button>
                </div>
            </form>
        </>
    );
}

