import React, { Component } from "react";
import { connect } from "react-redux";
import Submit from "./submit.js";
import {
  fetchCart,
  checkoutThunk,
  updateUserThunk
} from "../store/userReducer";

class Checkout extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shippingAddress: "",
      billingAddress: "",
      noItems: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }

  async handleSubmit(evt) {
    evt.preventDefault();
    if (this.props.cart[0]) {
      await this.props.checkoutThunk(this.props.user.id);
      this.props.updateUserThunk(this.state);
      this.props.history.push("/thanks");
    } else {
      this.setState({
        noItems: true
      });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if (this.props.user.id) {
      if (prevProps !== this.props) {
        if (!prevProps.cart[0] && !prevProps.user.id) {
          await this.props.fetchCart(this.props.user.orderId);
        }
      }
    }
  }

  async componentDidMount() {
    try {
      let localCart = JSON.parse(localStorage.getItem("cart"));
      if (localCart[0] && !this.props.user.id) {
        localStorage.setItem("redirect", "/cart");
        this.props.history.push("/login");
      } else {
        await this.props.fetchCart(this.props.user.orderId);
        await this.setState({ ...this.props.user });
      }
    } catch (error) {
      console.error("fetch did not work", error);
    }
  }

  render() {
    return (
      <div className="form-checkout">
        <h3>Your self care items for today:</h3>
        {this.props.cart.map(item => (
          <div key={item.id}>
            <p>Name of Product: {item.product.name}</p>
            <p>Quantity Selected: {item.quantity}</p>
            <p>Price per Product: ${item.product.price}</p>
            <br />
          </div>
        ))}
        <div>
          <h5>
            Total Amount Due : $
            {this.props.cart.reduce((total, item) => {
              total += item.quantity * parseFloat(item.product.price);
              return total;
            }, 0)}
          </h5>
        </div>

        <h4>Payment</h4>
        <form onSubmit={this.handleSubmit} className="form-group">
          {/* <label htmlFor="text"> Shipping Address :</label>
          <input
            name="shippingAddress"
            type="text"
            value={this.state.shippingAddress}
            onChange={this.handleChange}
            required={true}
          />
          <label htmlFor="text"> Billing Address :</label>
          <input
            name="billingAddress"
            type="text"
            value={this.state.billingAddress}
            onChange={this.handleChange}
            required={true}
          /> */}
          <Submit
            name={"Confirm purchase"}
            description={
              "This is only a test page, enter 4242 4242 4242 4242 for credit card"
            }
            amount={this.props.cart
              .map(el => el.price * el.quantity)
              .reduce((a, b) => a + b, 0)}
          />
          <br />

          {this.state.noItems && <h3>Cart is empty!</h3>}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user,
  cart: state.userReducer.cart
});

const mapDispatchToProps = dispatch => ({
  fetchCart: userId => dispatch(fetchCart(userId)),
  checkoutThunk: userId => dispatch(checkoutThunk(userId)),
  updateUserThunk: user => dispatch(updateUserThunk(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout);
