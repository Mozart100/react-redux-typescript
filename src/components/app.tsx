import * as React from "react";
import { render } from "react-dom";

import { Provider, connect } from "react-redux";
import { Router, Route, browserHistory, IndexRoute, hashHistory, Link } from 'react-router';
import { bindActionCreators } from "redux";
//  import {sync  } from "react-router-redux";

import { Segment, Sidebar, Menu, Header, Grid, Icon } from "semantic-ui-react";
import Features from "./Features";
import Settings from "./Settings";
import HeaderApp from "./Layout/HeaderApp";

import '../../node_modules/semantic-ui-css/semantic.min.css';
import "./app.css";

import routeElements, { RoutElement } from "./Layout/routeElements"

import Footer from "./Layout/Footer";
import MainContent from "./MainContent";
import AppBodyWrapper from "./AppBodyWrapper";
import { actionCreators } from "../actions/index";
// import actions from "../actions/actions";
// import "D:\Anatoliy\VSCode\TypescriptProj\node_modules\semantic-ui-css\semantic.min.css";


interface AppProps {

}
interface AppState {
    showLeftSideBar: boolean;
}

class App extends React.Component<any, any> {

    constructor(props) {
        super(props)
    }

    // private navigateToFeature =  () =>{
    //     this.props["history"].pushState(null,"/");
    // }

    render() {
        const ioc = Object.assign({}, this.props);

        return (
            <Grid >
                <Grid.Row>
                    <HeaderApp {...ioc} />
                </Grid.Row>
                
                <Grid.Row style={{'minHeight':'100vh'}}>
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




function mapStateToProps(state) {
    console.log('toliy | mapStateToProps state=', state); // state
    // console.log(arguments[1]); // undefined

    const mapper = {
        leftSidebarOnOffCallbackAction : state.leftSidebarOnOffCallbackAction ,
        addPersonAction : state.addPersonAction   
    }
    return state;
}

// function mapDispatchToProps(dispatch) {
//     const tmp = bindActionCreators(actionCreators, dispatch);
//      console.log('toli | mapDispatchToProps tmp=',tmp);


//     return {
//         actions : bindActionCreators(actionCreators, dispatch)
//     };
// }
export default connect(mapStateToProps, actionCreators)(App);


// function registerRoutes(router: RoutElement, index: number) {
//     console.log('toli | 111');
//     return <Route path={router.path} component={router.component} key={index} />
// }

// render(
//     <Provider store={appStore}>
//         <Router history={browserHistory}>
//            routeElements.map(registerRoutes);
//         </Router>
//     </Provider>, document.getElementById("root"));

//-------------------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------------------



// const router =
//     <Router history={browserHistory}>
//         <Route path="/" component={App}>

//         </Route>
//     </Router>

// render(
//     <Provider store={appStore}>
//        {this.router}
//     </Provider>, document.getElementById("root"));



