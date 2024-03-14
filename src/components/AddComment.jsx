import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AuthenticationKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOTc2MTRjNTllYzAwMTk5MGQ2ZTYiLCJpYXQiOjE3MDkyODMxNjksImV4cCI6MTcxMDQ5Mjc2OX0.KZCHGXqImKcqGr7zGKXszDY9su3m0Y3NGYP9AEzZhdU";

class AddComment extends Component {
  state = {
    comment: "",
    rate: 1,
    elementId: this.props.asin,
  };

  addCommento = (e) => {
    e.preventDefault();
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      method: "POST",
      body: JSON.stringify(this.state),
      headers: {
        Authorization: "Bearer " + AuthenticationKey,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          window.alert("Commento pubblicato!");
          this.setState({
            comment: "",
            rate: 1,
            elementId: this.props.asin,
          });
        } else {
          window.alert("Riprova più tardi!");
          throw new Error("Errore nel salvataggio del commento");
        }
      })
      .catch((error) => {
        console.log("Errore", error);
      });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.addCommento}>
          <Form.Group className="mb-3">
            <Form.Label>Aggiungi il tuo commento:</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              onChange={(e) => {
                this.setState({
                  comment: e.target.value,
                });
              }}
              value={this.state.comment}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Voto?</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={(e) => {
                this.setState({
                  rate: e.target.value,
                });
              }}
              value={this.state.rate}
              required
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </Form.Select>
          </Form.Group>

          <Button variant="success" type="submit">
            Pubblica
          </Button>
        </Form>
      </>
    );
  }
}

export default AddComment;
