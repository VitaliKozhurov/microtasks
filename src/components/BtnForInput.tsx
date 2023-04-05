import { type } from "os"
import { FC, useState } from "react"

type ButtonPropsType = {
    name:string
    addMessage:()=>void
    value:string
}

// Сначала необходимо  сохранять данные вводимые в инпут в локальный стейт компоненты
// При нажатии на кнопку это значение отправляем в глобальный стейт

export const BtnComponent:FC<ButtonPropsType> = (props) => {
    const onClickButtonHandler = ()=>{
        props.addMessage();
    }

    return (
        <>
          <button onClick={onClickButtonHandler}>{props.name}</button>          
        </>
    )
}