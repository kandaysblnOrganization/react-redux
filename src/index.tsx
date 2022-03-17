import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.scss';
import {Provider} from "react-redux";
import {persistor, store} from "./store/store";
import {PersistGate} from "redux-persist/integration/react";

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor} loading={<div>Загрузка...</div>}>
            <App/>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
);
