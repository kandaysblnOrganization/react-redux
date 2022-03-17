import React, {FC, useState} from 'react';
import {IProduct} from "../../types/types";

import styles from "./Products.module.scss";
import Quantity from "../UI/Quantity/Quantity";
import {useActions} from "../../hooks/useActions";

interface IProductItemProps {
    product: IProduct;
}

const ProductItem: FC<IProductItemProps> = ({product}) => {
    const [count, setCount] = useState(1);

    const {addToBasket} = useActions();

    const addToBasketHandler = (product: IProduct) => {
        addToBasket(product, count);
    }

    return (
        <div className={styles.products__item}>
            <img src={product.imagePath} alt={product.name} width="300"/>
            <p className="font-bold mb-2">{product.price} руб.</p>
            <p className="mb-2">{product.name}</p>
            <Quantity count={count} setCount={setCount}/>
            <button onClick={() => addToBasketHandler(product)}>В корзину</button>
        </div>
    );
};

export default ProductItem;