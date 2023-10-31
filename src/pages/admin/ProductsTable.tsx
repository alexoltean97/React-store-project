import React from "react";
import "./ProductsTable.css";
import SearchNavigation from "../../components/SearchNavigation/SearchNavigation";
import Pagination from "../../components/UI/Pagination/Pagination";
import useProductManagement from "../../hooks/useProductManagement";
import ProductAdd from "../../components/UI/Modals/ProductAdd";
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import mainUrl from "../../globals/environment-vars";

const ProductsTable = () => {
  const [isModal, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModal);
  };

  const {
    loading,
    currentProducts,
    totalPages,
    currentPage,
    handleSearch,
    handlePageChange,
  } = useProductManagement(6);

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
        {isModal && <ProductAdd onClickClose={toggleModal} />}
        <SearchNavigation onSearch={handleSearch} />
        <button
          onClick={toggleModal}
          className="btn btn-primary"
          style={{ margin: "20px" }}
          type="submit"
        >
          Add Product
        </button>
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
            {!loading &&
              currentProducts.map((product) => (
                <tr>
                  <td>
                    <img src="https://placehold.co/50" alt="Placeholder" />
                  </td>
                  <td key={product}>{product.name}</td>
                  <td>{product.category}</td>
                  <td>{product.price}</td>
                  <td>{product.quantity}</td>
                  <td>
                    <Link to={`${product.id}/edit`}>
                      <i className="fas fa-pencil-alt"></i>
                    </Link>
                    <i
                      onClick={async () => {
                        if (
                          window.confirm(
                            "Are you sure you want to delete this product?"
                          )
                        ) {
                          try {
                             await axios.delete(`${mainUrl}products/${product.id}.json`);    
                             location.reload()                    
                        } catch (error) {
                            console.error("Error deleting product:", error);
                        }
                        }
                      }}
                      className="fas fa-trash"
                    ></i>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </React.Fragment>
  );
};

export default ProductsTable;
