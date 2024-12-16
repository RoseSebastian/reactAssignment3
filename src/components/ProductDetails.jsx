import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import "../styles/ProductDetails.css";

function ProductDetails() {
  const [productdata, setProductData] = useState({});
  let { id } = useParams();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/" + id)
      .then((res) => {
        setProductData(res.data);
      })
      .catch((err) => {
        console.log("Error occured: ", err);
      });
  }, [id]);

  return (
    <>
      <div className="detail-info">
        <div className="img-card">
          <img src={productdata.image} alt={productdata.title} />
        </div>
        <div className="product-detail">
          <h2 className="detail-title">{productdata.title}</h2>
          <h3 className="modal-price">$ {productdata.price}</h3>
          <p className="modal-desc">{productdata.description}</p>
          <Button variant="primary">Add To Cart</Button>
        </div>
      </div>
    </>
  );
}

export default ProductDetails;
