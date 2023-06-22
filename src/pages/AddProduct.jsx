import AddProductForm from "../components/AddProductForm/AddProductForm";
import { addNewProduct } from "../utils/api";


export default function AddProduct (){

    const addItemSubmit = async (newItemData) => {
        try {
            const newItem = await addNewProduct(newItemData);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <>
            <AddProductForm onSubmit={addItemSubmit} />
        </>
    );
}