import * as React from "react";
import { personAppState } from "../../redux/app-state";
import { Item } from "semantic-ui-react";
import * as _ from 'lodash';

interface PersonPresenterProps {
  people: personAppState[];
  params: any
}

interface PersonPresenterState {
  person: personAppState
}

export class PersonPresenter extends React.Component<PersonPresenterProps, PersonPresenterState> {
  constructor(props) {
    super(props);

    const id: number = Number(this.props.params.id);
    console.log('toli | PersonPresenter param', id);
    const people = this.props.people;
    const result = _.find(people, x => x.id === id);
    this.state = { person: result !== undefined ? result : { id: -1, name: "", familyName: "" } }
  }

  //-------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------

  render() {
    return (
      <div>
        <Item.Group>
          <Item>
            <Item.Content>
              <Item.Header as='a'>{this.state.person.name} - {this.state.person.familyName}</Item.Header>
              <Item.Meta><strong>ID - </strong>{this.state.person.id}</Item.Meta>
              <Item.Description>
                {/* <Image src='/assets/images/wireframe/short-paragraph.png' /> */}
              </Item.Description>
              <Item.Extra>Additional Details</Item.Extra>
            </Item.Content>
          </Item>


        </Item.Group>
      </div>
    );
  }
}