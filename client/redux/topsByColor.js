import axios from "axios";
import "regenerator-runtime";

const SET_TOPS_BY_COLOR = "SET_TOPS_BY_COLOR";

const _setTopsByColor = (tops) => {
  return {
    type: SET_TOPS_BY_COLOR,
    tops,
  };
};

export const fetchTopsByColor = (color_one, color_two) => {
  return async (dispatch) => {
    try {
      const query = `
      {
        topsByColor(color_one:"${color_one}", color_two:"${color_two}") {
        id
        name
        imageUrl
        price
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
      dispatch(_setTopsByColor(data.data.topsByColor));
    } catch (err) {
      console.log("There was an issue with fetching tops by color: ", err);
    }
  };
};

export default function topsByColorReducer(state = [], action) {
  switch (action.type) {
    case SET_TOPS_BY_COLOR:
      return action.tops;
    default:
      return state;
  }
}
