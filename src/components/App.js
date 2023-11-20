import React from "react";
import blogData from "../data/blog";
import Header from "./Header";
import About from "./About";
import Articlelist from "./Articlelist";

console.log(blogData);

function App() {
  return (
    <div className="App">
    <Header name = "underreacted"/>
    <About image = "logo"
            text ="a blog about learning react"
/>
    < Articlelist = ""    />
    </div>
  );
}

export default App;
