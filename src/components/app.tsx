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
import Footer from "./Layout/Footer";
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
            <Grid >
                <Grid.Row>
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



