import React from "react";
import "./ProductsTable.css";

const ProductsTable = () => {

  return (
    <React.Fragment>
 
          <div className="container">
          <h2>Produts table</h2>
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
          </div>
    
    </React.Fragment>
  );
};

export default ProductsTable;
