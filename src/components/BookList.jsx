import { Component } from "react";
import SingleBook from "./SingleBook";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

class BookList extends Component {
  state = {
    searchQuery: "",
  };

  render() {
    return (
      <>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={4} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
          </Col>
        </Row>
        <Row className="row-gap-2 mt-3">
          {this.props.arreyLibri
            .filter((element) => element.title.toLowerCase().includes(this.state.searchQuery))
            .map((element) => (
              <Col xs={12} md={3} key={element.asin}>
                <SingleBook libro={element} />
              </Col>
            ))}
        </Row>
      </>
    );
  }
}

export default BookList;
