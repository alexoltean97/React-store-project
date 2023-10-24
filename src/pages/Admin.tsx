import React from "react";
import { useState } from "react";
import axios from "axios";
import mainUrl from "../globals/environment-vars.js";

import "./Admin.css";

const Admin = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [feedback, setFeedback] = useState("");

  const getName = (event) => {
    setName(event.target.value);
  };

  const getDescription = (event) => {
    setDescription(event.target.value);
  };

  const getPrice = (event) => {
    setPrice(event.target.value);
  };

  const sendProduct = () => {
    axios
      .post(`${mainUrl}products.json`, {
        name: name,
        description: description,
        price: price
      })
      .then((response) => {
        console.log(response);
        setFeedback("Product added succesfully!");

        setTimeout(() => {
          setFeedback("");
        }, 3000)
      })
      .catch((error) => {
        console.log(error);
        setFeedback("Error adding product."); 
        setTimeout(() => {
          setFeedback(""); 
        }, 3000);
      });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    sendProduct();
  };

  return (
    <React.Fragment>
      <div className="container">
        <h3>Add Products form</h3>
        <form onSubmit={onFormSubmit} className="add-products">
          <input
            onChange={getName}
            type="text"
            value={name}
            placeholder="Add name"
            name="name"
          />

          <textarea
            name="description"
            onChange={getDescription}
            value={description}
            placeholder="Add a description"
          />

          <input
            type="number"
            onChange={getPrice}
            value={price}
            placeholder="Add Price"
            name="price"
          />

          <input type="submit" />
        </form>
        {feedback && <div className="mt-3 alert alert-info">{feedback}</div>}

      </div>

      <h2>Edit produts table</h2>
      <table>
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Laptop</td>
            <td>Description</td>
            <td>Price</td>
            <td>Fonticon edit/delete</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default Admin;
