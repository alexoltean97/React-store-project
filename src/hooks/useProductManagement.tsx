import { useState, useEffect } from "react";
import useGetProducts from "./useGetProducts.tsx";

const useProductManagement = (recordsPerPage: number) => {
  const { products: fetchedProducts, loading } = useGetProducts();
  
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  const currentProducts = fetchedProducts
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(firstIndex, lastIndex);

  useEffect(() => {
    setTotalPages(Math.ceil(fetchedProducts.length / recordsPerPage));
  }, [fetchedProducts]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return {
    loading,
    currentProducts,
    totalPages,
    currentPage,
    handleSearch,
    handlePageChange
  };
};

export default useProductManagement;
