import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Boton from "./components/Boton";
import Pantalla from "./components/Pantalla";
import BotonClear from "./components/BotonClear";
import BotonBack from "./components/BotonBack";
import { useState } from "react";
import { evaluate } from "mathjs";

function App() {
  const [input, setInput] = useState("");
  const regex = /^[-+]?\d*\.?\d+([*/][-+]?\d*\.?\d+)*([+-]\d*\.?\d+)*$/;
  const addInput = (val) => {
    if (!isNaN(input.slice(-1))) {
      setInput(input + val);
    } else if (!isNaN(val)) {
      setInput(input + val);
    }
  };

  const solveInput = (val) => {
    if (!regex.test(input)) {
      alert("Ingrese una operación valida");
    } else {
      setInput(evaluate(input).toString());
    }
  };
  const removeLast = () => {
    setInput(input.slice(0, -1));
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="contenedor-calculadora">
        <Pantalla input={input}>ssss</Pantalla>
        <div className="fila">
          <BotonClear manejarClick={() => setInput("")}>AC</BotonClear>

          <Boton manejarClick={addInput}>%</Boton>
          <Boton manejarClick={addInput}>/</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={addInput}>7</Boton>
          <Boton manejarClick={addInput}>8</Boton>
          <Boton manejarClick={addInput}>9</Boton>
          <Boton manejarClick={addInput}>*</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={addInput}>4</Boton>
          <Boton manejarClick={addInput}>5</Boton>
          <Boton manejarClick={addInput}>6</Boton>
          <Boton manejarClick={addInput}>-</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={addInput}>1</Boton>
          <Boton manejarClick={addInput}>2</Boton>
          <Boton manejarClick={addInput}>3</Boton>
          <Boton manejarClick={addInput}>+</Boton>
        </div>
        <div className="fila">
          <Boton manejarClick={addInput}>0</Boton>
          <Boton manejarClick={addInput}>.</Boton>
          <BotonBack manejarClick={removeLast}></BotonBack>
          <Boton manejarClick={solveInput}>=</Boton>
        </div>
      </div>
    </div>
  );
}

export default App;
