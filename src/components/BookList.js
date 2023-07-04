import BookShow from "./BookShow";
import "./BookList.css";

function BookList({ books, onDelete, onEdit }) {
  const renderedBooks = books.map((book, index) => {
    return <BookShow book={book} onDelete={onDelete} onEdit={onEdit} />;
  });
  return (
    <div className="book-list is-flex is-flex-wrap-wrap">{renderedBooks}</div>
  );
}

export default BookList;
