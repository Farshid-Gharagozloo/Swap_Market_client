import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { deleteProduct, getProductItem, sendMessageToUser } from "../utils/api";
import PageHeader from "../components/PageHeader/PageHeader";
import ProductUser from "../components/ProductUser/ProductUser";


export default function ProductUserPage (){
    const navigate = useNavigate();

    const [productInfo, setProductInfo] = useState(undefined);
    const { id } = useParams();

    useEffect(() => {
        getProductItem(id)
            .then((response) => {
                setProductInfo(response.data);
            })
            .catch((error) => {
                return error.console.log(error);
            });
    }, [id]);

    const handleDelete = (id) => {
        deleteProduct(id)
            .then((response) => {
                navigate(`/user/${response.data.user_id}`);
            })
            .catch((error) => console.log(error));
    }

    if (!productInfo){
        return (
            <h4>Loading ...</h4>
        );
    }

    return (
        <>
            <PageHeader title={productInfo.name} onReturn={() => navigate(-1)}/>
            <ProductUser productInfo={productInfo} onDelete={handleDelete} id={id} />
        </>
    );
}