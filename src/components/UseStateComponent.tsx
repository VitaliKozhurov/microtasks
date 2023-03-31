import {useState} from "react";

export const UseStateComponent = () => {
    let [a, setA] = useState(1);

    const onButtonHandler = () => {
        setA(++a);
        console.log('Val a = ', a);
    }
    const onButtonClearHandler = () => {
        setA(0);
    }
    return (
        <>
            <h1>{`Value a = ${a}`}</h1>
            <button onClick={onButtonHandler}>Change value a</button>
            <button onClick={onButtonClearHandler}>Set 0 count</button>
        </>
    )
}