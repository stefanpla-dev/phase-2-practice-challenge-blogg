import React, {useState} from "react";

function NewPostForm({ blogPosts, setBlogPosts }) {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")
  const [newPost, setNewPost] = useState("")
  
  function handleSubmit(e) {
    e.preventDefault();
    
    let newSubmission = {title, author, newPost}

    fetch("http://localhost:4000/blogs", {
      method: "POST",
      headers: {"content-type": "Application/json"},
      body: JSON.stringify(newSubmission),
    })
      .then(response=>response.json())
      .then((data)=>setBlogPosts([...blogPosts, data]));
  }


  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Title" 
          onChange={(e)=>{setTitle(e.target.value)}} 
          value={title}
          />
        <input 
          type="text" 
          placeholder="Author"
          onChange={(e)=>{setAuthor(e.target.value)}}
          value={author}
        />
        <textarea 
          rows="10" 
          cols="60" 
          placeholder="Write your post"
          onChange={(e)=>{setNewPost(e.target.value)}}
          value={newPost}
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
