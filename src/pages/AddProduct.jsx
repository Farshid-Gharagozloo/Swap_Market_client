import { useEffect, useState } from "react";
import AddProductForm from "../components/AddProductForm/AddProductForm";
import { addNewProduct, getCategoryList } from "../utils/api";


export default function AddProduct (){

    const [categoryList, setCategoryList] = useState(undefined);

    const addItemSubmit = async (newItemData) => {
        try {
            const newItem = await addNewProduct(newItemData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() =>{
        getCategoryList()
            .then((response) => {
                setCategoryList(response.data);
            })
            .catch((error) => {
                return error.console.log(error);
            });
    }, []);

    if (!categoryList){
        return (
            <h4>Loading ...</h4>
        );
    }


    return (
        <>
            <AddProductForm onSubmit={addItemSubmit} categoryList={categoryList} />
        </>
    );
}