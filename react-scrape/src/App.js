import logo from './logo.svg';
import SearchBar from './components/searchBar';
import React, { useState } from "react";
import './App.css';
import convertFromUSDA from './utils/USDAtranslator';
import FoodItem from './components/foodItem';

function App() {
  const [results, setResults] = useState([]);

  const thresholds = {
    fat: .2,
    protein: .2,
    carbohydrate: .2,
    sugar: .2,
    sodium: .2
}
  return (
    <div className="App">
      <header className="App-header">
        <SearchBar setResults={setResults}/>
        {results.map((item, i)=> {
          return <FoodItem key={i} item={item} thresholds={thresholds}/>
          // return <div>{item.description}<hr></hr></div>;
          })}
      </header>
    </div>
  );
}

export default App;
