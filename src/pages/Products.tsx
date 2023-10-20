import product from "../interfaces/product.js";
import ProductCard from "../components/Products/ProductCard.js";
import { useEffect, useState } from "react";
import axios from "axios";
import mainUrl from "../globals/environment-vars.js";

const Products = () => {
  const [products, setProducts] = useState<product[]>([]);
  const [loading, setLoading] = useState(true);

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
            price: response.data[key].price
          })
        }
        

        // const restProducts = response.data.map((prod: product) => ({
        //   id: prod.id,
        //   description: prod.description,
        //   name: prod.name,
        //   price: prod.price,
        // }));

        setProducts(loadedProducts);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="products">
      <div className="container mt-4">
        <div className="row">
          {loading && <p>Loading...</p>}

          {!loading &&
            products.map((product) => (
              <ProductCard
                key={product.id}
                name={product.name}
                description={product.description}
                price={product.price}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
