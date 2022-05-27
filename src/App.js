import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import axios from "axios";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    axios
      .get("https://628fb764dc47852365459095.mockapi.io/sneakers")
      .then((response) => setItems(response.data));

    axios
      .get("https://628fb764dc47852365459095.mockapi.io/cart")
      .then((response) => setCartItems(response.data));
  }, []);

  const onAddToCart = (obj) => {
    axios.post("https://628fb764dc47852365459095.mockapi.io/cart", obj);
    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    console.log(id); //fix later
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
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          {inputValue ? <h1>Results for "{inputValue}"</h1> : <h1>All sneakers</h1>}
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input onChange={onChangeInput} placeholder="Search..." value={inputValue} />
            {inputValue && (
              <img
                className="clear cu-p"
                src="img/btn-remove.svg"
                alt="Clear"
                onClick={() => setInputValue("")}
              />
            )}
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items
            .filter((item) => item.title.toLowerCase().includes(inputValue.toLowerCase()))
            .map((item, index) => (
              <Card item={item} key={index} onAddCart={onAddToCart} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
