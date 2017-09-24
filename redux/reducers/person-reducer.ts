
import  AppStateRoot,{personAppState}  from "../app-state";
import { PersonStates, PersonAddingAction } from "../../src/actions/person-actions";

const initialState  : AppStateRoot = {
    people : [],
    comControl :{ leftSidebarOnOffActionType : false }
}

export default function personReducer(appStateRoot: AppStateRoot = initialState, action :PersonAddingAction) {

    console.log('toli | begin personReducer',appStateRoot);
    switch (action.type) {

        case "AddPerson":

            console.log('toli | reducer PersonStates.AddPerson');
            
            const tmp =action as  personAppState ;
            appStateRoot.people.push({ ...tmp }) 

            const newStatePerson = Object.assign({} , appStateRoot )
            return newStatePerson;


        default:
            console.log('toli | default personReducer = ',appStateRoot);
            return appStateRoot;
    }
}