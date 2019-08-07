import React, { Component } from "react";
import { connect } from "react-redux";
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
      <div>
        {this.props.cart.map(item => (
          <div key={item.id}>
            <p>Name of Product: {item.product.name}</p>
            <p>Quantity Selected: {item.quantity}</p>
            <p>Price per Product: ${item.product.price}</p>
            <br />
          </div>
        ))}
        <div>
          <h2>
            Total Amount Due : $
            {this.props.cart.reduce((total, item) => {
              total += item.quantity * parseFloat(item.product.price);
              return total;
            }, 0)}
          </h2>
        </div>

        <h2>Payment and Billing Information</h2>
        <form onSubmit={this.handleSubmit}>
          <br />
          Shipping Address :
          <input
            name="shippingAddress"
            type="text"
            value={this.state.shippingAddress}
            onChange={this.handleChange}
            required={true}
          />
          <br />
          Billing Address :
          <input
            name="billingAddress"
            type="text"
            value={this.state.billingAddress}
            onChange={this.handleChange}
            required={true}
          />
          <br />
          <button type="submit" className="checkout">
            Submit
          </button>
          {this.state.noItems && <h1>Cart is empty!</h1>}
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
