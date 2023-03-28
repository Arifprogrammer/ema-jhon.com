import React, { useEffect, useState } from "react";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);
  const getSpecificCard = (obj) => {
    setCarts([...carts, obj]);
  };
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("products.json");
      const data = await res.json();
      setProducts(data);
    };
    loadData();
  }, []);
  return (
    <main className="grid grid-cols-[4fr_1fr]">
      <div className="card-container flex justify-center row-span-full">
        <div className="grid grid-cols-3 gap-16 my-16">
          {products.map((product) => (
            <Card
              product={product}
              key={product.id}
              getSpecificCard={getSpecificCard}
            ></Card>
          ))}
        </div>
      </div>
      <aside className="px-8 bg-[#FFE0B3] text-gray-800 row-span-1 fixed right-0 left-[95rem] bottom-0 top-0 -z-10">
        <Cart carts={carts}></Cart>
      </aside>
    </main>
  );
};

export default Shop;
