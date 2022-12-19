import React from "react";
import ReactDOM from "react-dom"; /* /client */
import "./index.css";
import App from "./App";

function Root() {
  return (
    <div className="main">
      <App />
    </div>
  );
}

ReactDOM.render(<Root />, document.getElementById("root"));
