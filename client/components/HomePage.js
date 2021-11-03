import React, { Component } from "react";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      month: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      month: event.target.value,
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.history.push("/villagers");
  }

  render() {
    const { month } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div className="button-div">
        <h2>Select a month:</h2>

        <form id="select-month" onSubmit={handleSubmit}>
          <select value={month} onChange={handleChange}>
            <option value="January">January</option>
            <option value="February">February</option>
            <option value="March">March</option>
            <option value="April">April</option>
            <option value="May">May</option>
            <option value="June">June</option>
            <option value="July">July</option>
            <option value="August">August</option>
            <option value="September">September</option>
            <option value="October">October</option>
            <option value="November">November</option>
            <option value="December">December</option>
          </select>

          <div>
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default HomePage;
