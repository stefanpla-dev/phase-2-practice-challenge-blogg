import React, { useState } from "react";

function BlogPost({ id, author, title, article, isItRead }) {
  const [isRead, setIsRead] = useState(false)
  
  function handleClick() {
    
    // fetch(`http://localhost:4000/blogs/${id}`,{
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     isRead: !isItRead,
    //   }),
    // })
    //   .then(response=>response.json())
    //   .then((data)=>console.log(data))
    
    
    setIsRead(!isRead)
  }

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="head">
          <h3>{title}</h3>
          <button className="read-button" onClick={handleClick}>{isRead ? "Read" : "Unread"}</button>
        </div>
        <p>Author {author}</p>
      </div>

      <p>{article}</p>
    </div>
  );
}

export default BlogPost;
