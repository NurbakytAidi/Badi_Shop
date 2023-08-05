import useFetch from "../useFetch/useFetch.js";
import { useState, useEffect } from "react";
import Loader from "../Products/Loader.jsx";
import Product from "../Products/Product.jsx";

export default function Products(props) {
    
    const [products, setProducts] = useState([]);
    const { get, loading } = useFetch("https://fakestoreapi.com/");

    useEffect(() => {
        get("products")
            .then((data) => {
                setProducts(data);
                // console.log(data);
            })
            .catch((error) => console.log(error));
    }, []);

    return (
        <>
            <div className="products-layout">
                <h1>Online store fashionable women's clothing Badi-shop</h1>
                <p>
                    The collections at Badi-shop are constantly updated to offer
                    fresh and current trends in the fashion world. The store
                    adheres to high quality standards and is convinced that
                    every woman deserves the best service and quality products.
                    In addition, Badi-shop offers a convenient shopping service
                    that allows customers to receive their orders quickly and
                    hassle-free.
                </p>
                <div className="products-grid">
                    {loading && <Loader />}
                    {products.map((product) => {
                        return (<Product 
                        key={product.id} 
                        details={product}
                        cart={props.cart}
                        onProductAdd={props.onProductAdd}
                        onProductDelete={props.onProductDelete} 
                        ></Product>
                        );
                    })}
                </div>
            </div>
        </>
    );
}

// "https://fakestoreapi.com/"
// "products/category/women's clothing"
