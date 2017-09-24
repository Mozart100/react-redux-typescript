import { Action } from "redux";

export type  PersonStates  = "AddPerson";
	
// export enum PersonStates {
// 	AddPerson
// }



export interface PersonAddingAction {
	id: number;
	name: string;
	familyName: string;
	type : PersonStates
}

const addPersonAction = (id: number, name: string, familyName: string): PersonAddingAction => {
	return { id: id, name: name, familyName: familyName, type: "AddPerson" }
}