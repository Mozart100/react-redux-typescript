import * as React from "react";
import { render } from "react-dom";

import { Provider } from "react-redux";
import { appStore } from "../../redux/app-store";
import { Router, Route, browserHistory, IndexRoute, hashHistory, Link } from 'react-router';

import { Segment } from "semantic-ui-react";
import Features from "./Features";
import Settings from "./Settings";
import HeaderApp from "./Layout/HeaderApp";

import '../../node_modules/semantic-ui-css/semantic.min.css';
import "./app.css";
// import "D:\Anatoliy\VSCode\TypescriptProj\node_modules\semantic-ui-css\semantic.min.css";

// import {  } from "react-router-redux";

const App_Depricated = () => (
    <div>
        <h1>xLorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus in eaque dicta reiciendis illum error sequi rem deserunt eligendi beatae.</h1>
        {this.props.children}
        <Link to="Headers"><button>Headers</button></Link>
    </div>
);

export class App extends React.Component {

    constructor(props) {
        super(props)
    }

    // private navigateToFeature =  () =>{

    //     this.props["history"].pushState(null,"/");
    // }

    render() {
        return (
            // <Segment>
                <div className="no-border">
                    <HeaderApp />
                    {/* {this.props.children} */}
                    {/* <Link to="Headers"><button>Headers</button></Link>
                    <Link to="settings">Settings</Link> */}
                    {/* <button onClick={this.navigateToFeature} > Feature </button> */}
                </div>
            // </Segment>
        );
    }
}



render(
    <Provider store={appStore}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Features} />
                <Route path="Headers" component={HeaderApp} />
                <Route path="settings" component={Settings} />
            </Route>
        </Router>
    </Provider>, document.getElementById("root"));
// const router =
//     <Router history={browserHistory}>
//         <Route path="/" component={App}>

//         </Route>
//     </Router>

// render(
//     <Provider store={appStore}>
//        {this.router}
//     </Provider>, document.getElementById("root"));



