import { Component } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col xs={12} md={4} lg={3} onClick={(e) => this.setState({ selected: !this.state.selected })}>
        <Card className={this.state.selected ? "bg-danger h-100 border-3" : "h-100 border border-light-subtle"}>
          <Card.Img
            variant="top"
            src={this.props.libro.img}
            alt={this.props.libro.title}
            className="h-50 object-fit-cover"
          />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{this.props.libro.title}</Card.Title>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
