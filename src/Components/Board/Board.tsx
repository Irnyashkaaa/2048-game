import React from 'react'
import {cellsType} from "../../App";
import s from './Board.module.css'
import {Cell} from "../Cell/Cell";
type propsType = {
    cells: cellsType[]
    setCells: (cells:[]) => void
}

export const Board: React.FC<propsType> = ({cells, setCells}) => {
    return (
        <div className={s.board}>
            {cells.map(cell => {
                return <Cell key={cell.id} cell={cell} />
            })}
        </div>
    )
}