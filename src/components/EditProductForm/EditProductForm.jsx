import Input from "../Input/Input";
import Button from '../Button/Button';
import RadioButton from '../RadioButton/RadioButton';
import { useState } from 'react';
import { formValidate, addItemRules } from '../../utils/validators';


export default function EditProductForm ({ onSubmit, categoryList, editItem, itemId }){

    const [selectedItem, setSelectedItem] = useState({
        name: editItem.name,
        id: itemId,
        user_id: 2,
        category: editItem.category,
        description: editItem.description,
        price: editItem.price,
        interchangeable: 'no',
        image: "",
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

        onSubmit(selectedItem);
    };

    const handleExchangeableItemChange = (index, value) => {
        const updatedItems = [...selectedItem.exchangeable_items];
        updatedItems[index] = value;
        setSelectedItem({ ...selectedItem, exchangeable_items: updatedItems });
    };

    return (
        <>
            <form className="add-product" onSubmit={handleSubmit}>
                <div className="add-product__inputs">
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

                    {/* <input type="file" name="image" accept="image/*" /> */}
                </div>
                <div className="add-product__actions">
                    <Button variant='cancel' />
                    <Button type='submit'>Edit Product</Button>
                </div>
            </form>
        </>
    );
}

