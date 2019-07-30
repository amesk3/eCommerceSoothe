import React from "react";

const ProductPreview = props => {
  if (!props.selectedProduct) {
    return <div>loading...</div>;
  }
  return (
    <div classname="product-preview-div">
      <div key={props.selectedProduct.id}>
        <h5>
          <i>{props.selectedProduct.category}</i> > {props.selectedProduct.name}
        </h5>
        <div class="container-product-preview">
          <div class="col">
            <div class="row">
              <img src={props.selectedProduct.image} style={{ width: "50%" }} />
            </div>
            <div class="row">
              <h5>Price: ${props.selectedProduct.price}</h5>
              <h5>{props.selectedProduct.description}</h5>
              <form onSubmit={props.handleSubmit}>
                <h5>
                  Quantity
                  <input
                    style={{ width: "20%" }}
                    type="number"
                    name="quantity"
                    value={props.state.quantity}
                    onChange={props.handleChange}
                    min="1"
                  />
                </h5>

                <button type="submit" className="btn btn-success">
                  Add to Cart
                </button>
                {props.state.addedtoCart[1] && (
                  <h5>{props.state.addedtoCart[0]} added to cart!</h5>
                )}
              </form>
            </div>
            <div className="row">
              <h5>Product Description</h5>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
