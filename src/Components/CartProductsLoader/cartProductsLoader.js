import { getShoppingCart } from "../../../resources/utilities/fakedb";

const loadData = async () => {
  const res = await fetch("products.json");
  const data = await res.json();
  const dataOfLocalStorage = getShoppingCart();
  const savedCart = [];
  for (const id in dataOfLocalStorage) {
    const matchedCart = data.find((cart) => cart.id === id);
    const quantity = dataOfLocalStorage[id];
    matchedCart.quantity = quantity;
    savedCart.push(matchedCart);
  }
  return savedCart;
};

export default loadData;
