import { FC, useState } from "react"

type InputPropsType = {
    addMessage:(value:string)=>void
}

// Сначала необходимо  сохранять данные вводимые в инпут в локальный стейт компоненты
// При нажатии на кнопку это значение отправляем в глобальный стейт


export const InputComponent:FC<InputPropsType> = (props) => {
    const [inputValue, setInputValue] = useState<string>('');

    // currentTarget - элемент на который повесили обработчик события
    // target - элемент на котором событие произошло
    // ТИПИЗИРУЕМ событие EVENT; какое событие и где оно сработало на каком html элементе
    const onChangeInput = (event:React.ChangeEvent<HTMLInputElement>) =>{
        setInputValue(event.currentTarget.value)
    }

    const onClickButtonHandler = () =>{
        props.addMessage(inputValue);
        setInputValue('');
    }

    return (
        <>
            <h1>New Component</h1>
            <input type="text" value={inputValue} onChange={onChangeInput} />
            <button onClick={onClickButtonHandler}>Add message</button>
        </>
    )
}