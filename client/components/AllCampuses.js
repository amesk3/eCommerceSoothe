import React, { Component } from "react";

class AllCampuses extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "", address: "" };
  }
  componentDidMount() {
    this.props.getAllCampuses();
  }

  render() {
    return;
  }
}
