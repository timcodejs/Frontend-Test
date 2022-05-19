import React, { useState } from 'react'
import { IAttachmentFile } from '../api/structures/common/IAttachmentFile';
import { IShoppingSale } from '../api/structures/shoppings/sales/IShoppingSale';
import { IShoppingCategory } from '../api/structures/shoppings/systematic/IShoppingCategory';
import IShoppingOption from './IShoppingOption';

interface Props
{
    sale: IShoppingSale;
}

const IShopping = ({ sale }: Props) => {
    const [category, setCategory] = useState<IShoppingCategory.IReference>(sale.category);
    const [images, setImages] = useState<IAttachmentFile[]>(sale.representative_images);
    const [content, setContent] = useState<IShoppingSale.IContent>(sale.content);

    return (
        <div>
            <p>{category.parent?.parent?.name} &gt; {category.parent?.name} &gt; {category.name}</p>
            <div className='shoppingInfo'>
                {images.map(image => (
                <div key={image.name}>
                    <img src={image.url} alt={image.name} />
                </div>
                ))}
                <div>
                    <p>봄소와</p>
                    <h2>{content.title}</h2>
                    <h2>1,010,000원</h2>
                    <p><span>해택</span> 시숲 Point 적립</p>
                    <p><span>배송 착불배송<br/></span>일반택배</p>
                    <IShoppingOption sale={sale} />
                </div>
            </div>
        </div>
    )
}

export default IShopping;