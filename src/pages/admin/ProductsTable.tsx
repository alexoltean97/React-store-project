import React from "react";
import "./ProductsTable.css";
import useGetProducts from "../../hooks/useGetProducts";

const ProductsTable = () => {
  const {products, loading} = useGetProducts();

  const TABLE_HEADS = [
    "Thumbnails",
    "Product Title",
    "Category",
    "Price",
    "Quantity",
    "Action",
  ];

  return (
    <React.Fragment>
      <div className="container">
        <h2>Produts table</h2>
        {loading && <p>Loading...</p>}
        <table className="table table-bordered">
          <thead>
            <tr>
              {TABLE_HEADS.map((head) => (
                <th key={head}>{head}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {!loading && products.map((product) => (
              <tr>
                <td>
                  <img src="https://placehold.co/50" alt="Placeholder" />
                </td>
                <td key={product}>{product.name}</td>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>{product.quantity}</td>
                <td>
                  <i className="fas fa-pencil-alt"></i>
                  <i className="fas fa-trash"></i>
                </td>
              </tr>
            ))}
    
          </tbody>
        </table>
      </div>
    </React.Fragment>
  );
};

export default ProductsTable;
