import React from "react";

const ProductPreview = props => {
  if (!props.selectedProduct) {
    return <div>loading...</div>;
  }
  return (
    <div>
      <div key={props.selectedProduct.id}>
        <h2>
          <i>{props.selectedProduct.category}</i> >>{" "}
          {props.selectedProduct.name}
        </h2>

        <img src={props.selectedProduct.image} style={{ width: "200px" }} />
        <p>${props.selectedProduct.price}</p>
        <p>{props.selectedProduct.description}</p>

        <form onSubmit={props.handleSubmit}>
          <label>
            Quantity
            <input
              style={{ width: "50px" }}
              type="number"
              name="quantity"
              value={props.state.quantity}
              onChange={props.handleChange}
              min="1"
            />
          </label>
          <button type="submit" className="cart">
            Add to Cart
          </button>
          {props.state.addedtoCart[1] && (
            <h3>{props.state.addedtoCart[0]} added to cart!</h3>
          )}
        </form>
      </div>
    </div>
  );
};

export default ProductPreview;
