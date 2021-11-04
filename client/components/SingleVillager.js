import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchVillager } from "../redux/singleVillager";
import Popup from "reactjs-popup";
import TopsInfo from "./TopsInfo";

class SingleVillager extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchVillager(+id);
  }

  render() {
    const { villager, topsByColor, topsByStyle } = this.props;

    return (
      <div className="villager-and-tops">
        <img src={villager.imageUrl} className="villager-img" />
        <div className="villager-name">
          <h2>{villager.name}</h2>
          <p className="villager-bday">Birthday: {villager.birthday}</p>
        </div>

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
                      <Popup
                        trigger={
                          <img src={top.imageUrl} className="list-item-img" />
                        }
                        position="right center"
                      >
                        <TopsInfo topColor={top} />
                      </Popup>
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
                      <Popup
                        trigger={
                          <img src={top.imageUrl} className="list-item-img" />
                        }
                        position="right center"
                      >
                        <TopsInfo topStyle={top} />
                      </Popup>
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
    topsByColor: state.villager?.fave_tops_color ?? [],
    topsByStyle: state.villager?.fave_tops_style ?? [],
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchVillager: (id) => dispatch(fetchVillager(id)),
  };
};

export default connect(mapState, mapDispatch)(SingleVillager);
