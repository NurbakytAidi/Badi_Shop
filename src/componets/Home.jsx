import { NavLink } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="home-layout">
                <div>
                    <h1>Online clothing store</h1>
                    <p>
                        Fashion is an important part of our culture and life. We
                        all want to look stylish and fashionable, and clothes
                        play a big role in this. Badi-shop is a women's fashion
                        store located in Bishkek, Kyrgyzstan, offering a wide
                        range of trendy and quality products to help every woman
                        look her best.
                    </p>
                    <NavLink to="/products" className="btn btn-default">
                        Start shopping
                    </NavLink>
                </div>
                <img
                    src="https://epicris.ru/wp-content/uploads/2023/01/rejting-top-10-internet-magazinov-odezhdy.jpg"
                    width="550"
                    height="350"
                    className="rounded home-image"
                    alt=""
                />
            </div>

            <div className="wrapper">
                <footer className="footer">
                    <div className="footer__addr">
                        <h1 className="footer__logo">Badi Shop</h1>
                        <h2>Contacts</h2>
                        <address>
                        Bishkek City 
                            <NavLink to="/subscribe" className="footer__btn">Subscribe</NavLink>
                        </address>
                    </div>
                    <ul className="footer__nav">
                        <li className="nav__item">
                            <h2 className="nav__title">Help</h2>

                            <ul className="nav__ul">
                                <li>
                                    <NavLink to="">Online</NavLink>
                                </li>

                                <li>
                                    <NavLink to="">Order status by number</NavLink>
                                </li>

                                <li>
                                    <NavLink to="">My orders</NavLink>
                                </li>
                            </ul>
                        </li>

                        <li className="nav__item nav__item--extra">
                            <h2 className="nav__title">About us</h2>

                            <ul className="nav__ul nav__ul--extra">
                                <li>
                                    <NavLink to="">Magazine</NavLink>
                                </li>

                                <li>
                                    <NavLink to="">Participation in research</NavLink>
                                </li>

                                <li>
                                    <NavLink to="">Stock</NavLink>
                                </li>

                                <li>
                                    <NavLink to="">Subscribe</NavLink>
                                </li>

                                <li>
                                    <NavLink to="">Large selection of goods</NavLink>
                                </li>

                                <li>
                                    <NavLink to="">Vacancies</NavLink>
                                </li>
                            </ul>
                        </li>

                        <li className="nav__item">
                            <h2 className="nav__title">Partners</h2>

                            <ul className="nav__ul">
                                <li>
                                    <NavLink to="">Become a Contractor Badi-Shop</NavLink>
                                </li>

                                <li>
                                    <NavLink to="">Become a warehouse contractor</NavLink>
                                </li>

                                <li>
                                    <NavLink to="">For landlords</NavLink>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <div className="legal">
                        <p>&copy; 2023 10% discount on the first order in the Badi Shop app.</p>

                        <div className="legal__links">
                            <span>
                            With love <span className="heart">♥</span> Badi Shop
                            </span>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    );
}
