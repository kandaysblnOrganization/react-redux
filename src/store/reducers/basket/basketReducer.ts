import {IBasketItem} from "../../../types/types";
import {ActionTypes, BasketAction} from "../../types/types";

const initialState: IBasketItem[] = [];

export const basketReducer = (state = initialState, action: BasketAction) => {
    switch (action.type) {
        case ActionTypes.BASKET_ADD_ITEM: {
            const cart = [...state];
            const {count, product} = action.payload;

            const foundProduct = cart.find(item => item.id === product.id);

            if (foundProduct) {
                foundProduct.count += count;
            } else {
                cart.push({
                    ...product,
                    count
                })
            }

            return cart;
        }
        case ActionTypes.BASKET_REMOVE_ITEM: {
            return state.filter(item => item.id !== action.payload);
        }
        default:
            return state;
    }
}