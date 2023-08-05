import { NavLink } from "react-router-dom";

const isActiveClass = ({isActive}) => isActive ? "active" : "";

export default function Navbar(props){
    const cartCount = props.cart.reduce((total, product) => total + product.quantity,0);
    

    return(
        <>
            <nav className="navbar">
                <NavLink to="/" className="nav-brand">
                Badi-Shop
                </NavLink>
                <ul>
                    <li className="nav-item">
                        <NavLink to="/" className={isActiveClass}>
                            Home
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className={isActiveClass}>
                            About us
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/products" className={isActiveClass}>
                            Products
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/search" className={isActiveClass}>
                            ProductSearch
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/cart" className="nav-item nav-cart btn btn-accent">
                            Cart 
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}