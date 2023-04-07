import React, { useState } from "react";
import Cart from "../Cart/Cart";
import { useLoaderData } from "react-router-dom";

const Order = () => {
  const carts = useLoaderData();
  console.log(carts);
  return (
    <div className="">
      <main className="grid grid-cols-[4fr_1fr]">
        <div className="card-container flex justify-center items-center min-h-[calc(100vh-80px)] border-red-500 border-2">
          <div className="gap-16 my-16 border-red-500 border-2">
            <h1>Hello world</h1>
            <h1>{}</h1>
          </div>
        </div>
        <aside className="px-8 bg-[#FFE0B3] text-gray-800 sticky top-0">
          <Cart carts={carts}></Cart>
        </aside>
      </main>
    </div>
  );
};

export default Order;
