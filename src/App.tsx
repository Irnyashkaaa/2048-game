import React, {useEffect, useState} from 'react';
import './App.css';
import {Board} from "./Components/Board/Board";
// @ts-ignore
import useKeypress from "react-use-keypress"

export type cellsType = {
    number: number | null
    x: number
    y: number
    id: number
}

const App = () => {

    const initCells = [
        {y: 0, x: 0, id: 0, number: null},
        {y: 0, x: 1, id: 1, number: null},
        {y: 0, x: 2, id: 2, number: null},
        {y: 0, x: 3, id: 3, number: null},
        {y: 1, x: 0, id: 4, number: null},
        {y: 1, x: 1, id: 5, number: null},
        {y: 1, x: 2, id: 6, number: null},
        {y: 1, x: 3, id: 7, number: null},
        {y: 2, x: 0, id: 8, number: null},
        {y: 2, x: 1, id: 9, number: null},
        {y: 2, x: 2, id: 10, number: null},
        {y: 2, x: 3, id: 11, number: null},
        {y: 3, x: 0, id: 12, number: null},
        {y: 3, x: 1, id: 13, number: null},
        {y: 3, x: 2, id: 14, number: null},
        {y: 3, x: 3, id: 15, number: null},
    ]

    const [cells, setCells] = useState<any>(() => initCells)
    const [game, setGame] = useState<boolean>(false)

    //cell move up
    let copyCells = structuredClone(cells)
    useKeypress('w', () => {

        let k = 0
        cells.map((cell: cellsType) => {
            if (cell.number && cell.y !== 0) {
                const y = cell.y - 1
                let i = 0
                cells.map((c: cellsType) => {
                    if (c.x === cell.x && !c.number) { //if cell above the current cell is empty}
                        if (c.y === y || c.y === y - 1 || c.y === y - 2) {
                            copyCells[i].number = copyCells[k].number
                            copyCells[k].number = null
                        }
                    }
                    i++
                })
            }
            k++
        })
        addNewCell(copyCells)
    })
    //cell move left
    useKeypress('a', () => {
        let k = 0
        cells.map((cell: cellsType) => {
            if (cell.number && cell.x !== 0) {
                const x = cell.x - 1
                let i = 0
                cells.map((c: cellsType) => {
                    if (c.y === cell.y && !c.number) {
                        if (c.x === x || c.x === x -1 || c.x === x - 2) {
                            copyCells[i].number = copyCells[k].number
                            copyCells[k].number = null
                        }
                    }
                    i++
                })
            }
            k++
        })
        addNewCell(copyCells)
    })
    //cell move down
    useKeypress('s', () => {
        let k = 15
        cells.reverse()
        cells.map((cell: cellsType) => {
            if (cell.number && cell.y !== 3) {
                const y = cell.y + 1
                let i = 15
                cells.map((c: cellsType) => {
                    if (c.x === cell.x && !c.number ) {
                        if (c.y == y || c.y === y+1 || c.y === y+2) {
                            copyCells[i].number = copyCells[k].number
                            copyCells[k].number = null
                        }
                    }
                    i--
                })
            }
            k--
        })
        addNewCell(copyCells)
        cells.reverse()
    })
    //cell move right
    useKeypress('d', () => {
        let k = 15
        cells.reverse()
        cells.map((cell: cellsType) => {
            if (cell.number && cell.x !== 3) {
                const x = cell.x + 1
                let i = 15
                cells.map((c: cellsType) => {
                    if (c.y === cell.y && !c.number) {
                        if (c.x === x || c.x === x + 1 || c.x === x+2) {
                            copyCells[i].number = copyCells[k].number
                            copyCells[k].number = null
                        }
                    }
                    i--
                })
            }
            k--
        })
        addNewCell(copyCells)
        cells.reverse()
    })

    useEffect(() => {
        const randomNumber = Math.round(Math.random() * cells.length)
        // @ts-ignore
        setCells(cells, cells[randomNumber].number = 2)
    }, [])
    const addNewCell = (copyCells: cellsType[]) => {
        const randomNumber = Math.round(Math.random() * cells.length)
        if (copyCells[randomNumber].number) {
            addNewCell(copyCells)
        } else {
            copyCells[randomNumber].number = 2
            setCells(copyCells)
        }
    }
  return (
    <div className="App">
        {!game && <button onClick={() => setGame(true)}>start</button>}
        <Board cells={cells} setCells={setCells} />
    </div>
  );
}

export default App;
