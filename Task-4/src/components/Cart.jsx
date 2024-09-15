
import React from 'react';

const Cart = ({ cart, removeFromCart, increaseQuantity, calculateTotal }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.length > 0 ? (
        <div>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.title} />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <button onClick={() => increaseQuantity(item.id)}>Increase Quantity</button>
                <button onClick={() => removeFromCart(item.id)}>Decrease Quantity</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <p>Total: ${calculateTotal()}</p>
          </div>
        </div>
      ) : (
        <p>Your cart is empty</p>
      )}
    </div>
  );
};

export default Cart;
