import * as React from "react";
import faker from "faker";
import { Grid, Header, Segment, Table, Button, Label } from "semantic-ui-react";

interface Person {
  name: string;
  familyName: string;
  age: number;
}

interface TestPromiseProps {

}

interface TestPromiseState {
  people: Person[],
  buttonPressed: number
}

export class TestPromise extends React.Component<TestPromiseProps, TestPromiseState> {

  constructor(props) {
    super(props);

    this.state = { people: [], buttonPressed: 0 }
  }

  //-------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------

  private addNewPerson = (): void => {
    console.log('toli | entered!');

    let person: Person = {
      name: faker.name.firstName(),
      familyName: faker.name.lastName(),
      age: faker.random.number({ min: 0, max: 100 })
    }

    this.setState({ buttonPressed: this.state.buttonPressed + 1 })

    let promise = new Promise((resolve, reject) => {
      let seconds = (Math.floor(Math.random() * 3) + 1) * 1000;
      setTimeout(() => {
        resolve(person)

      }, seconds)
    });


    promise.then((per: Person) => {
      let people = this.state.people
      people.push(person);
      this.setState({ people });
    });
    // promise.then((per:Person) =>console.log('toli | per = ', per.familyName + ' ' + per.name + ' age:' + per.age));


  }

  private tableRaws = (person: Person, index: number) => {
    return (<Table.Row key={index}>
      <Table.Cell>{person.name}</Table.Cell>
      <Table.Cell>{person.familyName}</Table.Cell>
      <Table.Cell>{person.age}</Table.Cell>
    </Table.Row>);
  }

  render() {
    return (
      <Grid columns='2' container>
        <Grid.Row>
          <Grid.Column width={16}>
            <Header as='h1' textAlign="center">
              Promise Test
          </Header>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={5} verticalAlign="top">
            <Segment basic>
              <Button primary onClick={e => this.addNewPerson()}>Add New Person</Button>
              <Label pointing='left'>{this.state.buttonPressed}</Label>
            </Segment>
          </Grid.Column>
          <Grid.Column width={11}>
            <Table celled >
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Family Name</Table.HeaderCell>
                  <Table.HeaderCell>Age</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {this.state.people.map(this.tableRaws)}
              </Table.Body>
            </Table>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}