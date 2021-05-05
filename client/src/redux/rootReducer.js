import { combineReducers } from "redux";

import authReducer from "./auth/authReducers";
import tasksReducer from "./tasks/tasksReducers";



const rootReducer = combineReducers({
    
    auth: authReducer,
    tasks: tasksReducer


});

export default rootReducer;