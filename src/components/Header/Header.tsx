import React, {FC, useState} from 'react';
import styles from "./Header.module.scss";
import cn from 'classnames';

import logoImg from '../../assets/img/atomic-icon.svg';
import basketImg from '../../assets/img/bx-basket.svg';
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useActions} from "../../hooks/useActions";

const Header: FC = () => {
    const cartItems = useTypedSelector(state => state.basket);

    const [isShowBasket, setIsShowBasket] = useState(false);

    const {removeToBasket} = useActions();

    const total = cartItems.reduce((acc, item) => acc + item.price * item.count, 0)

    const showBasketHandler = () => {
        setIsShowBasket(!isShowBasket);
    }

    const removeHandler = (id: string) => {
        removeToBasket(id);
    }

    return (
        <div className={styles.header}>

            <img src={logoImg} alt="Логотип" width="100"/>

            <button className={styles.header__btn} onClick={showBasketHandler}>
                <img src={basketImg} alt="Корзина"/>
                {cartItems.length > 0 && <p>{cartItems.length}</p>}
            </button>

            <div className={cn(styles.header__inner, {
                block: isShowBasket,
            })}>
                {cartItems.map(item => {
                    return (
                        <div className={styles.header__carts} key={item.name}>
                            <img className={"mr-3 rounded-md"} src={item.imagePath} alt={item.name} width="70" height="70"/>
                            <div>
                                <p className="text-lg font-bold">{item.name}</p>
                                <p>{item.count} x {item.price} руб.</p>
                                <button className={styles.header__btn} onClick={() => removeHandler(item.id)}>X</button>
                            </div>
                        </div>
                    );
                })}
                <p>Итог: <strong>{total}</strong> руб.</p>
            </div>
        </div>
    );
};

export default Header;