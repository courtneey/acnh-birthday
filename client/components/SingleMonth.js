import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchVillagersByMonth } from "../redux/singleMonth";

class SingleMonth extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log("this props:", this.props);
    this.props.fetchVillagers("January");
  }

  render() {
    const { villagers } = this.props;
    return (
      <div>
        <h2>Villagers will go here:</h2>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    villagers: state.month,
  };
};

const mapDispatch = (dispatch) => ({
  fetchVillagers: (month) => dispatch(fetchVillagersByMonth(month)),
});

export default connect(mapState, mapDispatch)(SingleMonth);
