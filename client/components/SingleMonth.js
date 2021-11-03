import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchVillagersByMonth } from "../redux/allVillagers";

class SingleMonth extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVillagers(this.props.month);
  }

  render() {
    const { villagers, month } = this.props;
    return (
      <div className="month-and-villagers">
        <h2>{month}</h2>
        <div className="all-villagers">
          {villagers.map((villager) => {
            return (
              <p key={villager.id} className="single-villager">
                <img src={villager.imageUrl} />
                {villager.name}
              </p>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    villagers: state.villagersByMonth,
    month: state.month,
  };
};

const mapDispatch = (dispatch) => ({
  fetchVillagers: (month) => dispatch(fetchVillagersByMonth(month)),
});

export default connect(mapState, mapDispatch)(SingleMonth);
