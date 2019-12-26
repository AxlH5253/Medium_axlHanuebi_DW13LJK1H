import { createStore, combineReducers } from "redux";
import counter from '../reducers/counter';
import isLogged from '../reducers/islogged';



//Get All reducers available
//Global State come from here

const reducers = combineReducers({
    counter: counter,
    isLogged: isLogged
});

//Setup Store Redux
const store = createStore(reducers);

export default store;