import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProducts } from "../store/productsReducer";

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
    console.log("really render?");
    if (!this.props.products) {
      return (
        <div>
          Loading
          <img src="https://d2jq2hx2dbkw6t.cloudfront.net/184/loading-645268_640.jpg" />
        </div>
      );
    }
    console.log("hitting");
    return (
      <div>
        <h2 id="categoryTitle">Our {this.props.category}</h2>

        {this.props.products.map(product => (
          <div className="one_category" key={product.id}>
            <img className="imageProduct" src={product.image} />
            <p className="nameProduct">{product.name}</p>
            <p className="priceProduct">${product.price} </p>
            <Link
              to={`/${this.props.category}/${product.id}`}
              className="buttonProduct"
            >
              Ordering
            </Link>
          </div>
        ))}
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
