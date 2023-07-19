import Card from "../UI/Card";
import "./Book.css";
import BookDetails from "./BookDetails";

import CrudBar from "../CrudBar";

const Book = (props) => {

  const book = props.items[0];

  console.log(book);
  return (
    <Card className="book">
      <div className="book-container">
        <h1><img src={book.image} alt={book.title} /> <CrudBar className="crud-bar" /></h1>
      </div>
      <BookDetails item={book} />
    </Card>
  );
};

export default Book;

