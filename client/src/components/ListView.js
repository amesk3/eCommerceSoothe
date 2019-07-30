import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../store/productsReducer";
import "../App.css";

export class ListView extends Component {
  componentDidMount() {
    console.log("hitting did mount");
    this.props.fetchProducts(this.props.category);
  }

  componentDidUpdate(prevProps) {
    console.log("hitting did update");
    if (prevProps.category !== this.props.category) {
      this.props.fetchProducts(this.props.category);
    }
  }

  render() {
    if (!this.props.products) {
      return (
        <div>
          Loading
          <img src="https://d2jq2hx2dbkw6t.cloudfront.net/184/loading-645268_640.jpg" />
        </div>
      );
    }

    return (
      <div>
        <div class="container-fluid">
          <h2 id="categoryTitle">Our {this.props.category}</h2>
        </div>

        <div class="card-row">
          <div class="card-deck">
            {this.props.products.map(product => (
              <div class="dom-product-tile c-product-tile">
                <div class="urban-modal">
                  <div class="col-md">
                    <img className="card-img-top " src={product.image} />
                    <h5 class="card-title">
                      <Link
                        to={`/${this.props.category}/${product.id}`}
                        className="buttonProduct"
                      >
                        <span>{product.name} </span>
                      </Link>
                    </h5>
                    <h5>${product.price} </h5>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.productsReducer.products
});

const mapDispatchToProps = dispatch => {
  return {
    fetchProducts: category => dispatch(fetchProducts(category))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListView);
