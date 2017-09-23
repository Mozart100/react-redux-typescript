import { Action } from "redux";
import { LeftSidebarStateEnum } from "../../redux/reducers/com-control-reducer";


export const leftSidebarOnOffCallbackAction = (flag: boolean): Action => {
    return {
        type: flag ? LeftSidebarStateEnum.leftSidebarOn : LeftSidebarStateEnum.leftSidebarOff
    };

};