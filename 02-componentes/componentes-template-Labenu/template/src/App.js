import React from "react";
import "./App.css";
import Header from "./componentes/Header";
import Garagem from "./componentes/Garagem";
import Footer from "./componentes/Footer";


export default function App() {

  return (
    <div className="App">
      <Header />
      <main>
        <Garagem />
      </main>
      <Footer />
    </div>
  );
}
