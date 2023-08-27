import React from "react";
import Header from "./components/Header";
import Player from "./components/Player";
import Board from "./components/Board";
import "./styles.css"
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <Header title="Hallelluja"/>
      <Player whichPlayer='Billie'/>
      <Player whichPlayer='Ramar'/>
      <Board/>
      <Footer/>
    </div>
  );
}

export default App;
