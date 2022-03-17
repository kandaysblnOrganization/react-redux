import {combineReducers} from "redux";
import {basketReducer} from "./basket/basketReducer";
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const rootReducer = combineReducers({
    basket: basketReducer,
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['basket'],
}

export const persistedReducer = persistReducer(persistConfig, rootReducer)

export type RootState = ReturnType<typeof rootReducer>;