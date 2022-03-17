import {IProduct} from "../../../types/types";
import {Dispatch} from "react";
import {ActionTypes, BasketAction} from "../../types/types";

export const addToBasket = (product: IProduct, count: number) => {
    return (dispatch: Dispatch<BasketAction>) => {
        dispatch({
            type: ActionTypes.BASKET_ADD_ITEM,
            payload: {product, count},
        })
    }
};

export const removeToBasket = (productId: string) => {
    return (dispatch: Dispatch<BasketAction>) => {
        dispatch({
            type: ActionTypes.BASKET_REMOVE_ITEM,
            payload: productId,
        })
    }
};