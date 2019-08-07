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
        <div className="row">
          <div className="col-sm">
            <h4>Profile Information:</h4>
            <h6>
              <br />
              Name:{" "}
              <p>
                {this.props.user.firstName} {this.props.user.lastName}
              </p>
              <br />
              Email: <p>{this.props.user.email}</p>
              <br />
              Billing Address: <p>{this.props.user.billingAddress}</p>
              <br />
              Shipping Address: <p>{this.props.user.shippingAddress}</p>
            </h6>
            <div />
          </div>
          <div className="col-sm">
            <h4>My Order History: </h4>
            <hr />

            {this.props.orders ? (
              this.props.orders.map(order => {
                let total = 0;
                return (
                  <div key={order.id}>
                    <h6>Order ID: {order.id} </h6>
                    <h5>Items ordered:</h5>
                    <div class="card w-75">
                      {order.products.map((product, index) => {
                        total += Number(product.price);
                        return (
                          <div class="card-body">
                            <div key={product.id}>
                              <h6 class="card-title">Item {index + 1}</h6>
                              <img
                                src={product.image}
                                style={{ maxWidth: "200px" }}
                              />
                              <p class="card-text">Name: {product.name} </p>
                              <p class="card-text">
                                Quantity: {product.product_order.quantity}
                              </p>
                              <p class="card-text">Price:$ {product.price} </p>
                            </div>
                          </div>
                        );
                      })}
                      <h4>Total: ${total}</h4>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No orders...</p>
            )}
          </div>
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
