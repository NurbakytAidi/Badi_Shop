import useFetch from "../useFetch/useFetch";
import { useState, useEffect } from "react";
import Product from "../Products/Product";
import Loader from "../Products/Loader";

export default function ProductSearch(props) {
    const [product, setProduct] = useState([]);
    const [value, setValue] = useState("");
    const { get, loading } = useFetch(`https://fakestoreapi.com/`);

    useEffect(() => {
        get(`products`)
            .then((data) => {
                setProduct(data);
            })
            .catch((error) => console.log(error));
    }, []);

    const handleOnSumbit = (event) => {
        event.preventDefault();
    };

    const filteredSearch = product.filter((data) => {
        return data.category.toLowerCase().includes(value.toLocaleLowerCase());
    });

    return (
        <>
            <form className="container__search_form" onSubmit={handleOnSumbit}>
                <div className="search-box">
                    <label className="label__form" htmlFor="text">Poduct search</label>
                    <input
                        type="text"
                        name="text"
                        id="text"
                        placeholder="product search"
                        onChange={(event) => setValue(event.target.value)}
                        
                    />
                    <a className="search-btn">
                        <i className="fa fa-search" aria-hidden="true"></i>
                    </a>
                </div>
            </form>

            <div className="products-search">
                {loading && <Loader />}
                {filteredSearch.map((products) => {
                    return (
                        <Product
                            key={products.id}
                            details={products}
                            cart={props.cart}
                            onProductAdd={props.onProductAdd}
                            onProductDelete={props.onProductDelete}
                        />
                    );
                })}
            </div>
        </>
    );
}
