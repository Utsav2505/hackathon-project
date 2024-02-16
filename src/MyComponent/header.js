import React from "react";
import "./header.css";

export default function Header() {
  return (
    <>
      <div className="HyperNav">
        <div id="gaurd" className="mainNav">
            <p>GAURDLINK</p>
        </div>
        <div className="mainNav">
          <p>home</p>
          <p>about</p>
          <p>github</p>
        </div>
        <div className="mainNav">
            <p>here is the time</p>
        </div>
      </div>
    </>
  );
}
