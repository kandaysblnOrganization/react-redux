import React, {FC} from 'react';
import {IProduct} from "../../types/types";

import styles from './Products.module.scss';
import ProductItem from "./ProductItem";

const products: IProduct[] = [
    {
        id: "CT2858-001",
        name: "Nike Air Force 1 Gore-Tex",
        imagePath: "https://static.street-beat.ru/upload/resize_cache/iblock/8ee/500_500_1/8eeba971bc5a8d09646c69d66403585a.jpg",
        price: 21199,
    },
    {
        id: "DC8871-200",
        name: "Nike Air Force 1 '07 LV8",
        imagePath: "https://static.street-beat.ru/upload/resize_cache/iblock/9a5/500_500_1/9a554d0d8b285598b55c4cb9bb6b4ccc.jpg",
        price: 15299,
    },
    {
        id: "CJ9179-200",
        name: "Nike Air Force 1 '07 WB Flax",
        imagePath: "https://static.street-beat.ru/upload/resize_cache/iblock/10d/500_500_1/10d23d2c74ce9bf1175c9a3ac5180d6d.jpg",
        price: 18599,
    },
    {
        id: "DB4109-001",
        name: "Nike Air Force 1 Luxury",
        imagePath: "https://static.street-beat.ru/upload/resize_cache/iblock/363/500_500_1/3639f63b3d40c1d40109331764a625a4.jpg",
        price: 19599,
    },
    {
        id: "DR0143-101",
        name: "Nike Air Force 1 '07",
        imagePath: "https://static.street-beat.ru/upload/resize_cache/iblock/986/500_500_1/986745bf6574823db89e7adcd6f0d329.jpg",
        price: 16499,
    }, {
        id: "DC8871-001",
        name: "Nike Air Force 1 '07 LV8",
        imagePath: "https://static.street-beat.ru/upload/resize_cache/iblock/0e5/500_500_1/0e590ceb72712f7dcc227d1786a7b463.jpg",
        price: 15299,
    },

]


const Products: FC = () => {
    return (
        <div className={styles.products}>
            {products.map(product => {
                return (
                    <ProductItem product={product} key={product.id}/>
                )
            })}
        </div>
    );
};

export default Products;