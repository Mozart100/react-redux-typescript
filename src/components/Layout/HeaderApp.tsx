import * as React from "react";
import { Grid, Button, Segment, Header } from 'semantic-ui-react'

interface HeaderAppProps {
    showSideMenu: (isToShow: boolean) => void
}

interface HeaderAppState {
    // showSidebar: boolean
}

export default class HeaderApp extends React.Component<HeaderAppProps, HeaderAppState> {

    private showSidebar : boolean;

    constructor(props) {
        super(props);
     
        this.showSidebar = false;
    }

    private turnOnOffSidebar = (): void => {
        this.props.showSideMenu( this.showSidebar = !this.showSidebar );
    }

    render() {
        return (
            <Grid columns={3} >
                <Grid.Row style={{ background: "lightgreen" }}>
                    <Grid.Column width="1">
                        {/* <Button onClick={e => this.turnOnOffSidebar} >showSidebar kuku</Button> */}
                        <Button basic  icon="share square" onClick={e => this.turnOnOffSidebar()}/>
                    </Grid.Column>
                    <Grid.Column width="11">
                        <h1>ssss</h1>
                        {/* <Button positive>kuku</Button> */}
                    </Grid.Column>
                    <Grid.Column width="4">
                        {/* <Segment style={{background:"transparent"}}>
                            <Segment.Group horizontal style={{background:"transparent"}}>
                                <Segment>
                                    <Header as="h4">
                                        Sign In
                                    </Header >
                                </Segment>
                                
                                <Segment>
                                    <Header as="h4">
                                        Register
                                    </Header >
                                </Segment>
                                
                            </Segment.Group>
                        </Segment> */}
                    </Grid.Column>
                </Grid.Row>


            </Grid>
        );

    }
}