import React, { useEffect, useState } from "react";
import { addToDb, getShoppingCart } from "../../../resources/utilities/fakedb";
import Card from "../Card/Card";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [carts, setCarts] = useState([]);

  const getSpecificCard = (obj) => {
    let newCarts = [];
    const matchProduct = carts.find((pd) => pd.id === obj.id);
    if (!matchProduct) {
      obj.quantity = 1;
      newCarts = [...carts, obj];
    } else {
      matchProduct.quantity += 1;
      const remainingProduct = carts.filter((pd) => pd.id !== obj.id);
      newCarts = [...remainingProduct, matchProduct];
    }
    setCarts(newCarts);
    addToDb(obj.id);
  };
  useEffect(() => {
    const loadData = async () => {
      const res = await fetch("products.json");
      const data = await res.json();
      setProducts(data);
    };
    loadData();
  }, []);
  useEffect(() => {
    const getLocalStorage = getShoppingCart();
    const newStoredProduct = [];
    for (const id in getLocalStorage) {
      const matchProduct = products.find((product) => product.id === id);
      if (matchProduct) {
        const quantity = getLocalStorage[id];
        matchProduct.quantity = quantity;
        newStoredProduct.push(matchProduct);
      }
    }
    setCarts(newStoredProduct);
  }, [products]);
  return (
    <main className="grid grid-cols-[4fr_1fr]">
      <div className="card-container flex justify-center">
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
      <aside className="px-8 bg-[#FFE0B3] text-gray-800 sticky top-0 h-screen">
        <Cart carts={carts}></Cart>
      </aside>
    </main>
  );
};

export default Shop;
