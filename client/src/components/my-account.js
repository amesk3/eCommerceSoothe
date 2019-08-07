import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchOrderHistory } from "../store/userReducer";

let num = 0;

class MyAccount extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidUpdate(prevProps, prevState) {
    while (num < 1) {
      num++;
      await this.props.fetchOrderHistory(this.props.user.id);
    }
  }

  async componentDidMount() {
    try {
      let localCart = JSON.parse(localStorage.getItem("cart"));
      if (localCart && !this.props.user.id) {
        localStorage.setItem("redirect", this.props.match.path);
        this.props.history.push("/login");
      }
      await this.props.fetchOrderHistory(this.props.user.id);
    } catch (error) {
      console.log("fetch did not work", error);
    }
  }

  render() {
    return (
      <div>
        <h3>Welcome {this.props.user.firstName}!</h3>
        <br />
        Profile Information:
        <p>
          <br />
          Name: {this.props.user.firstName} {this.props.user.lastName}
          <br />
          Email: {this.props.user.email}
          <br />
          Billing Address: {this.props.user.billingAddress}
          <br />
          Shipping Address: {this.props.user.shippingAddress}
        </p>
        <div>
          <h3>My Order History: </h3>
          <hr />
          {this.props.orders ? (
            this.props.orders.map(order => {
              let total = 0;
              return (
                <div key={order.id} style={{ marginLeft: "10px" }}>
                  <p>Order ID: {order.id} </p>
                  <p>Items ordered:</p>
                  {order.products.map(product => {
                    total += Number(product.price);
                    return (
                      <div key={product.id}>
                        <p>
                          {" "}
                          {product.name} - Quantity:{" "}
                          {product.product_order.quantity} - Price:{" "}
                          {product.price}{" "}
                        </p>
                      </div>
                    );
                  })}
                  <h4>Total: {total}</h4>
                </div>
              );
            })
          ) : (
            <p>No orders...</p>
          )}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  user: state.userReducer.user,
  orders: state.userReducer.orders
});
const mapDispatchToProps = dispatch => ({
  fetchOrderHistory: userId => dispatch(fetchOrderHistory(userId))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyAccount);
