import React, { useEffect, useState } from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("https://628fb764dc47852365459095.mockapi.io/sneakers");
      const items = await response.json();
      setItems(items);
    }
    fetchData();
  }, []);

  const onAddCart = (obj) => {
    setCartItems((prev) => [...prev, obj]);
  };

  return (
    <div className="wrapper clear">
      {showCart && <Drawer onClickClose={() => setShowCart(false)} cartItems={cartItems} />}
      <Header onClickCart={() => setShowCart(true)} />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map((item, index) => (
            <Card item={item} key={index} onAddCart={onAddCart} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
