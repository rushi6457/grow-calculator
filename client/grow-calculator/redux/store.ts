import {applyMiddleware, combineReducers, compose, createStore, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./auth/reducer";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}


const rootReducer = combineReducers({
    auth:reducer
})

const createComposer = typeof window === 'object' &&     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = legacy_createStore(rootReducer,createComposer((applyMiddleware(thunk))))