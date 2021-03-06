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
import People from "./components/people";
import { AddPerson } from "./components/AddPerson";
import { PersonPresenter } from "./components/PersonPresenter";
import { UserLoader } from "./components/LoadUsers";
import { TestPromise } from "./components/TestPromis";
import { GridTricks } from "./components/GridTricks";



let initialState: AppStateRoot = {
    people: [],
    comControl: {
        leftSidebarOnOffActionType: false
    }
};

let store: Store<AppStateRoot> = configureStore(initialState);


render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={MainContent} />
                <Route path="Features" component={Features} />
                <Route path="settings" component={Settings} />
                <Route path="people" component={People} />
                <Route path="AddPerson" component={AddPerson} />
                <Route path="PersonPresenter/:id" component={PersonPresenter} />
                <Route path="LoadUsers" component={UserLoader} />
                <Route path="LoadUsers" component={UserLoader} />
                <Route path="TestPromise" component={TestPromise} />
                <Route path="GridTricks" component={GridTricks} />
            </Route>
        </Router>
    </Provider>, document.getElementById("root"));
