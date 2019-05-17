import React from 'react';
import './App.css';
import Buttons from "./components/Navigation"




const ExpenseDashboard =() => (

  <div>
    This is from my Dashoard
  </div>
);

function App() {
  return (
    <div className="App">
      <Buttons className="Items"  title="Desayuno" />
      <Buttons className="Items" title="Almuerzo" />
    </div>
  );
}

export default ExpenseDashboard;
