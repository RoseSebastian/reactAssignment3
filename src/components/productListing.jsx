/* eslint-disable react/jsx-key */
import { useEffect, useState } from "react";
import "../styles/productListing.css";
import Product from "./product";
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";

function ProductListing() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("Error occured: ", err);
      });
  }, []);

  return (
    <>
      <Container>
        <h1>Products</h1>
        <div>
          <Row>
            {products.map((product) => {
              return (
                <Col xs={12} sm={6} md={4} lg={3} xxl={2}>
                  <Product productData={product} key={product.id}/>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </>
  );
}

export default ProductListing;
