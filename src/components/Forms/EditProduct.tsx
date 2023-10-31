import React from "react";


const EditProduct = (props) => {

  return (
    <React.Fragment>
      <h3>Edit Product</h3>
      <form onSubmit={props.productUpdate} className="add-products">
        <input
          type="text"
          placeholder="Add name"
          name="name"
          value={props.formData.name}
          onChange={props.onInputChange}

        />

        <textarea
          name="description"
          placeholder="Add a description"
          value={props.formData.description}
          onChange={props.onInputChange}
        />

         <input
          type="number"
          placeholder="Add Price"
          name="price"
          value={props.formData.price}
          onChange={props.onInputChange}
        />

        <input
          type="number"
          placeholder="Add Quantity"
          name="quantity"
          value={props.formData.quantity}
          onChange={props.onInputChange}
        />

        <input
          type="text"
          placeholder="Add Category"
          name="category"
          value={props.formData.category}
          onChange={props.onInputChange}
        />

        <input type="file" id="product-image" name="product-image" />

        <input type="submit" />
      </form>
    </React.Fragment>
  );
};

export default EditProduct;
