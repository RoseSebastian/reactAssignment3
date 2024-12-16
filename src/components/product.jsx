/* eslint-disable react/prop-types */
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function Product(props) {

  const navigate = useNavigate();
  const goToProductDetails = () => {
    navigate(`/product-details/${props.productData.id}`);
  };

  return (
    <Card style={{ marginBottom: "25px" }}>
      <Card.Img
        className="productImg"
        variant="top"
        src={props.productData.image}
      />
      <Card.Body>
        <Card.Title className="productTitle">
          {props.productData.title}
        </Card.Title>
        <Card.Subtitle className="productPrice">
          ${props.productData.price}
        </Card.Subtitle>
        <Card.Text className="productDesc">
          {props.productData.description}
        </Card.Text>
        <Button onClick={goToProductDetails} variant="warning">
          View Product
        </Button>
        <Button variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
