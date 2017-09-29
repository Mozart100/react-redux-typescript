import * as React from "react";
import { Header, Segment, Button, Table, Label, Grid, Container } from "semantic-ui-react";
import { PersonStates, PersonAddingAction } from "../actions/person-actions";
import { personAppState } from "../../redux/app-state";

interface PeopleState {
}

interface PeopleProps {
    people: personAppState[]
}

export default class People extends React.Component<PeopleProps, PeopleState> {

    constructor(props) {
        super(props)

    }

    //-------------------------------------------------------------------------------------------------------
    //-------------------------------------------------------------------------------------------------------

    private tableRaws = (person: personAppState, index: number) => {
        return (<Table.Row key={index}>
            <Table.Cell>{person.id}</Table.Cell>
            <Table.Cell>{person.name}</Table.Cell>
            <Table.Cell>{person.familyName}</Table.Cell>
        </Table.Row>);
    }

    render() {
        return (
            <Grid container verticalAlign="middle"  className="no-border" > 
                {/* style={{ 'width': '100%' }} */}
                <Header textAlign="center" as="h1">This is my People</Header>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>Name</Table.HeaderCell>
                            <Table.HeaderCell>Family Name</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.props.people.map(this.tableRaws)}
                    </Table.Body>
                </Table>
            </Grid >
        );
    }
}