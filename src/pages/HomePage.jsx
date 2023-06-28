import { useEffect, useState } from "react";
import { getProductList, getCategoryList } from "../utils/api";
import PageHeader from "../components/PageHeader/PageHeader";
import ProductList from "../components/ProductList/ProductList";
import { useSearchParams } from "react-router-dom";
import Input from "../components/Input/Input";

export default function HomePage (){

    let [searchParams, setSearchParams] = useSearchParams();
    const [mainList, setMainList] = useState(undefined);
    const [filteredItems, setFilteredItems] = useState(undefined);
    const [categoryList, setCategoryList] = useState(undefined);


    useEffect(() =>{
        getProductList()
            .then((response) => {
                setMainList(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    useEffect(() =>{
        getCategoryList()
            .then((response) => {
                setCategoryList(response.data);
            })
            .catch((error) => {
                return error.console.log(error);
            });
    }, []);


    useEffect(() => {
        if (mainList && searchParams.size) {
          const filtered = mainList.filter((i) => filterList(i));
          setFilteredItems(filtered);
        }
    }, [mainList, searchParams]);

    const filterList = (item) => {
        const s = searchParams.get('s').toLowerCase();
        const date = item.time.split("T");
        return (
            item.name.toLowerCase().includes(s) ||
            item.category.toLowerCase().includes(s) ||
            item.address.toLowerCase().includes(s) ||
            item.user_name.toLowerCase().includes(s) ||
            String(item.price).toLowerCase().includes(s) ||
            date[0].toLowerCase().includes(s)
        );
      };

    if (!mainList){
        return (<h1>loading ...</h1>);
    }

    return(
        <>
            <PageHeader title='All Products'>
                <Input
                    type="search"
                    defaultValue={searchParams.get('s')}
                    onChange={(e) => setSearchParams({ s: e.target.value })}
                />
            </PageHeader>
            <ProductList mainList={filteredItems || mainList} categoryList={categoryList} />
        </>
    );
}