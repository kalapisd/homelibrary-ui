import BookInfo from "./BookInfo";
import "./BookList.css";

const BookList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback"> Found no books!</h2>;
  }

  return (
    <ul className="books_list">
      {props.items.map((book) => (
        <BookInfo key={book.id} book={book} />
      ))}
    </ul>
  );
};

export default BookList;