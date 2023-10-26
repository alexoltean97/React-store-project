import ProductCard from "../../components/Products/ProductCard.js";
import Pagination from "../../components/UI/Pagination/Pagination.js";
import SearchNavigation from "../../components/SearchNavigation/SearchNavigation.js";
import useProductManagement from "../../hooks/useProductManagement.js";

const Products = () => {
  const {
    loading,
    currentProducts,
    totalPages,
    currentPage,
    handleSearch,
    handlePageChange,
  } = useProductManagement(6);

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
