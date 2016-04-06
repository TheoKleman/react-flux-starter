// Importing styles
require("./../styles/master.scss");

// Importing node modules
import React from "react";
import ReactDOM from "react-dom";
import Hello from "./components/hello";

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('app-container')
);
