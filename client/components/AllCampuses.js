import React, { Component } from "react";
import { getCampuses } from "../../store/Campus/thunks_for_Campus";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class AllCampuses extends Component {
  constructor(props) {
    super(props);
    this.state = { Name: "", Address: "" };
  }
  componentDidMount() {
    console.log("compdidMOUNTED");
    this.props.getCampuses();
  }

  render() {
    console.log("this is props!", this.props);
    return (
      <div>
        <ul className="all-campuses">
          {this.props.campuses.map(campus => (
            <ul key={campus.id}>
              <div>{campus.id}</div>
              <Link to={`/campuses/${campus.id}`}>{campus.name}</Link>
            </ul>
          ))}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log("hitting MAP TO PROPS");
  return {
    campuses: state.Campus_state.CampusList
  };
};

const mapDispatchToProps = dispatch => {
  console.log("dispatch to props");
  return {
    getCampuses: () => dispatch(getCampuses())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllCampuses);
