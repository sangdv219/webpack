import React from "react";
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Link,
  } from "react-router-dom";

  
const Header = () => {
    console.info('header')
  return (
    <header>
      <nav>
        <p>p</p>
        <p>p</p>
        <span>span</span>
        <span>-span</span>
        <h1>h1</h1>
        <h2>h2</h2>
        <h3>h3</h3>
        <h4>h4</h4>
        <h5>h5</h5>
        <h6>h6</h6>
        <b>tag B</b>
        <i>TAG I</i>
      </nav>
    </header>
  );
};
export default Header;
