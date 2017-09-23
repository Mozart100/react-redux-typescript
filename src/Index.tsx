import * as React from "react";
import { render } from "react-dom";

import { Provider, connect } from "react-redux";

import { Router, Route, browserHistory, IndexRoute, hashHistory, Link } from 'react-router';
import { bindActionCreators, Store } from "redux";
// import { Store } from "redux";


import AppStateRoot from "../redux/app-state";
import configureStore from "../redux/app-store";
import App from "./components/app";
import Features from "./components/Features";
import HeaderApp from "./components/Layout/HeaderApp";
import Settings from "./components/Settings";
import MainContent from "./components/MainContent";



let initialState = {
    // user: {
    //     username: 'ana',
    //     id: 10
    // },
    comControl: {
        leftSidebarOnOffActionType: false
    }
};

let store: Store<AppStateRoot> = configureStore(initialState);
// let store: Store<AppState> = configureStore(initialState);
// AppState
// export const appStore: Store<AppState> =


// render(
//     <Provider store={store}>
//         <App />
//     </Provider>, document.getElementById("root"));

// render(
//     <Provider store={store}>
//      <App/>
//     </Provider>, document.getElementById("root"));

render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={MainContent} />
                <Route path="Features" component={Features} />
                <Route path="settings" component={Settings} />
            </Route>
        </Router>
    </Provider>, document.getElementById("root"));
