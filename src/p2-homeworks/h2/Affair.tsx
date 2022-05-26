import React from 'react'
import {AffairType} from "./HW2";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import m from './Affairs.module.css'

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType // need to fix any
    deleteAffairCallback: (_id: number) => void // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        return props.deleteAffairCallback(props.affair._id)
    }// need to fix

    return (
        <div className={m.affairClass}>
            {props.affair.name}
            <div>{props.affair.priority}</div>
            <SuperButton black onClick={
                deleteCallback
            }>X
            </SuperButton>
        </div>
    )
}

export default Affair
