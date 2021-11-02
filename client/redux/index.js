import { combineReducers } from "redux";
import singleMonthReducer from "./singleMonth";
import singleVillagerReducer from "./singleVillager";

const appReducer = combineReducers({
  month: singleMonthReducer,
  villager: singleVillagerReducer,
});

export default appReducer;
