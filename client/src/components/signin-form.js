import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { auth } from "../store";

/**
 * COMPONENT
 */
class AuthForm extends Component {
  render() {
    const { name, displayName, handleSubmit, error } = this.props;
    return (
      <div className="signIn">
        <h2>PLEASE SIGN IN</h2>

        <form
          onSubmit={handleSubmit}
          name={name}
          className="form-white-background"
        >
          <div className="form-group">
            <label htmlFor="emailInput">Email</label>
            <input
              name="email"
              type="email"
              className="form-control"
              id="emailInput"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="passwordInput">Password</label>
            <input
              name="password"
              type="password"
              className="form-control"
              id="passwordInput"
              placeholder="Password"
            />
          </div>
          <br />

          <div>
            <button className="btn btn-primary" type="submit">
              {displayName}
            </button>
          </div>
          <a className="google" href="/auth/google">
            {displayName} with Google
          </a>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
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
const mapLogin = state => {
  return {
    name: "login",
    displayName: "Login",
    error: state.userReducer.error
  };
};

// const mapSignup = state => {
//   return {
//     name: 'signup',
//     displayName: 'Sign Up',
//     error: state.userReducer.error
//   }
// }

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      dispatch(auth(email, password, formName));
    }
  };
};

export const Login = connect(
  mapLogin,
  mapDispatch
)(AuthForm);
// export const Signup = connect(mapSignup, mapDispatch)(AuthForm)

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object
};
