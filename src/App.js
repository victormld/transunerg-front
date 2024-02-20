import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import MapView from "./components/MapView.jsx"
import Footer from "./components/Footer.jsx";
import MyFormReg from "./components/MyFormReg";
import MyNav from "./components/MyNav";


function App() {
  return (
      <main>
        {/*TODO: vistas de genesis */}
        <MyNav/>
        <MapView/>
        {/*<FormLogin/>*/}
        <MyFormReg/>
        <Footer/>

      </main>

  );
}

export default App;
