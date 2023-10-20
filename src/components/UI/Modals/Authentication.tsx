import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom";
import Login from "../../Forms/LogIn";
import Register from "../../Forms/Register";
import "./Authentication.css";

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
        <div className="close-modal">
          <i onClick={onClickClose} className="fas fa-times"></i>
        </div>
        {!isUser && <p>Don't have an account? Please Register.</p>}
        {isUser && <p>Already have an account? Please Log In</p>}
        <nav className="modal-navigatiom">
          <ul>
            <li className="log-in">
              <button onClick={toggleForms} className="btn btn-primary">
                Log In
              </button>
            </li>
            <li className="log-in">
              <button onClick={toggleForms} className="btn btn-secondary">
                Register
              </button>
            </li>
          </ul>
        </nav>
      </header>

      <div className="modal-body">
        {!isUser && <Login />}
        {isUser && <Register />}
      </div>

      <footer>
        <p>Some footer text</p>
      </footer>
    </div>
  );
};

const Authentication = (props) => {
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

export default Authentication;
