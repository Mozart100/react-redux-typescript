
import AppStateRoot, { personAppState } from "../app-state";
import { PersonStates, PersonAddingAction } from "../../src/actions/person-actions";


const initialState: AppStateRoot = {
    people: [],
    comControl: { leftSidebarOnOffActionType: false }
}

export default function personReducer(people: personAppState [] = [], action: PersonAddingAction) {

    console.log('toli | begin personReducer', people);
    switch (action.type) {

        case "AddPerson":

            console.log('toli | reducer PersonStates.AddPerson');

            const tmp = action as personAppState;
            people.push({ ...tmp });
            // appStateRoot.people.push({ ...tmp });

            // const newStatePerson = Object.assign({}, people)
            return people;


        default:
            console.log('toli | default personReducer = ', people);
            return people;
    }
}