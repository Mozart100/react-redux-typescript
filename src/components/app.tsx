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

                <Grid.Row style={{ 'minHeight': '100vh' }}>
                    <Grid columns={2} divided>
                        <Grid.Column width={14} stretched>
                            <AppBodyWrapper {...ioc} />
                        </Grid.Column>

                        <Grid.Column width={2} stretched>
                            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, eveniet. Possimus nesciunt deserunt, sit molestias odio harum ducimus, amet fugit unde mollitia minima quisquam omnis illum tempore suscipit placeat? Numquam recusandae minima veniam in ex hic temporibus aspernatur, voluptatem nam repellendus eius optio doloremque eum maxime, voluptate obcaecati laborum, asperiores quia non? Velit odio in atque suscipit illo perspiciatis, maiores officia omnis itaque dolore fuga molestias unde reprehenderit quaerat possimus repudiandae corporis. Omnis repudiandae, at nobis ex laudantium impedit odio quidem maiores debitis perferendis sapiente fugiat in exercitationem. Facilis aliquam blanditiis aliquid id vero quaerat quae cum et, quasi consectetur tenetur totam fugiat pariatur omnis beatae? Deleniti vel minima pariatur corrupti eaque deserunt aspernatur cupiditate sed. Voluptatum neque veniam ex ut nemo nam rem suscipit! Ducimus nobis dolorem laboriosam minus excepturi, ad sapiente eos soluta, eum voluptatibus nulla tempore commodi quia, ipsum ut sed eaque porro vero in facilis. Ex, consequatur cumque recusandae sunt aperiam, doloremque debitis dolorum asperiores obcaecati voluptatibus rem iure. Molestiae odit minima ipsa saepe deleniti cumque obcaecati numquam, dignissimos dolorum repudiandae, tenetur, quod officiis neque doloremque modi voluptates! Adipisci corporis tenetur vel repudiandae veniam iusto doloremque, est dicta beatae voluptas ullam nobis ducimus similique eligendi cupiditate impedit fugiat suscipit. Quae dignissimos consectetur, a impedit eius dolores sequi deleniti corporis praesentium amet labore animi exercitationem sint laboriosam quidem doloribus error esse dolore consequatur? Quia laboriosam quae exercitationem blanditiis minima quam fuga unde eaque distinctio autem porro, similique voluptas saepe doloribus. Omnis, minus quisquam consequuntur magni facilis quis ipsum officiis commodi architecto aliquam, ad nulla ratione quidem obcaecati nobis odit perferendis blanditiis unde? Suscipit doloribus, atque, cumque repellendus soluta quod nemo, voluptatum ullam eius vitae ipsa. Voluptatum, voluptas expedita ut cum nisi suscipit debitis libero officiis nesciunt! Voluptate corrupti voluptates deleniti, adipisci dicta iure ipsam autem vel in! </p> 
                        </Grid.Column>
                    </Grid>
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
        leftSidebarOnOffCallbackAction: state.leftSidebarOnOffCallbackAction,
        addPersonAction: state.addPersonAction
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



