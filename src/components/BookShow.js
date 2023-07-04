import "./BookShow.css";
import BookEdit from "./BookEdit";
import { useState } from "react";

function BookShow({ book, onDelete, onEdit }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleDelete = (event) => {
    onDelete(book.id);
  };

  const handleSumbit = (id, newTitle) => {
    onEdit(id, newTitle);
    toggleEdit(false);
  };

  const toggleEdit = () => {
    setShowEdit(!showEdit);
  };

  let content = book.title;
  if (showEdit)
    content = (
      <BookEdit book={book} toggleEdit={toggleEdit} onSubmit={handleSumbit} />
    );
  return (
    <div className="book">
      <img
        className="pr-4"
        src={`https://picsum.photos/seed/${book.id}/300/200`}
      />
      <div className="book-title">{content}</div>
      <i onClick={toggleEdit} className="icon edit-icon fa-solid fa-pen"></i>
      <i
        onClick={handleDelete}
        className="icon cross-icon fa-sharp fa-solid fa-xmark"
      ></i>
    </div>
  );
}

export default BookShow;
