import * as React from "react";
import { Header, Segment, Button, Table, Label, Grid, Container, Icon } from "semantic-ui-react";
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
            <Grid container verticalAlign="middle" className="no-border" >
                {/* style={{ 'width': '100%' }} */}
                <Header textAlign="center" style={{'margin':'0 10px'}}>
                    <Icon name='users'  />
                    <Header.Content>
                        Friends
                    </Header.Content>
                </Header>
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