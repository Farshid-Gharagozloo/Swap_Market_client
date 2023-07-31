import { useNavigate, useParams } from "react-router-dom";
import PageHeader from "../components/PageHeader/PageHeader";
import { useEffect, useState } from "react";
import { getProductItem, sendMessageToUser } from "../utils/api";
import ProductDetails from "../components/ProductDetails/ProductDetails";


export default function ProductPage (){

    const navigate = useNavigate();

    const [productInfo, setProductInfo] = useState(undefined);
    const { id } = useParams();

    const addMessage = async (message) => {
        try {
            const sending = await sendMessageToUser(id, sessionStorage.user, message);
            window.location.reload(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getProductItem(id)
            .then((response) => {
                setProductInfo(response.data);
            })
            .catch((error) => {
                return error.console.log(error);
            });
    }, [id]);  

    if (!productInfo){
        return (
            <h4>Loading ...</h4>
        );
    }


    return (
        <>
            <PageHeader title={productInfo.name} onReturn={() => navigate(-1)}/>
            <ProductDetails productInfo={productInfo} id={id} onSubmit={addMessage} /> 
        </>
    );
}