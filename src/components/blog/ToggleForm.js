import React from "react";
import NewPostForm from "./NewPostForm";

export default function ToggleForm({ toggleForm, onToggleForm, onNewBlogSubmit }) {
  return (
    <div>
      {toggleForm ? (
        <>
          <button className="show-form" onClick={onToggleForm}>
            Hide Form
          </button>
          <NewPostForm onNewBlogSubmit={onNewBlogSubmit}/>
        </>
      ) : (
        <button className="show-form" onClick={onToggleForm}>
          Show Form
        </button>
      )}
    </div>
  );
}
