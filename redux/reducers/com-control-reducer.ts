import AppStateRoot, { comControl } from "../app-state";

export enum LeftSidebarStateEnum {
    leftSidebarOn, leftSidebarOff
}

const initialiState:AppStateRoot = {
    comControl: {
        leftSidebarOnOffActionType: false
    }
};

// export default function comControlReducer(appState: AppStateRoot = { comControl : {leftSidebarOnOffActionType : false} }, action) {
export default function comControlReducer(appState: comControl = {leftSidebarOnOffActionType : false}, action) {

    
    console.log('toli | comControlReducer action.type', action.type);
    switch (action.type) {

        case LeftSidebarStateEnum.leftSidebarOn:
            console.log('toli | comControlReducer leftSidebarOn');
            const on = Object.assign({}, appState, { leftSidebarOnOffActionType: true });
            return on;

        case LeftSidebarStateEnum.leftSidebarOff:
            console.log('toli | comControlReducer leftSidebarOff');
            const off = Object.assign({}, appState, { leftSidebarOnOffActionType: false });
            return off;

        default:
            console.log('toli | default comControlReducer');
            return appState;
    }
}