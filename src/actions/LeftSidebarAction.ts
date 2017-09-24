import { Action } from "redux";


export enum LeftSidebarStateEnum {
    leftSidebarOn, leftSidebarOff
}
export const leftSidebarOnOffCallbackAction = (flag: boolean): Action => {
    return {
        type: flag ? LeftSidebarStateEnum.leftSidebarOn : LeftSidebarStateEnum.leftSidebarOff
    };
};