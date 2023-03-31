import {FC, MouseEvent} from "react";
// Обязательно импортируем MouseEvent для типизации
// Событие onClick (событие нажатия на кнопку)
// При нажатии на кнопку вызываем функцию (безымянную)
// Если в функцию необходимо передать параметры или event то в onClick описываем безымянную функцию, иначе передаём ссылку на функцию

type ButtonType = {
    name: string
    callback: () => void // тип функции, которая ничего не возвразает
}

export const ButtonComponent: FC<ButtonType> = (props) => {
    const onClickHandler = () => {
        props.callback(); // вызываем функцию из props
    }

    return (
        <>
            <button onClick={onClickHandler}>{props.name}</button>
        </>
    )
}