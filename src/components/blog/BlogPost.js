import React from "react";

function BlogPost({ blog }) {
  return (
    <div className="post-container">
      <div className="post-header">
        <div className="head">
          <h3>{blog.title}</h3>
          <button className="read-button">Read</button>
          {/* Conditionally change the button text on click from Read to Unread and vice-versa */}
        </div>
        <p>{blog.author}</p>
      </div>

      <p>{blog.article}</p>
    </div>
  );
}

export default BlogPost;
