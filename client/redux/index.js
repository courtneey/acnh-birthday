import { combineReducers } from "redux";
import villagersByMonthReducer from "./allVillagers";
import singleVillagerReducer from "./singleVillager";
import singleMonthReducer from "./singleMonth";
import topsByColorReducer from "./topsByColor";

const appReducer = combineReducers({
  villagersByMonth: villagersByMonthReducer,
  villager: singleVillagerReducer,
  month: singleMonthReducer,
  topsByColor: topsByColorReducer,
});

export default appReducer;
