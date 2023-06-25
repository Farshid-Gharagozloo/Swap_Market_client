import { useEffect, useState } from "react";
import { getProductList } from "../utils/api";
import PageHeader from "../components/PageHeader/PageHeader";
import ProductList from "../components/ProductList/ProductList";


export default function HomePage (){

    const [mainList, setMainList] = useState(undefined);
    
    useEffect(() =>{
        getProductList()
            .then((response) => {
                setMainList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (!mainList){
        return (<h1>loading ...</h1>);
    }

    return(
        <>
            <PageHeader title='All Products' />
            <ProductList mainList={mainList} />
        </>
    );
}