import axios from "axios";
import mainUrl from "../../globals/environment-vars.js";
import { useLoaderData } from "react-router-dom";
import product from "../../interfaces/product.js";
import "./SingleProducts.css";
const SingleProduct = () => {
  const data: product = useLoaderData() as product;
  return (
    <div className="container product-container">
      <div className="row">
        <div className="col-md-6 product-image">
          <img src="https://placehold.co/500x500" alt="Product Image" />
        </div>

        <div className="col-md-6 product-details">
          <h2>{data.name}</h2>
          <p>{data.description}</p>
          <p>
            <strong>Price: ${data.price}</strong>
          </p>
          <form action="#">
            <div className="mb-3">
              <label htmlFor="quantity" className="form-label">
                Quantity
              </label>
              <input
                type="number"
                className="form-control"
                id="quantity"
                min="1"
                value="1"
              />
            </div>
            <button type="submit" className="btn btn-add-to-cart">
              Add to Cart
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;

export async function loader({ params }) {
  const response = await axios.get(
    `${mainUrl}products/${params.productId}.json`
  );
  return response.data;
}
