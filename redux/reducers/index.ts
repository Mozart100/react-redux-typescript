import {combineReducers} from 'redux';
import comControlReducer from "./com-control-reducer";
import  personReducer from "./person-reducer";

const rootReducer = combineReducers({
        // user:userReducer,
        comControl :comControlReducer,
        people : personReducer
});

export default rootReducer;