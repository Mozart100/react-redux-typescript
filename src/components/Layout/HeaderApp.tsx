import * as React from "react";
import { Grid, Button, Segment, Header } from 'semantic-ui-react'

export default class HeaderApp extends React.Component {
    render() {

        return (
            <Grid columns={2} >
                <Grid.Row style={{background:"lightgreen"}}>
                    <Grid.Column width="12">
                        <h1>ssss</h1>
                        {/* <Button positive>kuku</Button> */}
                    </Grid.Column>
                    <Grid.Column width="4">
                        <Segment style={{background:"transparent"}}>
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
                        </Segment>
                    </Grid.Column>
                </Grid.Row>

               
            </Grid>
        );

    }
}