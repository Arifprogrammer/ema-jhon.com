import React from "react";

const Cart = ({ carts }) => {
  console.log(carts);
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const cart of carts) {
    total += cart.price;
    totalShipping += cart.shipping;
    quantity += cart.quantity;
  }
  const tax = (total * 7) / 100;
  return (
    <div className="mt-24 h-80">
      <h1 className="text-2xl text-center font-semibold">Order Summary</h1>
      <div className="mt-12 text-xl space-y-2">
        <p>Selected Items: {quantity > 0 ? quantity : carts.length}</p>
        <p>Total Price: ${total}</p>
        <p>Total Shipping Charge: ${totalShipping}</p>
        <p>Tax: ${tax.toFixed(2)}</p>
        <h4 className="font-bold text-2xl">
          Grand Total: ${(total + totalShipping + tax).toFixed(2)}
        </h4>
      </div>
    </div>
  );
};

export default Cart;
