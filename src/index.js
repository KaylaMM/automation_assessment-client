import React from 'react';
import ReactDOM from 'react-dom';
import Rooter from './components/Router';
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import devicesReducer from "./reducers/devicesReducer.js";
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'


export const store = createStore(combineReducers({devicesReducer}))


const options = {
    position: 'bottom center',
    timeout: 5000,
    offset: '30px',
    transition: 'scale'
}


ReactDOM.render(
    <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...options}>
            <Rooter />
        </AlertProvider>
    </Provider>, document.getElementById('root'));
