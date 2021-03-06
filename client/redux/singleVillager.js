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
        singleVillager(id: ${id}) {
          id
          name
          imageUrl
          birthday
          style_one
          style_two
          color_one
          color_two
          fave_tops_style {
            id
            name
            imageUrl
            price
            style_one
            style_two
            source
            season
          }
          fave_tops_color {
            id
            name
            imageUrl
            price
            color_one
            color_two
            source
            season
          }
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
      return action.villager;
    default:
      return state;
  }
}

// set chosen villager in store state
// use this to pass down color preferences to singlevillager component
// use preferences to fetch tops
