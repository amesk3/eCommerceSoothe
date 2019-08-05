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
    let group = [];
    for (let i = 0; i < this.props.products.length; i++) {
      let count = 0;
      let newArr = [];
      while (count < 4) {
        newArr.push(this.props.products[i]);
        count++;
      }
      count = 0;
      group.push(newArr);
      newArr = [];
    }

    return (
      <div>
        <h2 id="categoryTitle">Our {this.props.category}</h2>

        <div className="container-fluid">
          {/* <div className="row"> */}

          {group.map(itemGroup => (
            <div className="row">
              {itemGroup.map(product => (
                // <div class="dom-product-tile c-product-tile">
                //   <div class="urban-modal">
                <div class="col-sm-3">
                  <img className="card-img-top " src={product.image} />
                  <h5 class="title">
                    <Link
                      to={`/${this.props.category}/${product.id}`}
                      className="buttonProduct"
                    >
                      <span>{product.name} </span>
                    </Link>
                  </h5>
                  <h5>${product.price} </h5>
                </div>
              ))}
            </div>
          ))}
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
