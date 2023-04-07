import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ carts, children, deleteOrderedCart }) => {
  // console.log(carts);
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const cart of carts) {
    // cart.quantity = cart.quantity || 1;
    total += cart.price * cart.quantity;
    totalShipping += cart.shipping * cart.quantity;
    quantity += cart.quantity;
  }
  const tax = (total * 7) / 100;
  return (
    <div className="mt-24 h-80">
      <h1 className="text-2xl text-center font-semibold">Order Summary</h1>
      <div className="mt-12 text-xl space-y-2">
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge: ${totalShipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h4 className="font-bold text-2xl">
          Grand Total: ${(total + totalShipping + tax).toFixed(2)}
        </h4>
      </div>
      <button
        className="w-full rounded-lg bg-red-500 py-3 text-left px-4 flex justify-between items-center mt-16 text-white"
        onClick={deleteOrderedCart}
      >
        <p>Clear Cart</p>
        <FontAwesomeIcon
          icon={faTrashAlt}
          className="text-xl hover:text-gray-600"
        />
      </button>
      {children}
    </div>
  );
};

export default Cart;
