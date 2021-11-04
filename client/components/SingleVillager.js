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
        <img src={villager.imageUrl} className="villager-img" />
        <h2 className="villager-name">{villager.name}</h2>
        <div className="villager-bday">Birthday: {villager.birthday}</div>
        <div className="tops-outer-container">
          <div className="tops-container">
            <div className="tops-title">
              Favorite Colors: {villager.color_one} and {villager.color_two}
            </div>

            <div className="tops-list">
              {topsByColor.length ? (
                topsByColor.map((top) => {
                  return (
                    <span key={top.id}>
                      <img src={top.imageUrl} className="list-item-img" />
                      {/* <span className="overlay">{top.price}</span> */}
                    </span>
                  );
                })
              ) : (
                <p>No matches!</p>
              )}
            </div>
          </div>
          <div className="tops-container">
            <div className="tops-title">
              Favorite Styles: {villager.style_one} and {villager.style_two}
            </div>

            <div className="tops-list">
              {topsByStyle.length ? (
                topsByStyle.map((top) => {
                  return (
                    <span key={top.id}>
                      <img src={top.imageUrl} className="list-item-img" />
                      {/* <span className="overlay">{top.price}</span> */}
                    </span>
                  );
                })
              ) : (
                <p>No matches!</p>
              )}
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
