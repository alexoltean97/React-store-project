import axios from "axios";
import mainUrl from "../../globals/environment-vars";
import { useLoaderData } from "react-router-dom";
import { useState } from "react";
import { useParams } from "react-router-dom";
import product from "../../interfaces/product.js";
import EditProduct from "../../components/Forms/EditProduct.js";
import { useNavigate   } from "react-router-dom";

const SingleProductDetail = () => {
  const data: product = useLoaderData() as product;
  const navigate = useNavigate();
  const { productId }= useParams();
  const [feedback, setFeedback] = useState("");
  const [formData, setFormData] = useState({
    name: data.name,
    description: data.description,
    quantity: data.quantity,
    price: data.price,
    category: data.category
  })  

  const handleChange = (event) => {
    const {name, value} = event.target;

    setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
  }

  const updateProduct = async () => {
    await axios.put(`${mainUrl}products/${productId}.json`, formData)
    .then((response) => {
        console.log(response);
        setFeedback("Product edited succesfully!");

        setTimeout(() => {
          setFeedback("");
          navigate("/admin/products")
        }, 2000);
      })
      .catch((error) => {
        console.log(error);
        setFeedback("Error adding product.");
        setTimeout(() => {
          setFeedback("");
        }, 2000);
      });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateProduct();
  };

  return (
    <div>
      {productId}
      <EditProduct
        formData={formData}
        onInputChange={handleChange}
        productUpdate={handleSubmit}
      ></EditProduct>
      {feedback && <div className="mt-3 alert alert-info">{feedback}</div>}
    </div>
  );
};

export default SingleProductDetail;

export async function loader({ params }) {
  const response = await axios.get(
    `${mainUrl}products/${params.productId}.json`
  );
  return response.data;
}
