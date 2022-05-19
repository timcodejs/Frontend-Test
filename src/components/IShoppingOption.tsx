import React, { useState } from 'react'
import { IShoppingSale } from '../api/structures/shoppings/sales/IShoppingSale';
import { IShoppingSaleUnit } from '../api/structures/shoppings/sales/IShoppingSaleUnit';
import { IShoppingSaleUnitOption } from '../api/structures/shoppings/sales/IShoppingSaleUnitOption';
import { IShoppingSaleUnitOptionCandidate } from '../api/structures/shoppings/sales/IShoppingSaleUnitOptionCandidate';
import IShoppingStock from './IShoppingStock';

interface Props
{
    sale: IShoppingSale;
}

type Units = {
    id: string
    name: string
    type: IShoppingSaleUnitOption.Type
    candidates: IShoppingSaleUnitOptionCandidate
}

type Options = {
    CPU: IShoppingSaleUnitOptionCandidate
    RAM: IShoppingSaleUnitOptionCandidate
    SSD: IShoppingSaleUnitOptionCandidate
}

const IShoppingOption = ({ sale }: Props) => {
    const [units, setunits] = useState<IShoppingSaleUnit[]>(sale.units);
    const [chooseOption, setChooseOption] = useState<Units>();

    const handler = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value;
    }

    const handleShoppingBag = () => {

    }

    const handleShoppingBuy = () => {
        
    }

    const handlerSubmit =(e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={(e) => handlerSubmit(e)}>
            {units.map((unit) => (
            <div key={unit.id}>
                <h4>{unit.name}</h4>
                {unit.options.map((option) => (
                <div key={option.id}>
                    <select onChange={(e) => handler(e)}>
                        <option value="">{option.name}</option>
                        {option.candidates.map((can) => (
                        <option key={can.id} value={can.id}>{can.name}</option>
                        ))}
                    </select>
                </div>
                ))}
            </div>
            ))}
            <br/>
            <IShoppingStock sale={sale} />
            <br/>
            <div>
                <button onClick={handleShoppingBag}>장바구니</button>
                <button onClick={handleShoppingBuy}>바로구매</button>
            </div>
        </form>
    )
}

export default IShoppingOption;