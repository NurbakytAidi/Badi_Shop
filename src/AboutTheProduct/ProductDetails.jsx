import useFetch from "../useFetch/useFetch";
import { NavLink, useParams, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ProductDetails(props) {
    const [product, setProducts] = useState({});
    const { get } = useFetch("https://fakestoreapi.com/");
    const params = useParams();

    useEffect(() => {
        get(`products/${params.id}`)
            .then((data) => {
                setProducts(data);
                console.log(data);
            })
            .catch((error) =>
                console.log("Could not load product details", error)
            );
    }, []);

    return (
        <>
            <div className="product-details-layout">
                <div>
                    <h2></h2>
                    <img
                        src={product.image}
                        width="300"
                        height="400"
                        className="product-details-image"
                        alt=""
                    />
                </div>
                <div>
                    <div className="tabs">
                        <ul>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "tab-active" : ""
                                    }
                                    to=""
                                    end
                                >
                                    Buy
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "tab-active" : ""
                                    }
                                    to="nutrition"
                                >
                                    Details
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    className={({ isActive }) =>
                                        isActive ? "tab-active" : ""
                                    }
                                    to="storage"
                                >
                                    About Clothes
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <Outlet context={product} />
                </div>
            </div>
        </>
    );
}
