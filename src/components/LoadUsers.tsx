import * as React from "react";
import { Grid, Button, Table, Label, Form, Search } from "semantic-ui-react";
import { User } from "../Models/User";
import * as _ from 'lodash';

import axios from "axios";
import AxiousInvoker from "../../infrastructure/httpInvoker";

interface UserLoaderProps {

}

interface UserLoaderState {
  users: User[];
  isLoading: boolean;
  value: string;
  results: UserLoaderSearch[]
}


// const searchSemantic = {
//   title: faker.company.companyName(),
//   description: faker.company.catchPhrase(),
//   image: faker.internet.avatar(),
//   price: faker.finance.amount(0, 100, 2, '$'),
// }))


abstract class SemanticSearchBase<TObject>
{
    constructor(protected item:TObject)
    {

    }

     toJs()
     {
       return {
         title : this.title()
       };
     }


    abstract  title ():string;
    abstract  description ():string;
    // {
    //   return  { title : this.title };
    // }


    // description: faker.company.catchPhrase(),
    //   image: faker.internet.avatar(),
    //   price: faker.finance.amount(0, 100, 2, '$')
}

class UserLoaderSearch extends SemanticSearchBase<User>
{
  constructor(item: User)
  {
    super(item);
  }
  
  description(): string {
  return this.item.username;
  }

  title(): string {
    return this.item.name;
  }

   
}

export class UserLoader extends React.Component<UserLoaderProps, UserLoaderState> {
  private url: string;
  private invoker: AxiousInvoker<User>;

  //-------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------

  constructor(props) {
    super(props);

    this.url = "https://jsonplaceholder.typicode.com/users";
    this.state = { users: [], isLoading: false, value: "", results: [] };

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

  resetComponent = () => this.setState({ isLoading: false, results: [], value: '' })
  // handleResultSelect = (e, { result }) => console.log('toli | result has selected!');
  handleResultSelect = (e, { result }) => this.setState({ value: result.title })

  handleSearchChange = (e, { value }) => {
    console.log('toli | value =', value);
    this.setState({ isLoading: true, value })

    
    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent()

      console.log('toli | filter =', _.filter(this.state.users, x => _.includes(x.name, value)));
      this.setState({
        isLoading: false,
        // results: _.filter(this.state.users, x => _.includes(x.name, value))
        results: _.filter(this.state.users, x => _.includes(x.name, value)).map((x) => new UserLoaderSearch(x).toJs()) as any,
        // results: _.filter(this.state.users, x => _.includes(x.name, value)).map((x) => { return { title: x.name }}) as any,
      });

    }, 500)
  }


  render() {
    
    const { isLoading, value, results } = this.state;

    return (
      <Grid container>
        <Grid.Row verticalAlign="middle" textAlign="center">
          <Grid.Column width={5} floated="left" >
            <Form>
              <Form.Field inline>
                <Label pointing='right'>Please press the following button</Label>
                <Button primary content="Load users" onClick={e => this.loadUsers()}></Button>
              </Form.Field>
            </Form>
          </Grid.Column>

          <Grid.Column width={5} floated="right">
            <Search loading={isLoading}
              onResultSelect={this.handleResultSelect}
              onSearchChange={this.handleSearchChange}
              results={results}
              value={value}
              
               {...this.state.users} 
              
              />

          </Grid.Column>
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