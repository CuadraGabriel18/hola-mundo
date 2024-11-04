import React from "react";
import Saludar from "./components/saludar";
import Eventos from "./components/eventos";
import Estados from "./components/Estados";
import SumaResta from "./components/SumaResta";
import Mapeo from "./components/Mapeo";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Propagacion from "./components/Propagacion";
import Formularios from "./components/Formularios";


function App() {
  return (
    <div className="App">
      {/*
      <Saludar/>
      <Eventos/>
      <Estados/>
      <SumaResta/>
      <Mapeo/>
      <Propagacion/>
      */}
      <Formularios/>

    </div>
  );
}

export default App;
