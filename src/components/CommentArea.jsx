import { Component } from "react";

import CommentsList from "../components/CommentsList";
import AddComment from "../components/AddComment";

const AuthenticationKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWUxOTc2MTRjNTllYzAwMTk5MGQ2ZTYiLCJpYXQiOjE3MDkyODMxNjksImV4cCI6MTcxMDQ5Mjc2OX0.KZCHGXqImKcqGr7zGKXszDY9su3m0Y3NGYP9AEzZhdU";

class ComponentArea extends Component {
  state = {
    commenti: [],
  };

  fetchCommenti = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/" + this.props.asin, {
      headers: {
        Authorization: "Bearer " + AuthenticationKey,
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Problemi nel caricamento");
        }
      })
      .then((commentiArrey) => {
        this.setState({
          commenti: commentiArrey,
        });
      })
      .catch((error) => {
        console.log("ERRORE", error);
      });
  };

  componentDidMount() {
    this.fetchCommenti();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.asin !== this.props.asin) {
      this.fetchCommenti();
    }
  }

  render() {
    return (
      <>
        <CommentsList commenti={this.state.commenti} />
        <AddComment asin={this.props.asin} />
      </>
    );
  }
}

export default ComponentArea;
