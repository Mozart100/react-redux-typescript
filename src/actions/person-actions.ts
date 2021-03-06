import { Action } from "redux";

export type PersonStates = "AddPerson" | "RemovePerson";

// export enum PersonStates {
// 	AddPerson
// }



export interface PersonAddingAction {
	id: number;
	name: string;
	familyName: string;
	type: PersonStates
}

export const addPersonAction = (id: number, name: string, familyName: string): PersonAddingAction => {
	return { id: id, name: name, familyName: familyName, type: "AddPerson" }
}

export  const removePersonAction = (id: number): { id: number, type: PersonStates } => {
	return {
		id,
		type: "RemovePerson"
	}
}

// export const personActions = {
// 	addPersonAction,
// 	removePersonAction
// }