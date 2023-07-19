import { useRef, useState } from "react";
import Icon from "react-crud-icons";
import "./NewBookForm.css";
import Card from "../UI/Card";

const NewBookForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredSubtitle, setEnteredSubtitle] = useState("");
  const [enteredAuthor, setEnteredAuthor] = useState("");
  const [enteredGenre, setEnteredGenre] = useState("");
  const [enteredPublishedYear, setEnteredPublishedYear] = useState("");
  const [enteredpageNum, setEnteredPagenum] = useState("");
  const [enteredLanguage, setEnteredLanguage] = useState("");

  const titleChangehandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const subtitleChangehandler = (event) => {
    setEnteredSubtitle(event.target.value);
  };

  const authorChangeHandler = (event) => {
    setEnteredAuthor(event.target.value);
  };

  const genreChangehandler = (event) => {
    setEnteredGenre(event.target.value);
  };

  const publishedYearChangeHandler = (event) => {
    setEnteredPublishedYear(event.target.value);
  };

  const pageNumChangeHandler = (event) => {
    setEnteredPagenum(event.target.value);
  };

  const languageChangeHandler = (event) => {
    setEnteredLanguage(event.target.value);
  };

  /*const inputChangeHandler = (identifyer, value) => {
    switch (identifyer) {
      case "title":
        setEnteredTitle(value);
        break;
      case "subtitle":
        setEnteredSubtitle(value);
        break;
      case "author":
        setEnteredAuthor(value);
        break;
      case "genre":
        setEnteredGenre(value);
        break;
      case "published":
        setEnteredPublishedYear(value);
        break;
      case "pageNum":
        setEnteredPagenum(value);
        break;
      case "language":
        setEnteredLanguage(value);
        break;
      default:
        console.log(`Sorry, we are out of ${identifyer}.`);
    }
  };*/

  const submitHandler = (event) => {
    event.preventDefault();

    const book = {
      title: enteredTitle,
      subtitle: enteredSubtitle,
      author: enteredAuthor,
      genre: enteredGenre,
      published: enteredPublishedYear,
      pageNum: enteredpageNum,
      language: enteredLanguage,
    };

    props.onSaveBook(book);
    setEnteredTitle("");
    setEnteredSubtitle("");
    setEnteredAuthor("");
    setEnteredGenre("");
    setEnteredPublishedYear("");
    setEnteredPagenum("");
    setEnteredLanguage("");
  };


  //FIXME: useRef does not work yet, fix it
  const ref = useRef(null);

  const handleClick = () => {
    const submitButton = ref.current;
    console.log(submitButton);
    
    submitButton.onClick = () => {
      document.getElementById("myForm").submit();
    };
  };

  return (
    <Card className="form-box">
      <form id="myForm" onSubmit={submitHandler}>
        <div className="form-label">Book details</div>
        <div className="new-book__controls">
          <input
            placeholder="Title"
            type="text"
            onChange={titleChangehandler}
            value={enteredTitle}
          />
          <input
            placeholder="Subtitle"
            type="text"
            onChange={subtitleChangehandler}
            value={enteredSubtitle}
          />
          <input
            placeholder="Author"
            type="text"
            onChange={authorChangeHandler}
            value={enteredAuthor}
          />
          <input
            placeholder="Genre"
            type="text"
            onChange={genreChangehandler}
            value={enteredGenre}
          />
          <input
            placeholder="Published year"
            type="number"
            onChange={publishedYearChangeHandler}
            value={enteredPublishedYear}
          />
          <input
            placeholder="Number of pages"
            type="number"
            onChange={pageNumChangeHandler}
            value={enteredpageNum}
          />
          <input
            placeholder="Language"
            type="text"
            onChange={languageChangeHandler}
            value={enteredLanguage}
          />
        </div>
        <div className="buttons">
          <Icon
            name="undo"
            tooltip="Cancel"
            theme="dark"
            size="large"
            onClick={props.onCancel}
          />
          <Icon
            id="submit"
            name="add"
            tooltip="Add book"
            theme="dark"
            size="large"
          />
          <button type="submit">submit</button>
        </div>
      </form>
    </Card>
  );
};

export default NewBookForm;
