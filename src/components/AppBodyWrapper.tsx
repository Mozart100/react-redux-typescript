import * as React from "react";
import { Segment, Sidebar, Menu, Icon, Grid, Container } from "semantic-ui-react";
import MainContent from "./MainContent";
import { comControl } from "../../redux/app-state";
import { Link } from "react-router";
import { PersonAddingAction } from "../actions/person-actions";

interface AppBodyWrapperProps {
    comControl: comControl
    children: any,
    addPersonAction: (id: number, name: string, familyName: string) => PersonAddingAction;
}

interface AppBodyWrapperState {

}
export default class AppBodyWrapper extends React.Component<AppBodyWrapperProps, AppBodyWrapperState> {

    constructor(props) {
        super(props)
    }

    render() {

        const propsWithChildren = this.props.children != null ? React.cloneElement(this.props.children, this.props) : this.props;

        return (
            <Sidebar.Pushable as={Segment} basic >
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
                    <Menu.Item name='people' as={Link} to="people">
                        <Icon name='camera' />
                        People
                    </Menu.Item>
                    <Menu.Item name='AddPerson' as={Link} to="AddPerson">
                        <Icon name='address card' />
                        Register
                    </Menu.Item>

                    <Menu.Item name='Personal Detail' as={Link} to="PersonPresenter/1">
                        <Icon name='address card' />
                        Personal Detail
                    </Menu.Item>
                    <Menu.Item name='Load Users' as={Link} to="LoadUsers">
                        <Icon name='address card' />
                        Load Users(Http)
                    </Menu.Item>

                </Sidebar>
                <Sidebar.Pusher>
                    <Segment basic className="no-border">
                        {propsWithChildren}
                    </Segment>

                </Sidebar.Pusher>
            </Sidebar.Pushable>
        );
    }
}