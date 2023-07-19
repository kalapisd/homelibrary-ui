import { useState } from "react";

import BookList from "./BookList";
import Card from "../UI/Card";
import BookFilter from "./BookFilter";
import "./Books.css";

const Books = (props) => {
  const [filteredYear, setFilteredYear] = useState("2000");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredBooks = props.items.filter((book) => { 
    return book.published === filteredYear;
  });


  return (
    <div>
      <Card className="books">
        <BookFilter
          onChangeFilter={filterChangeHandler}
          selected={filteredYear}
        />
        <BookList items={filteredBooks}/>
      </Card>
    </div>
  );
};

export default Books;
