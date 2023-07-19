import { useState } from "react";
import NewBookForm from "./NewBookForm";
import "./NewBook.css"

const NewBook = (props) => {
  const [isEditing, setEditing] = useState(false);

  const startEditingHandler = () => {
    setEditing(true);
  };

  const stopEditingHandler = () => {
    setEditing(false);
  };

  const saveBookHandler = (enteredBookData) => {
    const book = {
      ...enteredBookData,
      id: Math.random().toString,
    };
    props.onAddBook(book);
  };

  const startEditingButton = (
    <button id="add-book" onClick={startEditingHandler}>Add New Book</button>
  );

  return (
    <div>
      {!isEditing && startEditingButton}
      {isEditing && (
        <NewBookForm
          onSaveBook={saveBookHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewBook;
