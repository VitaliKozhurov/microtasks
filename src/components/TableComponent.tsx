type CarsType = {
    cars: Array<CarType>
}

type CarType = {
    manufacturer: string
    model: string
}
export const TableComponent = (props: CarsType) => {
    return (
        <>
            <hr />
            <table>
                <tbody>
                {props.cars.map((obj, ind) => (
                    <tr key={ind}>
                        <td>{ind + 1}</td>
                        <td>{obj.manufacturer}</td>
                        <td>{obj.model}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <hr />
        </>

    )
}