import { useState } from "react";
import "./styles.css";
import CreateBook from "./components/CreateBook";
import BookList from "./components/BookList";

export default function App() {
  const [books, setBooks] = useState([]);

  const addNewBook = async (title) => {
    await setBooks([
      ...books,
      { id: Math.floor(Math.random(0, 1) * 10000), title: title }
    ]);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  const updateBookById = (id, newTitle) => {
    const updatedBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: newTitle };
      }
      return book;
    });
    setBooks(updatedBooks);
    console.log(books);
  };

  return (
    <div className="App">
      <CreateBook addBook={addNewBook} />
      <BookList
        books={books}
        onDelete={deleteBookById}
        onEdit={updateBookById}
      />
    </div>
  );
}
