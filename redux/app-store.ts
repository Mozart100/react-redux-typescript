import * as React from "react";
import {applyMiddleware, createStore, Store} from "redux";
import thunk from "redux-thunk";
import {AppState} from "./app-state";
import { widgetReducer } from "./reducers/widgetReducer";

export const appStore: Store<AppState> =
	createStore(widgetReducer, applyMiddleware(thunk));
