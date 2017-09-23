import {combineReducers} from 'redux';
import userReducer from './UserReducer';
import comControlReducer from "./com-control-reducer";

const rootReducer = combineReducers({
        // user:userReducer,
        comControl :comControlReducer
});

export default rootReducer;