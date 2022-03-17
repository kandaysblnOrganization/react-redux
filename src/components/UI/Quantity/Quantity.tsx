import React, {FC} from 'react';
import styles from "./Quantity.module.scss";
import {TypeSetState} from "../../../types/types";

interface IQuantityProps {
    count: number;
    setCount: TypeSetState<number>,
}

const Quantity: FC<IQuantityProps> = ({count, setCount}) => {
    const incrementHandler = () => {
        count < 5 && setCount(count + 1);
    }

    const decrementHandler = () => {
        count > 1 && setCount(count - 1);
    }

    return (
        <div className={styles.quantity}>
            <button onClick={incrementHandler}>+</button>
            <input type="text" value={count} onChange={e => setCount(+e.target.value)}/>
            <button onClick={decrementHandler}>-</button>
        </div>
    );
};

export default Quantity;