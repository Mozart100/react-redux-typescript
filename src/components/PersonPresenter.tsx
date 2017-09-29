import * as React from "react";
import { personAppState } from "../../redux/app-state";

interface PersonPresenterProps {
  people: personAppState[];
  params:any
}

interface PersonPresenterState {

}

export class PersonPresenter extends React.Component<PersonPresenterProps, PersonPresenterState> {
  constructor(props) {
    super(props);

    console.log('toli | PersonPresenter param', this.props.params.id);
  }

  //-------------------------------------------------------------------------------------------------------
  //-------------------------------------------------------------------------------------------------------

  render() {
    return (
      <div>
kuku
      </div>
    );
  }
}