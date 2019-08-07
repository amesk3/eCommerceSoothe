import React, { Component } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  withRouter,
  Route,
  Switch
} from "react-router-dom";
import PropTypes from "prop-types";

import {
  About,
  ListView,
  SingleProduct,
  Homepage,
  Login,
  Signup,
  Cart,
  Thanks,
  UserHome,
  MyAccount,
  Checkout
} from "./components";

import { me } from "./store";

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();

    if (!localStorage.cart) {
      localStorage.setItem("cart", JSON.stringify([]));
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route exact path="/cart" component={Cart} />
        <Route path="/thanks" component={Thanks} />
        <Route path="/myaccount" component={MyAccount} />
        <Route path="/checkout" component={Checkout} />

        <Route
          exact
          path="/chocolate"
          render={() => <ListView category="chocolate" />}
        />
        <Route path="/chocolate/:id" component={SingleProduct} />
        <Route
          exact
          path="/candles"
          render={() => <ListView category="candles" />}
        />
        <Route path="/candles/:id" component={SingleProduct} />

        <Route
          exact
          path="/crystals"
          render={() => <ListView category="crystals" />}
        />
        <Route path="/pastries/:id" component={SingleProduct} />

        {isLoggedIn && (
          <Switch>
            <Route path="/home" component={UserHome} />
          </Switch>
        )}
      </Switch>
    );
  }
}

/**
 * CONTAINER
 */
const mapStateToProps = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    isLoggedIn: !!state.userReducer.user.id,
    userId: state.userReducer.user.id
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
    }
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Routes)
);

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
