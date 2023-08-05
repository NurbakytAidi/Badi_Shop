import "./App.css";
import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./componets/Home";
import About from "./componets/About";
import Navbar from "./componets/Navbar";
import Products from "./Products/Products";
import Cart from "./componets/Cart";
import ProductDetailinfo from "./AboutTheProduct/ProductDetaiinfo";
import ProductDetailsNutrition from "./AboutTheProduct/ProductDetailsNutrition";
import ProductDetails from "./AboutTheProduct/ProductDetails";
import ProductDetailsStorage from "./AboutTheProduct/ProductDetailsStorage";
import ProductSearch from "./componets/ProductSearch";
import Login from "./FormUsers/Login";
import Register from "./FormUsers/Register";



function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  }

  const [cart, setCart] = useState(function() {
    let sevedCart = [];
    try{
      sevedCart = JSON.parse(localStorage.getItem("Cart")) || [];
    }catch (error){
      sevedCart = [];
    }
    return sevedCart;
  });

    useEffect(() => {
      if(cart){
        localStorage.getItem("Cart", JSON.stringify(cart));
      }
      console.log(cart)
    }, [cart]);

      function handleProductAdd(newProduct) {

        const existingProduct = cart.find(
          (product) => product.id === newProduct.id
        );
        if(existingProduct){
          const updaTedCart = cart.map((product) => {
            if(product.id === newProduct.id){
              return{
                ...product,
                quantity: product.quantity   + 1,
              };
            }
            return product;
          });
          setCart(updaTedCart);
        }else{
          setCart([
            ...cart,
            {
              ...newProduct,
              quantity: 1,
            },
          ]);
        } 
      }

      function handleProductDelete(id) {
        const updatedCart = cart.filter((product) => product.id !== id);
        setCart(updatedCart);

       
      }



    return (
        <>
            <BrowserRouter>
                <Navbar cart={cart} />
                <div className="container">
                  <Routes>
                    <Route path="/" element={<Home/>}>
                    </Route>

                    <Route path="/subscribe" element={currentForm === "login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>}></Route>
                    
                    <Route path="/about" element={<About/>}>
                    </Route>
                    <Route path="/products" element={<Products cart={cart} onProductAdd={handleProductAdd} onProductDelete={handleProductDelete}/>}></Route>

                        <Route path="/products/:id" element={<ProductDetails onProductAdd={handleProductAdd}/>}>
                          <Route path="" element={<ProductDetailinfo onProductAdd={handleProductAdd}/>}></Route>

                          <Route
                            path="nutrition"
                            element={<ProductDetailsNutrition/>}
                          ></Route>
                          <Route path="storage" element={<ProductDetailsStorage/>}></Route>
                        </Route>

                    <Route path="/cart" element={<Cart cart={cart}/>}>
                    </Route>
                    <Route path="/search" element={<ProductSearch cart={cart} onProductAdd={handleProductAdd} onProductDelete={handleProductDelete}/>}></Route>
                  </Routes>

                </div>  
            </BrowserRouter>
        </>
    );
}

export default App;
