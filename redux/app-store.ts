import * as React from "react";
import { applyMiddleware, createStore, Store } from "redux";
import thunk from "redux-thunk";
// import { AppState } from "./app-state";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/index";
import logger from 'redux-logger';

let finalCreateStore =
//  compose(applyMiddleware(thunk,logger))(createStore);
 composeWithDevTools(applyMiddleware(thunk,logger))(createStore);


export default function configureStore(initialState = { user: { username: "", id: 1 } }) {
    return finalCreateStore(rootReducer, initialState);
}

// export const appStore: Store<AppState> =
// 	createStore(widgetReducer, applyMiddleware(thunk));
