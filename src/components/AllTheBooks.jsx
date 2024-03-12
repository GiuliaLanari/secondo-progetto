import { Col, Container, Row, Card, Button } from "react-bootstrap";

import items from "../Books/fantasy.json";

const AllTheBooks = function () {
  return (
    <Container>
      <Row className="row-gap-4">
        {items.map((libro) => {
          return (
            <Col xs={12} md={4} lg={3} key={libro.asin}>
              <Card style={{ height: "40rem" }}>
                <Card.Img variant="top" src={libro.img} alt={libro.title} />
                <Card.Body>
                  <Card.Title>{libro.title}</Card.Title>
                  <Card.Text>
                    {libro.asin} | {libro.category} {libro.price} £
                  </Card.Text>
                  <Button variant="primary">Aggiungi al Carello</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default AllTheBooks;
