import SingleBook from "./SingleBook";

const BookList = function (props) {
  return props.arreyLibri.map((element) => {
    return <SingleBook libro={element} key={element.asin} />;
  });
};

export default BookList;
