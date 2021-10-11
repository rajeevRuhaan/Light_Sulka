import "./Product.css";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const Program = ({
  name,
  calories,
  imageUrl,
  cpfc,
  additionalInfo,
  productId,
}) => {
  return (
    <Card className="card_card">
      <Card.Header>
        <Card.Title className="card_title">{name}</Card.Title>
      </Card.Header>
      <Card.Img className="pic" variant="top" src={imageUrl} alt={name} />
      <Card.Text className="centered">{calories}</Card.Text>
      <Card.Body>
        <Card.Text className="card_text">{cpfc}</Card.Text>
        <footer className="blockquote-footer">
          <cite title="Source Title">{additionalInfo}</cite>
        </footer>
      </Card.Body>
      <Card.Footer>
        <Button variant="success" className="info__button">
          <Link to={`/product/${productId}`} className="info__button_link">
            View
          </Link>
        </Button>
      </Card.Footer>
    </Card>
  );
};

export default Program;
