import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import MapView from "./components/MapView.jsx"
import MyFormReg from "./components/MyFormReg";
import FormLogin from "./components/FormLogin"
import PublicLayout from "./layout/PublicLayout.js";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PublicLayout/>}>
            <Route index element={<MapView/>}/>
            <Route path="Inicio" element={<FormLogin/>}/>    
            <Route path="Registro" element={<MyFormReg/>}/>      
        </Route>  
      </Routes>
    </BrowserRouter>
  );
}

export default App;
