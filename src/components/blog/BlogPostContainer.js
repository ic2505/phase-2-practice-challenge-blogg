import React from "react";
import BlogPost from "./BlogPost";

function BlogPostContainer({ entries }) {
  return (
    <div className="blog-container">
      {entries.map((entry) => {
        return <BlogPost key={entry.id} blog={entry} />;
      })}
    </div>
  );
}

export default BlogPostContainer;
