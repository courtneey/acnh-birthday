import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchTopsByColor } from "../redux/topsByColor";

class SingleVillager extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // fetch single villager with their preferred tops
  }

  render() {
    console.log("single villager props:", this.props);
    return <div>Villager and tops will go here</div>;
  }
}

const mapDispatch = (dispatch) => {
  return {
    fetchTopsByColor: (color_one, color_two) =>
      dispatch(fetchTopsByColor(color_one, color_two)),
  };
};

export default connect(null, mapDispatch)(SingleVillager);
