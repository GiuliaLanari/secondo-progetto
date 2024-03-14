import ListGroup from "react-bootstrap/ListGroup";

const CommentsList = (props) => {
  return (
    <div>
      <h4>Commenti</h4>
      <ListGroup>
        {props.commenti.map((commento, index) => (
          <ListGroup.Item key={index}>{commento.comment}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};

export default CommentsList;
