import ItemCard from "../ItemCard/ItemCard";



export default function ProductList ({mainList}){


    return (
        <div className="list-table">
            {
                mainList.map((item) => {
                    return (
                        <ItemCard key={item.id} item={item} />
                    );
                })
            }
        </div>
    );
}