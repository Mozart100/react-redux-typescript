import * as React from "react";
import { Header, Grid, Form, Label, Button } from "semantic-ui-react";

import { addPersonAction, PersonAddingAction } from "../actions/person-actions"

interface AddPersonProps {
  addPersonAction:(id: number, name: string, familyName: string)=>PersonAddingAction;
}

interface AddPersonState {
  id: number;
  name: string;
  familyName: string;
}

export class AddPerson extends React.Component<AddPersonProps, AddPersonState> {

  constructor(props) {
    super(props);

    this.state = { id: 0, familyName: "", name: "" };
  }

  //-------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------
  
  private AddPersonClicked = () : void => {
    this.props.addPersonAction(this.state.id , this.state.name , this.state.familyName);
  }

  //-------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------
  

  render() {
    return (
      <Grid container>
        <Grid.Row>
          <Header textAlign="center"> Adding New Person</Header>
        </Grid.Row>
        <Grid.Row>
          <Form>
            <Form.Field>
              <Label>Id</Label>
              <input type="text" placeholder="Id" onChange={e => this.setState({ id: Number(e.target.value) })} value={this.state.id} />
            </Form.Field>
            <Form.Field>
              <Label>First Name</Label>
              <input type="text" placeholder="First Name" onChange={e => this.setState({ name: e.target.value })} value={this.state.name} />
            </Form.Field>
            <Form.Field>
              <Label>Family Name</Label>
              <input type="text" placeholder="Family Name" onChange={e => this.setState({ familyName: e.target.value })} value={this.state.familyName} />
            </Form.Field>
            <Button onClick={e=>this.AddPersonClicked()}>Add</Button>
          </Form>
        </Grid.Row>
      </Grid>
    );
  }

  //-------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------

 
}