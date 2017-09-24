
export type comControl =  {leftSidebarOnOffActionType: boolean};
export type personAppState =  {id: number , name:string , familyName:string};

export default interface AppStateRoot {
    people: personAppState [],
    comControl: comControl
}
