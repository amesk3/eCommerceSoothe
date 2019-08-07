import React from "react";

const CartItems = props => {
  return (
    <div>
      {props.cart.length ? (
        props.cart.map((item, keygen) => {
          return (
            <div key={keygen}>
              <form className="form-cart-item">
                <img src={item.product.image} style={{ width: "100px" }} />
                <br /> Name: {item.product.name}
                <br /> Quantity: {item.quantity}
                <label>
                  CHANGE QUANTITY
                  <input
                    type="number"
                    min="0"
                    value={item.quantity}
                    onChange={evt =>
                      props.handleQuantity(item.id, item.productId, evt)
                    }
                  />
                </label>
              </form>
              <button
                type="button"
                onClick={
                  item.id
                    ? () => props.handleDelete(item.id)
                    : () => props.handleDelete(item.productId)
                }
              >
                DELETE ITEM
              </button>
              <hr />
            </div>
          );
        })
      ) : (
        <h1 className="noItem">Your shopping cart is empty.</h1>
      )}
    </div>
  );
};

export default CartItems;
