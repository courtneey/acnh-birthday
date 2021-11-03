import axios from "axios";

const SET_VILLAGER = "SET_VILLAGER";

const _setVillager = (villager) => {
  return {
    type: SET_VILLAGER,
    villager,
  };
};

export const fetchVillager = (id) => {
  return async (dispatch) => {
    try {
      const query = `
      {
        topsByColor(id: ${id}) {
        id
        name
        imageUrl
        style_one
        style_two
        color_one
        color_two
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
      dispatch(_setVillager(data.data.singleVillager));
    } catch (err) {
      console.log("There was an issue with fetching a single villager: ", err);
    }
  };
};

export default function singleVillagerReducer(state = {}, action) {
  switch (action.type) {
    case SET_VILLAGER:
      return action.singleVillager;
    default:
      return state;
  }
}

// set chosen villager in store state
// use this to pass down color preferences to singlevillager component
// use preferences to fetch tops
