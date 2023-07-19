import Card from "../UI/Card";
import "./Book.css";

const BookInfo = (props) => {
    return (
    <div>
      <Card className="book-info">
        <h1>{props.book.title}</h1>
        <h2>{props.book.authors[0]}</h2>
        <h2> - {props.book.published} - </h2>
      </Card>
    </div>
  );
};

export default BookInfo;