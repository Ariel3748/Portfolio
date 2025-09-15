import { useState } from "react";
import reactLogo from "../assets/react.svg";
import viteLogo from "/vite.svg";
import "../styles/App.css";
import AboutMe from "./AboutMe";
import BarraNav from "./Nav";
import { Proyectos } from "./Proyectos";
import { Contacto } from "./Contacto";
import { Route, Router, Routes } from "react-router-dom";
import { CardProyecto } from "./CardProyecto";
import { CardProyectFull } from "./CardProyectFull";
import Home from "../layouts/Home";

function App() {
  return (
    <>
        <BarraNav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/proyectos/:id" element={<CardProyectFull />} />
        </Routes>
    </>
  );
}

export default App;
