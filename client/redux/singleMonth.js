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
      // const villagers = await axios({
      //   url: "/api/graphql",
      //   method: "get",
      //   data: {
      //     query: `query villagersByMonth(month:${month}) {
      //       id
      //       name
      //       imageUrl
      //       birthday
      //     }`,
      //   },
      // });

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

      const villagers = await axios({
        url: "/api/graphql",
        method: "post",
        data: {
          query,
        },
      });

      console.log("villagers from axios:", villagers);
      dispatch(_setVillagersByMonth(villagers));
    } catch (err) {
      console.log("There was an issue with fetching villagers by month: ", err);
    }
  };
};

// update store state with selected month
// this will be used to filter villagers by birthday month

export default function singleMonthReducer(state = [], action) {
  switch (action.type) {
    case SET_VILLAGERS_BY_MONTH:
      return action.villagers;
    default:
      return state;
  }
}
