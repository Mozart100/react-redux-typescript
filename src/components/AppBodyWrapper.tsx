import * as React from "react";
import { Segment, Sidebar, Menu, Icon } from "semantic-ui-react";
import AppBody from "./AppBody";

interface AppBodyWrapperProps {
    // showLeftSideBar: boolean;
    // leftSidebarOnOffActionType:(flag: boolean) => void
    comControl: { leftSidebarOnOffActionType: boolean }

}

interface AppBodyWrapperState {

}
export default class AppBodyWrapper extends React.Component<AppBodyWrapperProps, AppBodyWrapperState> {

    constructor(props) {
        super(props)
    }

    render() {

        return (
            <Sidebar.Pushable as={Segment}>
                <Sidebar as={Menu} animation='push' width='thin' visible={this.props.comControl.leftSidebarOnOffActionType} icon='labeled' vertical inverted>
                {/* <Sidebar as={Menu} animation='push' width='thin' visible={this.props.showLeftSideBar} icon='labeled' vertical inverted> */}
                    <Menu.Item name='home' onClick={e => console.log('toli | ')}>
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
                    <Segment basic className="no-border">
                        <AppBody />
                    </Segment>
                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}