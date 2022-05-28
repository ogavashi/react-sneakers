import React, { useEffect, useState } from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import axios from "axios";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Favourites from "./pages/Favourites";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favouriteItems, setFavouriteItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    axios
      .get("https://628fb764dc47852365459095.mockapi.io/sneakers")
      .then((response) => setItems(response.data));

    axios
      .get("https://628fb764dc47852365459095.mockapi.io/cart")
      .then((response) => setCartItems(response.data));

    axios
      .get("https://628fb764dc47852365459095.mockapi.io/favourites")
      .then((response) => setFavouriteItems(response.data));
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const { data } = await axios.post("https://628fb764dc47852365459095.mockapi.io/cart", obj);
      setCartItems((prev) => [...prev, data]);
    } catch (error) {}
    alert("Failed to add to cart");
  };

  const onAddToFavourite = async (obj) => {
    try {
      if (favouriteItems.find((fav) => fav.id === obj.id)) {
        axios.delete(`https://628fb764dc47852365459095.mockapi.io/favourites/${obj.id}`);
        setFavouriteItems((prev) => prev.filter((item) => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://628fb764dc47852365459095.mockapi.io/favourites",
          obj
        );
        setFavouriteItems((prev) => [...prev, data]);
      }
    } catch (error) {
      alert("Failde to add to favorites ");
    }
  };

  const onRemoveItem = (id) => {
    axios.delete(`https://628fb764dc47852365459095.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(id)));
  };

  const onChangeInput = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="wrapper clear">
      {showCart && (
        <Drawer
          onClickClose={() => setShowCart(false)}
          cartItems={cartItems}
          onClickRemove={onRemoveItem}
        />
      )}
      <Header onClickCart={() => setShowCart(true)} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              items={items}
              inputValue={inputValue}
              setInputValue={setInputValue}
              onChangeInput={onChangeInput}
              onAddToFavourite={onAddToFavourite}
              onAddToCart={onAddToCart}
            />
          }
        />
        <Route
          path="/favourites"
          element={<Favourites favourites={favouriteItems} onAddToFavourite={onAddToFavourite} />}
        />
      </Routes>
    </div>
  );
}

export default App;
