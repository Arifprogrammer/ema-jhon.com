import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData, useNavigate } from "react-router-dom";
import OrderedProduct from "../OrderedProduct/OrderedProduct";
import {
  deleteShoppingCart,
  removeFromDb,
} from "../../../resources/utilities/fakedb";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCreditCard } from "@fortawesome/free-solid-svg-icons";

const Order = () => {
  const savedCart = useLoaderData();
  const [carts, setCarts] = useState(savedCart);
  const navigate = useNavigate();

  const deleteCart = (product) => {
    removeFromDb(product.id);
    const dltFromSavedCart = carts.filter((cart) => cart.id !== product.id);
    setCarts(dltFromSavedCart);
  };
  const deleteOrderedCart = () => {
    setCarts([]);
    deleteShoppingCart();
  };
  return (
    <div>
      <main className="grid grid-cols-[4fr_1fr]">
        <div className="card-container flex flex-col items-center gap-6 min-h-[calc(100vh-80px)] py-16">
          {carts.map((cart) => (
            <OrderedProduct key={cart.id} cart={cart} deleteCart={deleteCart} />
          ))}
        </div>
        <aside className="px-8 bg-[#FFE0B3] text-gray-800 sticky top-0 h-screen">
          <Cart carts={carts} deleteOrderedCart={deleteOrderedCart}>
            <button
              className="w-full rounded-lg bg-orange-400 py-3 text-left px-4 flex justify-between items-center mt-4 text-white"
              onClick={() => navigate("/checkout")}
            >
              <p>Proceed Checkout</p>
              <FontAwesomeIcon
                icon={faCreditCard}
                className="text-xl hover:text-gray-600"
              />
            </button>
          </Cart>
        </aside>
      </main>
    </div>
  );
};

export default Order;
