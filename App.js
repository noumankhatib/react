
import React from "react";
import ReactDOM from "react-dom/client";
const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "This is namaste react"),
    React.createElement("h2", {}, "related to nodejs tag"),
  ])
);
// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React!"
// );
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
