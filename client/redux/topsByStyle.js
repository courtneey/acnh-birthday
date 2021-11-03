import axios from "axios";
import "regenerator-runtime";

const SET_TOPS_BY_STYLE = "SET_TOPS_BY_STYLE";

const _setTopsByStyle = (tops) => {
  return {
    type: SET_TOPS_BY_STYLE,
    tops,
  };
};

export const fetchTopsByStyle = (style_one, style_two) => {
  return async (dispatch) => {
    try {
      const query = `
      {
        topsByStyle(style_one:"${style_one}, style_two:${style_two}") {
        id
        name
        imageUrl
        price
        style_one
        style_two
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
      dispatch(_setTopsByStyle(data.data.topsByStyle));
    } catch (err) {
      console.log("There was an issue with fetching tops by style: ", err);
    }
  };
};

export default function topsByStyleReducer(state = [], action) {
  switch (action.type) {
    case SET_TOPS_BY_STYLE:
      return action.topsByStyle;
    default:
      return state;
  }
}
