import * as React from "react";
import { render } from "react-dom";

import { Provider, connect } from "react-redux";

import { Router, Route, browserHistory, IndexRoute, hashHistory, Link } from 'react-router';
import { bindActionCreators } from "redux";


import configureStore from "../redux/app-store";
import App from "./components/app";
import Features from "./components/Features";
import HeaderApp from "./components/Layout/HeaderApp";
import Settings from "./components/Settings";



let initialState = {
    user: {
        username: 'ana',
        id: 10
    },
    comControl: {
        leftSidebarOnOffActionType: false
    }
};

let store = configureStore(initialState);

render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("root"));

// render(
//     <Provider store={store}>
//      <App/>
//     </Provider>, document.getElementById("root"));

// render(
//     <Provider store={appStore}>
//         <Router history={browserHistory}>
//             <Route path="/" component={App}>
//                 <IndexRoute component={Features} />
//                 <Route path="Headers" component={HeaderApp} />
//                 <Route path="settings" component={Settings} />
//             </Route>
//         </Router>
//     </Provider>, document.getElementById("root"));
