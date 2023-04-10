import React from "react";
import "../stylesheets/Boton.css";

function Boton(props) {
  const isOperator = (value) => {
    return isNaN(value) & (value !== ".") & (value !== "=");
  };
  return (
    <div
      className={`boton-contenedor ${
        isOperator(props.children) ? "operator" : ""
      }`}
      onClick={() => props.manejarClick(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;
