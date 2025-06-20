import "./Quote.css"
import React from "react";

export function Quote(props) {
  const [pClasses, setPClasses] = React.useState("quote invisible");

  function toggle() {
    pClasses === "quote invisible" ? setPClasses("quote") : setPClasses("quote invisible");

  }

  return (
    <>
      <button className="toggle-button" onClick={toggle}>Toggle Visibility</button>
      <p className={pClasses}>{props.text}</p>
    </>
  );
}