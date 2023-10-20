import { useState } from "react";
import React from "react";
import Header from "./components/UI/Global/Header";
import Footer from "./components/UI/Global/Footer";
import Products from "./components/Products/Products";
import router from "./routes";
import { RouterProvider } from "react-router-dom";
import Authentication from "./components/UI/Modals/Authentication";
import Cart from "./components/UI/Modals/Cart";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <React.Fragment>
      {isModalOpen && <Authentication onClickClose={toggleModal} />}
      {isCartOpen && <Cart onClickClose={toggleCart} />}
      <Header onLoginClick={toggleModal} onCartClick={toggleCart} />
      {/* <Products /> */}
      <RouterProvider router={router}  />;
      <Footer />
    </React.Fragment>
  );
}

export default App;
