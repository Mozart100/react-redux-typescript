import * as React from "react";
import { Header, Container, Grid, Segment } from "semantic-ui-react";

export default class Features extends React.Component {
    render() {
        return (
            <Grid >
                <Grid.Row columns={5} >
                    <Grid.Column width={5}>
                        <div style={{ background: 'red' }}>
                            xxx
                        </div>
                    </Grid.Column>
                    <Grid.Column width={5}>
                        <div style={{ background: 'tranperent' }}>

                        </div>
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <div style={{ background: 'green' }}>
                            xxx
                        </div>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2}>
                    <Grid.Column width={2}>
                        <div style={{ background: 'red' }}>
                            xxx
                        </div>
                    </Grid.Column>
                    <Grid.Column width={14}>
                        <div style={{ background: 'green' }}>
                            xxx
                        </div>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row columns={2} style={{ height: '30vh' }} >
                    <Grid.Column width={5} stretched>
                        <div style={{ background: 'red' }}>
                            xxx
                        </div>
                    </Grid.Column>
                    <Grid.Column width={5} verticalAlign="middle">
                        <div style={{ background: 'black' }}>
                            xxx
                        </div>
                    </Grid.Column>
                    <Grid.Column width={6} verticalAlign="bottom" >
                        <div style={{ background: 'green' }}>
                            xxx
                        </div>
                    </Grid.Column>
                </Grid.Row>

                {/* ------------------------------------------------------------------------------------------------------- */}

                <Grid.Row   stretched >
                    <Grid.Column width={5} stretched>
                        <Segment style={{ background: 'red' }}>
                        </Segment>

                    </Grid.Column>
                    <Grid.Column width={5} verticalAlign="middle">
                        <Segment >
                            1
                        </Segment>
                        <Segment >
                            2
                        </Segment>
                    </Grid.Column>
                    <Grid.Column width={6} verticalAlign="bottom" >
                        <div style={{ background: 'green' }}>
                            xxx
                        </div>
                    </Grid.Column>
                </Grid.Row>



            </Grid>
        );
    }
}