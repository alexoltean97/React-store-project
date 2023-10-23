import axios from "axios";
import mainUrl from "../globals/environment-vars.js";
import { useLoaderData } from "react-router-dom";
import product from "../interfaces/product.js";
const SingleProduct = () => {
  const data: product = useLoaderData() as product;

  return <h2>{data.name}</h2>;
};

export default SingleProduct;

export async function loader({ params }) {
  const response = await axios.get(
    `${mainUrl}products/${params.productId}.json`
  );
  return response.data;
}
