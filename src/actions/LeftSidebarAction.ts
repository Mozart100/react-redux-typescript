import { Action } from "redux";
import { LeftSidebarStateEnum } from "../../redux/reducers/com-control-reducer";


// export interface LeftSidebarAction extends Action {
//     leftSidebarOnOff: (flag: boolean) => void;
// }

interface ReduxCallback {
    type: string;
    // flag: boolean;
}

export const leftSidebarOnOffCallbackAction = (flag: boolean): ReduxCallback => {
    console.log('toli | leftSidebarOnOffCallbackAction invoked');
    console.log('toli | leftSidebarOnOffCallbackAction falg =',flag );
    console.log('toli | leftSidebarOnOffCallbackAction type =',flag ? "leftSidebarOn" : "leftSidebarOff");
    // console.log('toli | leftSidebarOnOffCallbackAction xx type =',flag ? LeftSidebarStateEnum.leftSidebarOn.toString() : LeftSidebarStateEnum.leftSidebarOff.toString());
    return {
        // flag: flag,
        type: flag ? "leftSidebarOn" : "leftSidebarOff"
        // type: flag ? LeftSidebarStateEnum.leftSidebarOn.toString() : LeftSidebarStateEnum.leftSidebarOff.toString()
    };

};