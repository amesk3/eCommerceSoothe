import React from "react";

const keygen = (function() {
  let i = 0;
  return () => {
    i++;
    return i;
  };
})();

const CartItems = props => {
  return (
    <div>
      {props.cart.length ? (
        props.cart.map(item => {
          return (
            <div key={keygen()}>
              <img src={item.product.image} style={{ width: "50px" }} />
              <br /> {item.product.name}
              <br /> Quantity: {item.quantity}
              <form>
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
