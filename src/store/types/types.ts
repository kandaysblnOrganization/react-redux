import {IProduct} from "../../types/types";

export enum ActionTypes {
    BASKET_ADD_ITEM = "BASKET_ADD_ITEM",
    BASKET_REMOVE_ITEM = "BASKET_REMOVE_ITEM",
}

export interface IBasketAddItemPayload {
    product: IProduct,
    count: number;
}

export interface IBasketAddItem {
    type: ActionTypes.BASKET_ADD_ITEM;
    payload: IBasketAddItemPayload;
}

export interface IBasketRemoveItem {
    type: ActionTypes.BASKET_REMOVE_ITEM;
    payload: string;
}

export type BasketAction = IBasketAddItem | IBasketRemoveItem;