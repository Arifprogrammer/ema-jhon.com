import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Card = ({ product, getSpecificCard }) => {
  const { id, name, price, img, seller, ratings } = product;
  return (
    <div className="w-96 relative text-gray-800">
      <div className="card bg-gray-400 shadow-slate-300 h-[39rem]">
        <figure className="px-6 pt-6">
          <img src={img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="px-6 py-4">
          <h2 className="card-title">{name}</h2>
          <h3 className="text-xl mt-3">Price: ${price}</h3>
          <p className="mt-9">Manufacturer: {seller}</p>
          <p>Ratings {ratings}</p>
        </div>
        <div className="card-actions">
          <button
            className="btn btn-primary w-full rounded-t-none absolute bottom-0 flex gap-2"
            onClick={() => getSpecificCard(product)}
          >
            Add to Cart
            <FontAwesomeIcon icon={faShoppingCart} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
