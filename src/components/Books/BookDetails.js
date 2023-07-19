import Card from "../UI/Card";
import "./Book.css";
import GenreIcon from "../GenreIcon";

const BookDetails = (props) => {
  return (
    <div>
      <Card className="book-info">
        <h1>{props.item.title} <GenreIcon icon={props.item.genre}></GenreIcon></h1>
        <h2>{props.item.authors[0]}</h2>
        <h2> - {props.item.published} - </h2>
      </Card>
      
    </div>
  );
};

export default BookDetails;
