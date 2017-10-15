import * as React from "react";
import { Grid, Button, Table, Label, Form } from "semantic-ui-react";
import { User } from "../Models/User";

import axios from "axios";
import AxiousInvoker from "../../infrastructure/httpInvoker";

interface UserLoaderProps {

}

interface UserLoaderState {
  users: User[]
}

export class UserLoader extends React.Component<UserLoaderProps, UserLoaderState> {
  private url: string;
  private invoker: AxiousInvoker<User>;

  //-------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------

  constructor(props) {
    super(props);

    this.url = "https://jsonplaceholder.typicode.com/users";
    this.state = { users: [] };

    const middlewareCallback: (users: User[]) => void = (users) => this.assignUsers(users);
    const middlewareErrorCallback: (errorMsg: string) => void = (error) => this.printErrorMessage(error);



    this.invoker = new AxiousInvoker(this.url, middlewareCallback, middlewareErrorCallback);

  }

  //-------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------

  private loadUsers = (): void => {
    this.invoker.getAxiouseRequest();

  }
  // private loadUsers = (): void => {
  //   const callback = this.assignToUsers;
  //   axios.get('https://jsonplaceholder.typicode.com/users')
  //     .then(function (response) {

  //       callback(response.data);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  //-------------------------------------------------------------------------------------------------------

  private assignUsers(users: User[]): void {
    this.setState({ users });
  }

  //-------------------------------------------------------------------------------------------------------

  private printErrorMessage(message: string): void {
    console.log('toli | errorMessage', message);
  }



  // private assignToUsers = (data: object[]): void => {
  //   let users: User[] = [];

  //   for (const item of data) {
  //     users.push(item as User);
  //   }

  //   this.setState({ users });

  // }

  //-------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------

  render() {
    return (
      <Grid container>
        <Grid.Row verticalAlign="middle" textAlign="center">
          <Form>
            <Form.Field inline>
              <Label pointing='right'>Please press the following button</Label>
              <Button primary content="Load users" onClick={e => this.loadUsers()}></Button>
            </Form.Field>
          </Form>
        </Grid.Row>

        <Grid.Row>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Id</Table.HeaderCell>
                <Table.HeaderCell>Name</Table.HeaderCell>
                <Table.HeaderCell>User Name</Table.HeaderCell>
                <Table.HeaderCell>Email</Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              {this.state.users.map(this.tableRaws)}
            </Table.Body>
          </Table>
        </Grid.Row>
        <Grid.Row verticalAlign="top">
          <Label>
            Count = {this.state.users.length}
          </Label>
        </Grid.Row>
      </Grid>
    );
  }

  //-------------------------------------------------------------------------------------------------------


  private tableRaws = (user: User, index: number) => {
    return (<Table.Row key={index}>
      <Table.Cell>{user.id}</Table.Cell>
      <Table.Cell>{user.name}</Table.Cell>
      <Table.Cell>{user.username}</Table.Cell>
      <Table.Cell>{user.email}</Table.Cell>
    </Table.Row>);
  }
}