import { combineReducers } from "redux";
import { popularReducer } from "./popular/popular.reducer";
import { resultsReducer } from "./battle/battle.reducer";

export default combineReducers({
    popularReducer,
    resultsReducer,
})