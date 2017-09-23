export enum LeftSidebarStateEnum
{
    leftSidebarOn,leftSidebarOff
}

export default function comControlReducer(comControl = {}, action) {

    console.log('toli | comControlReducer action.type',action.type);
    switch (action.type) {

        case 'leftSidebarOn':
            console.log('toli | comControlReducer leftSidebarOn');
            const on = Object.assign({}, comControl, { leftSidebarOnOffActionType: true });
            return on;

        case 'leftSidebarOff':
            console.log('toli | comControlReducer leftSidebarOff');
            const off = Object.assign({}, comControl, { leftSidebarOnOffActionType: false });
            return off;

        default:
            console.log('toli | default comControlReducer');
            return comControl;
    }
}