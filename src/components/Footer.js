import React from "react";
import "./components.css";

function Footer(props) {
  return (
    <div className="footer">
      <p style={{ color: `${props.themeclr}` }}>
        &copy; 2022 all rights reserved
      </p>
    </div>
  );
}

export default Footer;
