import React, { useState } from "react";

function NewPostForm({ onNewBlogSubmit }) {
  const [form, setForm] = useState({
    title: "",
    author: "",
    article: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3001/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((r) => r.json())
      .then((form) => onNewBlogSubmit(form));

    setForm({
      title: "",
      author: "",
      article: "",
    });
  };

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="form">
      <form onSubmit={handleFormSubmit}>
        <input
          name="title"
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={handleFormChange}
        ></input>
        <input
          name="author"
          type="text"
          placeholder="Author"
          value={form.author}
          onChange={handleFormChange}
        ></input>
        <textarea
          rows="10"
          cols="60"
          name="article"
          placeholder="Write your post"
          value={form.article}
          onChange={handleFormChange}
        ></textarea>
        <input
          className="submit-button"
          style={{ paddingBottom: "25px" }}
          type="submit"
        ></input>
      </form>
    </div>
  );
}

export default NewPostForm;
