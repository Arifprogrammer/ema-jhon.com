import React from "react";

const Cart = ({ carts }) => {
  return (
    <div className="mt-24 h-80">
      <h1 className="text-2xl text-center font-semibold">Order Summary</h1>
      <div className="mt-12 text-xl">
        <p>Selected Items: {carts.length}</p>
      </div>
    </div>
  );
};

export default Cart;
