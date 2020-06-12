import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import allReducers from "../reducers"

const getAppStore =() => {
    return createStore(allReducers, applyMiddleware(thunk));
};

export default getAppStore;