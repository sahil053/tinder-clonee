import React from "react";
import "./App.css";
import TinderCards from "./TinderCards";
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";

function App() {
  return (
     
    <div className="App"> 
      <Header/>
      <TinderCards/>
      <SwipeButtons/>

    </div>
  );
}

export default App;
