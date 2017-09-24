import AppStateRoot, { comControl } from "../app-state";
import { LeftSidebarStateEnum } from "../../src/actions/LeftSidebarAction";



// const initialiState:AppStateRoot = {
//     comControl: {
//         leftSidebarOnOffActionType: false
//     }
// };

// export default function comControlReducer(appState: AppStateRoot = { comControl : {leftSidebarOnOffActionType : false} }, action) {
export default function comControlReducer(appState: comControl = {leftSidebarOnOffActionType : false}, action) {

    
    switch (action.type) {

        case LeftSidebarStateEnum.leftSidebarOn:
            const on = Object.assign({}, appState, { leftSidebarOnOffActionType: true });
            return on;

        case LeftSidebarStateEnum.leftSidebarOff:
            const off = Object.assign({}, appState, { leftSidebarOnOffActionType: false });
            return off;

        default:
            return appState;
    }
}