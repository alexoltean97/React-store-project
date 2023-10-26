import React from "react";
import "./ProductsTable.css";
import useGetProducts from "../../hooks/useGetProducts";
import { useEffect, useState } from "react";
import SearchNavigation from "../../components/SearchNavigation/SearchNavigation";
import Pagination from "../../components/UI/Pagination/Pagination";
const ProductsTable = () => {
  const {products, loading} = useGetProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;


  useEffect(() => {
    setTotalPages(Math.ceil(products.length / recordsPerPage));
  }, [products]);


  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const currentProducts = products
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(firstIndex, lastIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

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
        <SearchNavigation onSearch={handleSearch} />
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
            {!loading && currentProducts.map((product) => (
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
