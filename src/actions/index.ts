import * as LeftSidebarAction from "./LeftSidebarAction";
import * as PersonActions from "./person-actions";

export  const  actionCreators = {
    ...LeftSidebarAction,
    ...PersonActions
};

