import React, { Component } from "react";

class HomePage extends Component {
  render() {
    return (
      <div className="button-div">
        <h2>Select a month:</h2>
        <p>
          <select>
            <option>January</option>
            <option>February</option>
            <option>March</option>
            <option>April</option>
            <option>May</option>
            <option>June</option>
            <option>July</option>
            <option>August</option>
            <option>September</option>
            <option>October</option>
            <option>November</option>
            <option>December</option>
          </select>
        </p>
      </div>
    );
  }
}

export default HomePage;
