import { useState } from "react";
import "./BookEdit.css";

function BookEdit({ book, onSubmit }) {
  const [newTitle, setNewTitle] = useState(book.title);

  const handleChange = (event) => {
    setNewTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(book.id, newTitle);
  };

  return (
    <div className="bookEdit">
      <form onSubmit={handleSubmit}>
        <h3 className="mb-2">Title</h3>
        <input
          className="input is-small mb-2"
          type="text"
          value={newTitle}
          onChange={handleChange}
        />
        <button className="is-small button" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default BookEdit;
