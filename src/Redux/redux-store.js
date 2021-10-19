import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware  from "redux-thunk";
import suggestedHikesReducer from "./suggestedHike-reducer";
import equipmentReducer from "./equipment-reducer";
import costReducer from "./cost-reducer";
import suitableHikesReducer from "./suitableHikes-reducer";
import testReducer from "./test-reducer";
let reducersBatch = combineReducers({
        suggestedHikesPage: suggestedHikesReducer,
        testPage: testReducer
       // suitableHikesPage: suitableHikesReducer,
        //costPage: costReducer,
        //equipmentPage: equipmentReducer

    }
);


let store = createStore(reducersBatch, applyMiddleware(thunkMiddleware));
window.store = store;
export default store;