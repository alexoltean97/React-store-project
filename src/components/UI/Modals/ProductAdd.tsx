import React from "react";
import ReactDOM from "react-dom";
import AddProduct from "../../Forms/AddProduct";

const Backdrop = () => {
  return <div className="backdrop"> </div>;
};

const ModalOverlay = (props) => {
  const onClickClose = () => {
    props.onClickClose();
  };

  return (
    <div className="modal-card" style={{transform: "translate(-50%, -60%)"}}>
      <header className="header-modal">
        <div className="close-modal">
          <i onClick={onClickClose} className="fas fa-times"></i>
        </div>
        <div className="general">
          <h4>Please add a Product</h4>
        </div>
      </header>

      <div className="modal-body">
        <AddProduct />
      </div>

      <footer>
        <p>Some footer text</p>
      </footer>
    </div>
  );
};

const ProductAdd = (props) => {
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

export default ProductAdd;
