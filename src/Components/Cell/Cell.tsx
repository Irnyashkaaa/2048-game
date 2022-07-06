import React from 'react'
import {cellsType} from "../../App";
import s from './Cell.module.css';

type propsType = {
    cell: cellsType
}

export const Cell: React.FC<propsType> = ({cell}) => {


    return (
        <div className={`${s.cell} ${s[`cell${cell.number}`]}`}>
            {cell.number}
        </div>
    )
}