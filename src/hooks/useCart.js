import { useContext } from "react";
import AppContext from "../context";

const useCart = () => {
  const { cartItems, setCartItems } = useContext(AppContext);

  const totalSum = cartItems.reduce((sum, item) => sum + item.price, 0);

  const tax = ((totalSum / 100) * 5).toPrecision(5);

  return { cartItems, setCartItems, totalSum, tax };
};

export default useCart;
