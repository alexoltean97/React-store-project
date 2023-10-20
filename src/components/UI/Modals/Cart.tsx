import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import "./Cart.css";

const Backdrop = () => {
  return <div className="backdrop"> </div>;
};

const ModalOverlay = (props) => {
  const [isUser, setIsUser] = useState(false);

  const toggleForms = () => {
    setIsUser(!isUser);
  };

  const onClickClose = () => {
    props.onClickClose();
  };

  return (
    <div className="modal-card">
      <header className="header-modal">

            <h2>Cart modal</h2>

        <div className="close-modal">
          <i onClick={onClickClose} className="fas fa-times"></i>
        </div>
      </header>

      <div className="modal-body">
            <p>This is the cart  modal</p>
      </div>

      <footer>
        <p>Some footer text</p>
      </footer>
    </div>
  );
};

const Cart = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}

      {ReactDOM.createPortal(
        <ModalOverlay onClickClose={props.onClickClose} />,
        document.getElementById("modal-root")
      )}
    </React.Fragment>
  );
};

export default Cart;
