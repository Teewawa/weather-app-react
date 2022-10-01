import React from "react";
import "./App.css";
import SearchEngine from "./SearchEngine";

function App() {
  return (
    <div className="App">
      <SearchEngine defaultCity="Guam" />
    </div>
  );
}

export default App;
