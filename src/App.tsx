import React, {useState} from 'react';
import './App.css';
import {Board} from "./Components/Board/Board";

export type cellsType = {
    number: number
    x: number
    y: number
}

function App() {
    const initCells = [
        {x: 1, y: 1, number: 2},
        {x: 1, y: 1, number: 4},
        {x: 1, y: 1, number: 8},
        {x: 1, y: 1, number: 16},
        {x: 1, y: 1, number: 32},
        {x: 1, y: 1, number: 64},
        {x: 1, y: 1, number: 128},
        {x: 1, y: 1, number: 256},
        {x: 1, y: 1, number: 512},
        {x: 1, y: 1, number: 1024},
        {x: 1, y: 1, number: 2048},
        {x: 1, y: 1, number: 4096},
        {x: 1, y: 1, number: 8192},
        {x: 1, y: 1, number: 16384},
        {x: 1, y: 1, number: 33068},
        {x: 1, y: 1, number: 66136},
    ]

    const [cells, setCells] = useState<cellsType[]>(initCells)

  return (
    <div className="App">
        <Board cells={cells} setCells={setCells} />
    </div>
  );
}

export default App;
