import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import ArticleList from "./Articlelist";

console.log(blogData);

function App() {
  return (
    <div className="App">
    <Header name = "underreacted" />
    <About image = {image} />
            text ="a blog about learning react" 

    < ArticleList articles={blogData.blogData} />
    </div>
  );
}

export default App;
