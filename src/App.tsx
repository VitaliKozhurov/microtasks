import React, {useState} from 'react';
import './App.css';
import {NewComponent} from "./components/NewComponent";
import {TableComponent} from "./components/TableComponent";
import {ButtonComponent} from "./components/ButtonComponent";
import {log} from "util";
import {UseStateComponent} from "./components/UseStateComponent";

function App() {
    const [students, setStudents] = useState([
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]);
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'}
    ]

    const onButtonClick1 = (name: string, age: number) => console.log(`Im ${name}, my age ${age}`);
    const onButtonClick2 = (name: string) => console.log(`Im ${name}`);
    const onButtonClick3 = () => console.log('Im stupid button')

    return (
        <>
            {/*<NewComponent students={students} />
            <TableComponent cars={topCars} />*/}
            <ButtonComponent callback={() => onButtonClick1('Maxim', 20)} name={'Button subscribe 1'} />
            <ButtonComponent callback={() => onButtonClick2('Ivan')} name={'Button subscribe 2'} />
            <ButtonComponent callback={onButtonClick3} name={'Stupid Button'} />
            <hr />
            <UseStateComponent />
        </>
    );
}


export default App;
