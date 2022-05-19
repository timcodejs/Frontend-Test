import React, { useState } from 'react'
import { IShoppingSale } from '../api/structures/shoppings/sales/IShoppingSale';
import { IShoppingSaleUnit } from '../api/structures/shoppings/sales/IShoppingSaleUnit';

interface Props
{
    sale: IShoppingSale;
}

const IShoppingStock = ({ sale }: Props) => {
    const [units, setUnits] = useState<IShoppingSaleUnit[]>(sale.units);

    return (
        <div>
            {units.map(unit => (
                <ul key={unit.id}>
                    {unit.stocks.map(stock => (
                        <li key={stock.id}>
                            <div className='list_text'>
                                <span>{stock.name} </span>
                                <span>{stock.price.nominal.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원</span>
                            </div>
                            <div>
                                <button>-</button>
                                <span>{stock.inventory.reserve}</span>
                                <button>+</button>
                            </div>
                        </li>
                    ))}
                </ul>
            ))}
            <br/>
            <div>주문금액 <span>0</span>원</div>
        </div>
    )
}

export default IShoppingStock;