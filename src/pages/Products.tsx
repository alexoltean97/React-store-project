import product from "../interfaces/product.js";
import ProductCard from "../components/Products/ProductCard.js";
import Pagination from "../components/UI/Pagination/Pagination.js";
import SearchNavigation from "../components/SearchNavigation/SearchNavigation.js";
import { useEffect, useState } from "react";
import axios from "axios";
import mainUrl from "../globals/environment-vars.js";

const Products = () => {
  const [products, setProducts] = useState<product[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get(`${mainUrl}products.json/`);

        if (response) {
          setLoading(false);
        }

        const loadedProducts = [];

        for (const key in response.data) {
          loadedProducts.push({
            id: key,
            name: response.data[key].name,
            description: response.data[key].description,
            price: response.data[key].price,
          });
        }

        setProducts(loadedProducts);
        setTotalPages(Math.ceil(loadedProducts.length / recordsPerPage));
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

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

  // class="navbar navbar-light bg-light"

  return (
    <div className="products">
      <div className="container mt-4">
        <SearchNavigation onSearch={handleSearch}/>

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
