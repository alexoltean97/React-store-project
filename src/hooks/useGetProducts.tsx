import { useState, useEffect } from "react";
import axios from "axios";
import mainUrl from "../globals/environment-vars.js";

 const useGetProducts = () => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
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
            quantity: response.data[key].quantity,
            category: response.data[key].category,
            price: response.data[key].price,
          });
        }

        setProducts(loadedProducts);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
  }, []);

  return { loading, products };
};

 export default useGetProducts;
