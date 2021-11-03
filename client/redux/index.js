import { combineReducers } from "redux";
import villagersByMonthReducer from "./allVillagers";
import singleVillagerReducer from "./singleVillager";
import singleMonthReducer from "./singleMonth";

const appReducer = combineReducers({
  villagersByMonth: villagersByMonthReducer,
  villager: singleVillagerReducer,
  month: singleMonthReducer,
});

export default appReducer;
