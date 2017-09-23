import * as React from "react";
import { Segment, Sidebar, Menu, Icon } from "semantic-ui-react";
import MainContent from "./MainContent";
import { comControl } from "../../redux/app-state";
import { Link } from "react-router";

interface AppBodyWrapperProps {
    comControl: comControl
    children: any
}

interface AppBodyWrapperState {

}
export default class AppBodyWrapper extends React.Component<AppBodyWrapperProps, AppBodyWrapperState> {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <Sidebar.Pushable as={Segment} basic>
                <Sidebar as={Menu} animation='push' width='thin' visible={this.props.comControl.leftSidebarOnOffActionType} icon='labeled' vertical inverted>
                    {/* <Sidebar as={Menu} animation='push' width='thin' visible={this.props.showLeftSideBar} icon='labeled' vertical inverted> */}
                    <Menu.Item name='home' as={Link} to="/">
                        <Icon name='home' />
                        Home
                    </Menu.Item>
                    <Menu.Item name='gamepad' as={Link} to="Features">
                        <Icon name='gamepad' />
                        Features
                              </Menu.Item>
                    <Menu.Item name='camera' as={Link} to="Settings">
                        <Icon name='camera' />
                        Settings
                    </Menu.Item>
                </Sidebar>
                <Sidebar.Pusher>
                    <Segment basic className="no-border">
                        {this.props.children}
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}