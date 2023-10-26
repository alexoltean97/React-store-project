import ProductCard from "../../components/Products/ProductCard.js";
import Pagination from "../../components/UI/Pagination/Pagination.js";
import SearchNavigation from "../../components/SearchNavigation/SearchNavigation.js";
import { useEffect, useState } from "react";
import useGetProducts from "../../hooks/useGetProducts.tsx";

const Products = () => {
  const { products: fetchedProducts, loading } = useGetProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  useEffect(() => {
    setTotalPages(Math.ceil(fetchedProducts.length / recordsPerPage));
  }, [fetchedProducts]);

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const currentProducts = fetchedProducts
    .filter(
      (product) =>
        product.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(firstIndex, lastIndex);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="products">
      <div className="container mt-4">
        <SearchNavigation onSearch={handleSearch} />

        <div className="row">
          {loading && <p>Loading...</p>}

          {!loading &&
            currentProducts.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
                link={product.id}
              />
            ))}
        </div>

        <Pagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Products;
