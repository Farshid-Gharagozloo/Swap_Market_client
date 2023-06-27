import { useEffect, useState } from "react";
import AddProductForm from "../components/AddProductForm/AddProductForm";
import { addNewProduct, getCategoryList } from "../utils/api";
import PageHeader from "../components/PageHeader/PageHeader";
import { useNavigate, useParams } from "react-router-dom";


export default function AddProduct (){
    const navigate = useNavigate();

    const [categoryList, setCategoryList] = useState(undefined);
    const { id } = useParams();

    const uploadImg ={headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${sessionStorage.authToken}`,
    },};

    const addItemSubmit = async (newItemData) => {
        try {
            const newItem = await addNewProduct(newItemData, uploadImg);
            navigate(`/user/product/${newItem.data.item_id}`);
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
            <PageHeader title="Add Your Item" />
            <AddProductForm onSubmit={addItemSubmit} categoryList={categoryList} user_id={id} />
        </>
    );
}