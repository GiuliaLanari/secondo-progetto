import { Component } from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
// import CommentArea from "./CommentArea";
class SingleBook extends Component {
  state = {
    selected: false,
  };
  render() {
    return (
      <Col className="h-100 mt-4">
        <Card className={this.state.selected ? "h-100 bg-danger  border-3" : "h-100 border border-light-subtle"}>
          <Card.Img
            variant="top"
            src={this.props.libro.img}
            alt={this.props.libro.title}
            className="h-50 object-fit-cover"
            onClick={() => this.setState({ selected: !this.state.selected })}
          />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{this.props.libro.title}</Card.Title>
            {/* {this.state.selected === true && <CommentArea asin={this.props.libro.asin} />} */}
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingleBook;
