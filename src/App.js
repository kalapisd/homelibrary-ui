import { useState } from "react";
import "./App.css";
import "./fonts/Space_Grotesk/static/SpaceGrotesk-Bold.ttf";
import "./fonts/Space_Grotesk/static/SpaceGrotesk-Light.ttf";
import "./fonts/Space_Grotesk/static/SpaceGrotesk-Medium.ttf";
import "./fonts/Space_Grotesk/static/SpaceGrotesk-Regular.ttf";
import "./fonts/Space_Grotesk/static/SpaceGrotesk-SemiBold.ttf";

import Book from "./components/Books/Book";

import estaub from "./assets/images/EStaubsmall.jpg";
import tuzserlege from "./assets/images/HPTuzSerlege.jpg";
import tanciskola from "./assets/images/Tanciskola.jpg";

import literature from "./assets/icons/literature.png";
import NewBook from "./components/NewBook/NewBook";
import Books from "./components/Books/Books";

const App = () => {
  const DUMMY_BOOKS = [
    {
      id: 1,
      image: estaub,
      title: "Nem vagyunk már gyerekek",
      authors: ["Emma Staub"],
      published: "2021",
      genre: literature,
    },
    {
      id: 2,
      image: tuzserlege,
      title: "Harry Potter és a tűz serlege",
      authors: ["J. K. Rowling"],
      published: "2000",
      genre: "Kids",
    },
    {
      id: 3,
      image: tanciskola,
      title: "Tánciskola",
      authors: ["Grecsó Krisztián"],
      published: "2000",
      genre: literature,
    },
  ];

  const [books, setBooks] = useState(DUMMY_BOOKS);


  //TODO:: solve saving to database 
  const addBookHandler = book => {
    setBooks((prevBooks) => {
        return [book, ...prevBooks];
      });
      console.log(books);
      books.map(book => console.log(book));
    };

  return (
    <div>
      <Books items={books}/>
      <NewBook onAddBook={addBookHandler} />
      <Book items={books} />
    </div>
  );
}

export default App;
