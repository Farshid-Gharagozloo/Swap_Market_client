import { useEffect, useState } from "react";
import { editProductItem, getCategoryList, getProductItem } from "../utils/api";
import PageHeader from "../components/PageHeader/PageHeader";
import { useNavigate, useParams } from "react-router-dom";
import EditProductForm from "../components/EditProductForm/EditProductForm";


export default function EditProduct (){

    const navigate = useNavigate();

    const [categoryList, setCategoryList] = useState(undefined);
    const [editItem, setEditItem] = useState(undefined);

    const {id} = useParams();

    const uploadImg ={headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${sessionStorage.authToken}`,
    },};

    const editItemSubmit = async (newItemData) => {
        try {
            const edit = await editProductItem(id, newItemData, uploadImg);
            navigate(`/user/product/${id}`);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProductItem(id)
            .then((response) => {
                setEditItem(response.data);
            })
            .catch((error) => {
                return error.console.log(error);
            });
    }, [id]);

    useEffect(() =>{
        getCategoryList()
            .then((response) => {
                setCategoryList(response.data);
            })
            .catch((error) => {
                return error.console.log(error);
            });
    }, []);

    if (!categoryList || !editItem){
        return (
            <h4>Loading ...</h4>
        );
    }

    return (
        <>
            <PageHeader title="Edit Your Item" />
            <EditProductForm onSubmit={editItemSubmit} categoryList={categoryList} editItem={editItem} itemId={id} />
        </>
    );
}