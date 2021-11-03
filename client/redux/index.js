import { combineReducers } from "redux";
import villagersByMonthReducer from "./allVillagers";
import singleVillagerReducer from "./singleVillager";
import singleMonthReducer from "./singleMonth";
import topsByColorReducer from "./topsByColor";
import topsByStyleReducer from "./topsByStyle";

const appReducer = combineReducers({
  villagersByMonth: villagersByMonthReducer,
  villager: singleVillagerReducer,
  month: singleMonthReducer,
  topsByColor: topsByColorReducer,
  topsByStyle: topsByStyleReducer,
});

export default appReducer;
