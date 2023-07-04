import { useState } from "react";
import "./CreateBook.css";

function CreateBook({ addBook }) {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addBook(title);
    setTitle("");
  };
  return (
    <div className="create-book">
      <form onSubmit={handleSubmit}>
        <h3>Title</h3>
        <input
          className="input is-primary is-small"
          onChange={handleChange}
          type="text"
          value={title}
          id="bookTitle"
        />
        <button className="submit button">Submit</button>
      </form>
    </div>
  );
}

export default CreateBook;
