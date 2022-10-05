import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import BlogPostContainer from "../components/blog/BlogPostContainer";
import Header from "../components/blog/Header";
import "../App.css";
import ToggleForm from "../components/blog/ToggleForm";

export default function Blog() {
  const [toggleForm, setToggleForm] = useState(true);
  const [entries, setEntries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/blogs")
      .then((res) => res.json())
      .then(setEntries);
  }, []);

  const handleToggleForm = () => {
    setToggleForm(!toggleForm);
  };

  const handleNewBlog = (form) => {
    setEntries([...entries, form]);
  };

  const searchBlogs = (val) => {
    setSearch(val);
  };
  const entriesToDisplay = entries.filter(
    (entry) =>
      entry.article.toLowerCase().includes(search.toLowerCase()) ||
      entry.title.toLowerCase().includes(search.toLowerCase()) ||
      entry.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <NavBar />
      <Header search={search} onSearch={searchBlogs} />
      <ToggleForm
        toggleForm={toggleForm}
        onToggleForm={handleToggleForm}
        onNewBlogSubmit={handleNewBlog}
      />
      <BlogPostContainer entries={entriesToDisplay} />
    </div>
  );
}
