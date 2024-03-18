import { Component } from "react";
import SingleBook from "./SingleBook";
import CommentArea from "./CommentArea";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";

class BookList extends Component {
  state = {
    searchQuery: "",
    asin: "",
  };

  changeCardSelected = (newSelectedValue) => {
    this.setState({
      asin: newSelectedValue,
    });
  };

  render() {
    return (
      <>
        <Row className="justify-content-center row-gap-2 mt-3">
          <Col xs={6} md={5} className="text-center">
            <Form.Group>
              <Form.Control
                type="search"
                placeholder="Cerca un libro"
                value={this.state.searchQuery}
                onChange={(e) => this.setState({ searchQuery: e.target.value })}
              />
            </Form.Group>
            {this.props.arreyLibri
              .filter((element) => element.title.toLowerCase().includes(this.state.searchQuery))
              .map((element) => (
                <Col xs={6} md={12} key={element.asin}>
                  <SingleBook libro={element} asin={this.state.asin} changeCardSelected={this.changeCardSelected} />
                </Col>
              ))}
          </Col>
          <Col xs={6} md={5} className="text-center">
            <CommentArea asin={this.state.asin} />
          </Col>
        </Row>
      </>
    );
  }
}

export default BookList;
