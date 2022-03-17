import {Dispatch, SetStateAction} from "react";

export interface IProduct {
    id: string,
    name: string,
    imagePath: string,
    price: number,
}

export interface IBasketItem extends IProduct {
    count: number,
}

export type TypeSetState<T> = Dispatch<SetStateAction<T>>;