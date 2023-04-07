import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

const OrderedProduct = ({ cart, deleteCart }) => {
  const { img, price, quantity, name } = cart;
  return (
    <div className="border-[#95A0A7] border-[1px] min-w-[35.5rem] h-28 rounded-lg flex items-center gap-4 p-2 pr-6">
      <img src={img} alt="" className="w-24 h-24 rounded-lg" />
      <div className="details flex-1">
        <h1>{name}</h1>
        <p>Price: ${price}</p>
        <p>Quantity: {quantity}</p>
      </div>
      <button
        className="rounded-full h-14 w-14 bg-slate-200"
        onClick={() => deleteCart(cart)}
      >
        <FontAwesomeIcon
          icon={faTrashAlt}
          className="text-xl text-red-600 hover:text-gray-600"
        />
      </button>
    </div>
  );
};

export default OrderedProduct;
