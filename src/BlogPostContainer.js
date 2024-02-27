import React from "react";
import BlogPost from "./BlogPost";

function BlogPostContainer({ blogPosts }) {
  
  return (
    <div className="blog-container">
      {blogPosts.map((blogPost)=>(
        <BlogPost
        key={blogPost.id}
        id={blogPost.id}
        author={blogPost.author}
        title={blogPost.title}
        isItRead={blogPost.isRead}
        article={blogPost.article}
        />
      ))}
    </div>
  );
}

export default BlogPostContainer;
