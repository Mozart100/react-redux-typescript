import   * as React from "react";
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
<<<<<<< HEAD

import routeElements, { RoutElement } from "./Layout/routeElements"

import Footer from "./Layout/Footer";
import AppBody from "./AppBody";
import AppBodyWrapper from "./AppBodyWrapper";
import { actionCreators } from "../actions/index";
import actions from "../actions/actions";
=======
import Footer from "./Layout/Footer";
>>>>>>> a85a3b623935748449cf4416d9004e584ecca835
// import "D:\Anatoliy\VSCode\TypescriptProj\node_modules\semantic-ui-css\semantic.min.css";


interface AppProps {

}
interface AppState {
    showLeftSideBar: boolean;
}
 class App extends React.Component<any, any> {

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
<<<<<<< HEAD
                    <HeaderApp showSideMenu={showLeftSideBar => this.setState({ showLeftSideBar })} />
                </Grid.Row>
                <Grid.Row>
                    <AppBodyWrapper {...ioc} />
                </Grid.Row>

                <Grid.Row>
                    <Footer />
=======
                    <HeaderApp />
                </Grid.Row>
                <Grid.Row>
                    <Sidebar.Pushable as={Segment}>
                        <Sidebar as={Menu} animation='overlay' width='thin' visible={true} icon='labeled' vertical inverted>
                            {/* <Sidebar as={Menu} animation='overlay' width='thin' visible={visible} icon='labeled' vertical inverted> */}
                            <Menu.Item name='home'>
                                <Icon name='home' />
                                Home
                              </Menu.Item>
                            <Menu.Item name='gamepad'>
                                <Icon name='gamepad' />
                                Games
                              </Menu.Item>
                            <Menu.Item name='camera'>
                                <Icon name='camera' />
                                Channels
                             </Menu.Item>
                        </Sidebar>
                        <Sidebar.Pusher>
                            <Segment basic>
                                <Header as='h3'>Application Content</Header>
                                {/* <Image src='/assets/images/wireframe/paragraph.png' /> */}
                            </Segment>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                </Grid.Row>

                <Grid.Row>
                    <Footer/>
>>>>>>> a85a3b623935748449cf4416d9004e584ecca835
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
    console.log(state); // state
    console.log(arguments[1]); // undefined
    return state;
}

function mapDispatchToProps(dispatch) {
    console.log('toli | 11111');
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}
export default connect(mapStateToProps, mapDispatchToProps)(App);


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



