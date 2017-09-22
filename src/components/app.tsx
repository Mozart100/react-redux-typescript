import * as React from "react";
import { render } from "react-dom";

import { Provider } from "react-redux";
import { appStore } from "../../redux/app-store";
import { Router, Route, browserHistory, IndexRoute, hashHistory, Link } from 'react-router';

import { Segment, Sidebar, Menu, Header, Grid, Icon } from "semantic-ui-react";
import Features from "./Features";
import Settings from "./Settings";
import HeaderApp from "./Layout/HeaderApp";

import '../../node_modules/semantic-ui-css/semantic.min.css';
import "./app.css";

import routeElements, { RoutElement } from "./Layout/routeElements"

import Footer from "./Layout/Footer";
import AppBody from "./AppBody";
import AppBodyWrapper from "./AppBodyWrapper";
// import "D:\Anatoliy\VSCode\TypescriptProj\node_modules\semantic-ui-css\semantic.min.css";

// import {  } from "react-router-redux";

const App_Depricated = () => (
    <div>
        <h1>xLorem ipsum dolor sit amet consectetur aiocpisicing elit. Necessitatibus in eaque ioccta reicieniocs illum error sequi rem deserunt eligenioc beatae.</h1>
        {this.props.children}
        <Link to="Headers"><button>Headers</button></Link>
    </div>
);

interface AppProps {

}
interface AppState {
    showLeftSideBar: boolean;
}
export class App extends React.Component<any, AppState> {

    constructor(props) {
        super(props)
        this.state = { showLeftSideBar: false }
    }

    // private navigateToFeature =  () =>{
    //     this.props["history"].pushState(null,"/");
    // }

    render() {
        const ioc = Object.assign({}, this.props, this.state);

        // console.log('toli | children = ',ioc);
        return (
            <Grid >
                <Grid.Row>
                    <HeaderApp showSideMenu={showLeftSideBar => this.setState({ showLeftSideBar })} />
                </Grid.Row>
                <Grid.Row>
                    <AppBodyWrapper {...ioc} />
                </Grid.Row>

                <Grid.Row>
                    <Footer />
                </Grid.Row>

            </Grid>
        );
        // <Segment>
        // <div className="no-border">
        //     <HeaderApp />
        //         {this.props.children} 
        //         <Link to="Headers"><button>Headers</button></Link>
        //             <Link to="settings">Settings</Link> 
        //  <button onClick={this.navigateToFeature} > Feature </button> 
        // </div>
        // </Segment>
    }
}

function registerRoutes(router: RoutElement, index: number) {
    console.log('toli | 111');
    return <Route path={router.path} component={router.component} key={index} />
}

// render(
//     <Provider store={appStore}>
//         <Router history={browserHistory}>
//            routeElements.map(registerRoutes);
//         </Router>
//     </Provider>, document.getElementById("root"));

//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------
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



