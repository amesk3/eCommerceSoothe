import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { auth } from "../store";

/**
 * COMPONENT
 */
class AuthForm extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const formName = evt.target.name;
    const email = evt.target.email.value;
    const password = evt.target.password.value;

    const firstName = evt.target.firstName.value;
    const lastName = evt.target.lastName.value;
    const billingAddress = evt.target.billingAddress.value;
    const shippingAddress = evt.target.shippingAddress.value;
    this.props.auth(
      email,
      password,
      formName,
      firstName,
      lastName,
      billingAddress,
      shippingAddress
    );
    this.props.history.push("/login");
  }

  render() {
    const { name, displayName, error } = this.props;
    return (
      <div className="signUp">
        <h2>SIGN UP FOR A ACCOUNT WITH US</h2>
        <form onSubmit={this.handleSubmit} name={name}>
          <div className="case">
            <label htmlFor="firstName">
              <small>First Name</small>
            </label>
            <input name="firstName" type="text" value={this.props.firstName} />
          </div>
          <br />

          <div className="case">
            <label htmlFor="lastName">
              <small>Last Name</small>
            </label>
            <input name="lastName" type="text" />
          </div>
          <br />
          <div className="case">
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input name="email" type="text" />
          </div>

          <br />
          <div className="case">
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input name="password" type="password" />
          </div>
          <br />
          <div className="case">
            <label htmlFor="shippingAddress">
              <small>Shipping Address</small>
            </label>
            <input name="shippingAddress" type="text" />
          </div>
          <br />
          <div className="case">
            <label htmlFor="billingAddress">
              <small>Billing Address</small>
            </label>
            <input name="billingAddress" type="text" />
          </div>
          <br />
          <div>
            <button className="clickHere" type="submit">
              {displayName}
            </button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
        <a className="google" href="/auth/google">
          {displayName} with Google
        </a>
      </div>
    );
  }
}

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
// const mapLogin = state => {
//   return {
//     name: 'login',
//     displayName: 'Login',
//     error: state.userReducer.error
//   }
// }

const mapSignup = state => {
  return {
    name: "signup",
    displayName: "Sign Up",
    error: state.userReducer.error
  };
};

const mapDispatch = dispatch => {
  return {
    auth: (e, p, fn, fN, lN, bA, sA) => dispatch(auth(e, p, fn, fN, lN, bA, sA))
  };
};

// export const Login = connect(mapLogin, mapDispatch)(AuthForm)
export const Signup = connect(
  mapSignup,
  mapDispatch
)(AuthForm);

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
};
