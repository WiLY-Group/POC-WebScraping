import logo from './logo.svg';
import SearchBar from './components/searchBar';
import React, { useState } from "react";
import './App.css';
import convertFromUSDA from './utils/USDAtranslator';

function App() {
  const [results, setResults] = useState([]);
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar setResults={setResults}/>
        {results.map((item)=> {
          console.log(item);
          console.log(convertFromUSDA(item)); 
          return <div>{item.description}<hr></hr></div>;
          })}
      </header>
    </div>
  );
}

export default App;
