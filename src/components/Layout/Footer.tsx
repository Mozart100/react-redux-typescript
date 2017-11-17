import * as React from "react";
import { Grid } from "semantic-ui-react";

export default class Footer extends React.Component {
    render() {
        return (
            <Grid columns={3}>
                <Grid.Row>
                    <Grid.Column width={3} floated="left">
                        <p>xxxThis is my Footerxx</p>
                    </Grid.Column>
                    <Grid.Column width={3} floated="right">
                        <p>xxxThis is my Footerxx</p>
                    </Grid.Column>
                </Grid.Row>
            </Grid>);
    }
}