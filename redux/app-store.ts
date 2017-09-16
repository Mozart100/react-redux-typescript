import * as React from "react";
import {applyMiddleware, createStore, Store} from "redux";
import thunk from "redux-thunk";
import {AppState} from "./app-state";
import {composeWithDevTools} from "redux-devtools-extension";
import { widgetReducer } from "./reducers/widgetReducer";

const middlewars = applyMiddleware(thunk);
const storeWithMiddlewars =composeWithDevTools(middlewars)(createStore);
export const appStore =storeWithMiddlewars(widgetReducer);

// export const appStore: Store<AppState> =
// 	createStore(widgetReducer, applyMiddleware(thunk));
