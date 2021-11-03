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
    console.log("this props:", this.props);
    return <div>Villager and tops will go here</div>;
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
