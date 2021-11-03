import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTopsByColor } from "../redux/topsByColor";
import { fetchTopsByStyle } from "../redux/topsByStyle";
import { fetchVillager } from "../redux/singleVillager";

class SingleVillager extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchVillager(+id);
  }

  componentDidUpdate(prevProps) {
    if (this.props.villager.id !== prevProps.villager.id) {
      const { color_one, color_two, style_one, style_two } =
        this.props.villager;
      this.props.fetchTopsByColor(color_one, color_two);
      this.props.fetchTopsByStyle(style_one, style_two);
    }
  }

  render() {
    const { villager, topsByColor, topsByStyle } = this.props;
    return (
      <div className="villager-and-tops">
        <img src={villager.imageUrl} style={{ width: 150 }} />
        <h2>{villager.name}</h2>
        {/* <table className="tops">
          <tr>
            <th>tops by color</th>
            <th>tops by style</th>
          </tr>
          <tr>
            <td>
              {topsByColor.map((top) => {
                return (
                  <p key={top.id}>
                    <img src={top.imageUrl} />
                  </p>
                );
              })}
            </td>
            <td>
              {topsByStyle.map((top) => {
                return (
                  <p key={top.id}>
                    <img src={top.imageUrl} />
                  </p>
                );
              })}
            </td>
          </tr>
        </table> */}
        <div className="tops-container">
          <div className="tops-title">
            <div>tops by color</div>
            <div>tops by style</div>
          </div>

          <div className="tops-images">
            <div>
              {topsByColor.map((top) => {
                return (
                  <p key={top.id}>
                    <img src={top.imageUrl} />
                  </p>
                );
              })}
            </div>
            <div>
              {topsByStyle.map((top) => {
                return (
                  <p key={top.id}>
                    <img src={top.imageUrl} />
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    villager: state.villager,
    topsByColor: state.topsByColor,
    topsByStyle: state.topsByStyle,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchTopsByColor: (color_one, color_two) =>
      dispatch(fetchTopsByColor(color_one, color_two)),
    fetchTopsByStyle: (style_one, style_two) =>
      dispatch(fetchTopsByStyle(style_one, style_two)),
    fetchVillager: (id) => dispatch(fetchVillager(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleVillager);
