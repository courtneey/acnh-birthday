import axios from "axios";
import "regenerator-runtime";

const SET_VILLAGERS_BY_MONTH = "SET_VILLAGERS_BY_MONTH";

const _setVillagersByMonth = (villagers) => {
  return {
    type: SET_VILLAGERS_BY_MONTH,
    villagers,
  };
};

export const fetchVillagersByMonth = (month) => {
  return async (dispatch) => {
    try {
      const query = `
      {
        villagersByMonth(month:"${month}") {
        id
        name
        imageUrl
        birthday
        }
      }
      `;

      const { data } = await axios({
        url: "/api/graphql",
        method: "post",
        data: {
          query,
        },
      });
      dispatch(_setVillagersByMonth(data.data.villagersByMonth));
    } catch (err) {
      console.log("There was an issue with fetching villagers by month: ", err);
    }
  };
};

export default function villagersByMonthReducer(state = [], action) {
  switch (action.type) {
    case SET_VILLAGERS_BY_MONTH:
      return action.villagers;
    default:
      return state;
  }
}
