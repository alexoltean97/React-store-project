import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/UI/Global/Header";
import Footer from "../../components/UI/Global/Footer";
import Authentication from "../../components/UI/Modals/Authentication";
import Cart from "../../components/UI/Modals/Cart";
import AdminPanel from "../../components/UI/Navigation/AdminPanel";
const AdminLayout = () => {
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
      <div className="admin-wrapper">
        <AdminPanel />
        <div className="main-content">
          <Outlet />
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default AdminLayout;
