import { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const AuthenticationKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOTc2MTRjNTllYzAwMTk5MGQ2ZTYiLCJpYXQiOjE3MDkyODMxNjksImV4cCI6MTcxMDQ5Mjc2OX0.KZCHGXqImKcqGr7zGKXszDY9su3m0Y3NGYP9AEzZhdU";

const commento = {
  testo: "",
  voto: 1,
};

class AddComment extends Component {
  state = {
    commentoAggiunto: commento,
  };

  addCommento = (e) => {
    e.preventDefault();
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
      method: "POST",
      body: JSON.stringify(this.state.commentoAggiunto),
      headers: {
        Authorization: "Bearer " + AuthenticationKey,
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          window.alert("Commento pubblicato!");
          this.setState({
            commentoAggiunto: commento,
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
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Aggiungi il tuo commento:</Form.Label>
            <Form.Control as="textarea" rows={2} value={this.state.comment} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Voto?</Form.Label>
            <Form.Select aria-label="Default select example" value={this.state.vote}>
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
