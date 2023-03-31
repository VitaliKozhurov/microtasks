import {FC, useState} from "react";

type FilterType = 'all' | 'dollar' | 'ruble';

type CurrencyType = {
    banknote: string
    nominal: number
    number: string
}

type MoneyPropsType = { money: Array<CurrencyType> };

export const FilterComponent: FC<MoneyPropsType> = (props) => {
    const [currentCurrency, setCurrency] = useState<FilterType>('all');
    const [money, setMoney] = useState(props.money)

    const onFilterHandler = (filterParam: FilterType) => {
        setCurrency(filterParam);
    }

    let currentMoney = currentCurrency === 'dollar'
        ? money.filter(obj => obj.banknote === 'dollar')
        : currentCurrency === 'ruble'
            ? money.filter(obj => obj.banknote === 'ruble')
            : money;


    return (
        <>
            <ul>
                {
                    currentMoney.map((obj, ind) => (
                        <li key={ind}>
                            <span>{obj.banknote}</span>
                            <span>{obj.nominal}</span>
                            <span>{obj.number}</span>
                        </li>
                    ))
                }
            </ul>
            <button onClick={() => onFilterHandler('dollar')}>Dollar filter</button>
            <button onClick={() => onFilterHandler('ruble')}>Ruble filter</button>
            <button onClick={() => onFilterHandler('all')}>Show All</button>
        </>
    )
}