import { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import Input from "../Input/Input";
import './ProductList.scss';
import RadioButton from '../RadioButton/RadioButton';


export default function ProductList ({mainList, categoryList}){

    const [tableList, setTableList] = useState(undefined);
    const [exchange, setExchange] = useState(undefined);
    const [categoryFilter, setCategoryFilter] = useState(undefined);
    const [lowPrice, setLowPrice] = useState(undefined);
    const [highPrice, setHighPrice] = useState(undefined);

    let list = mainList;
    if (tableList) {
        list = tableList;
    }

    useEffect(() => {
        let filteredList = mainList;
    
        if (exchange) {
          filteredList = filteredList.filter((item) => item.interchangeable === exchange);
        }
    
        if (categoryFilter) {
          filteredList = filteredList.filter((item) => item.category === categoryFilter);
        }
    
        if (lowPrice) {
          filteredList = filteredList.filter((item) => item.price >= lowPrice);
        }
    
        if (highPrice) {
          filteredList = filteredList.filter((item) => item.price <= highPrice);
        }
        setTableList(filteredList);

    }, [exchange, categoryFilter, lowPrice, highPrice, mainList]);

    return (
        <section className="all-products">
            <div className="all-products__filter">
                <div className="all-products__radio">
                    <p className="all-products__swap">Open to Swap:</p>
                    <RadioButton
                        label="fffff"
                        name="interchangeable"
                        options={[
                            { label: 'Yes', value: 'yes' },
                            { label: 'No', value: 'no' },
                        ]}
                        selectedValue ={exchange} 
                        onChange={(e) => setExchange( e.target.value )}
                    />
                </div>
                <div className="all-products__input">
                    <Input
                        type="select"
                        label="Category"
                        placeholder="Please Select"
                        name="category"
                        onChange={(e) => setCategoryFilter(e.target.value)}
                    >
                        {categoryList.map((item, index) => (
                            <option value={item.category_name} key={index}>
                                {item.category_name}
                            </option>
                        ))}
                    </Input>
                </div>
                <div className="all-products__input">
                    <Input
                        placeholder="Low Price"
                        name="price"
                        onChange={(e) => setLowPrice(Number(e.target.value))}
                    />
                </div>
                <div className="all-products__input">
                    <Input
                        placeholder="High Price"
                        name="price"
                        onChange={(e) => setHighPrice(Number(e.target.value))}
                    />
                </div>
            </div>
            <div className="all-products__list-table">
                {
                    list.map((item) => {
                        return (
                            <ItemCard key={item.id} item={item} />
                        );
                    })
                }
            </div>
        </section>
    );
}