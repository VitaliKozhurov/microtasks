import { FC, useState } from "react"

type InputPropsType = {
    setInputState:(value:string)=>void
    value:string
}

// Сначала необходимо  сохранять данные вводимые в инпут в локальный стейт компоненты
// При нажатии на кнопку это значение отправляем в глобальный стейт

export const InputCmpt:FC<InputPropsType> = (props) => {

    const onChangeInputHandler = (event: React.ChangeEvent<HTMLInputElement>) =>{
        props.setInputState(event.currentTarget.value)
    }

    return (
        <>
            <h1>New Component</h1>
            <input type="text" value={props.value} onChange={onChangeInputHandler}/>
        </>
    )
}