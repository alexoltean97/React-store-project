import React from "react";
import axios from "axios";
import { useState } from "react";
import mainUrl from "../../globals/environment-vars.js";

const AddProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const [category, setCategory] = useState();
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

  const getQuantity = (event) => {
    setQuantity(event.target.value);
  };

  const getCategory = (event) => {
    setCategory(event.target.value);
  };

  const sendProduct = () => {
    axios
      .post(`${mainUrl}products.json`, {
        name: name,
        description: description,
        price: price,
        category: category,
        quantity: quantity
      })
      .then((response) => {
        console.log(response);
        setFeedback("Product added succesfully!");

        setTimeout(() => {
          setFeedback("");
        }, 3000);
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

        <input
          type="number"
          onChange={getQuantity}
          value={quantity}
          placeholder="Add Quantity"
          name="quantity"
        />

        <input
          type="text"
          onChange={getCategory}
          value={category}
          placeholder="Add Category"
          name="category"
        />

        <input type="file" id="product-image" name="product-image" />

        <input type="submit" />
      </form>
      {feedback && <div className="mt-3 alert alert-info">{feedback}</div>}
    </React.Fragment>
  );
};

export default AddProduct;
