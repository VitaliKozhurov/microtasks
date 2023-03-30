type StudentType = {
    id: number
    name: string
    age: number
}

type StudentsType = {
    students: Array<StudentType>
}

export const NewComponent = (props: StudentsType) => {
    return (
        <>
            <h1>New Component</h1>
            <ul>
                {props.students.map((el) => (
                    <li key={el.id}>
                        {`My name ${el.name}, I'm ${el.age} years old!`}
                    </li>
                ))}
            </ul>
        </>
    )
}