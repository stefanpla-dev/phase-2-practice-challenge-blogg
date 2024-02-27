import logo from "./logo.svg";
import "./App.css";
import BlogPostContainer from "./BlogPostContainer";
import NewPostForm from "./NewPostForm";
import Header from "./Header";
import React, { useState, useEffect } from "react"

function App() {
  const [blogPosts, setBlogPosts] = useState([])
  const [showForm, setShowForm] = useState(true)
  const [search, setSearch] = useState("")

  function handleHide() {
    setShowForm(!showForm)
  }

  const filteredList = blogPosts.filter((post)=>
  post.title.toLowerCase().includes(search.toLowerCase()) || post.author.toLowerCase().includes(search.toLowerCase())
  )

  useEffect(()=>{
    fetch("http://localhost:4000/blogs")
      .then(response=>response.json())
      // .then(data=>console.log(data))
      .then(data=>setBlogPosts(data))
  },[])

  return (
    <div className="App">
      <Header setSearch={setSearch}/>

      <button className="show-form" onClick={handleHide}>{showForm ? "Hide Form" : "Show Form"}</button>
      {showForm ? <NewPostForm blogPosts={blogPosts} setBlogPosts={setBlogPosts}/> : null}

      <BlogPostContainer blogPosts={filteredList}/>
    </div>
  );
}

export default App;
