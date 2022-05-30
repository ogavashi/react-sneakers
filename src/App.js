import React, { useEffect, useState } from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import axios from "axios";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Favourites from "./pages/Favourites";
import AppContext from "./context";
import useModal from "./hooks/useModal";
import Orders from "./pages/Orders";

function App() {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [favouriteItems, setFavouriteItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useModal();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [favouritesResponse, cartResponse, itemsResponse] = await Promise.all([
          axios.get("https://628fb764dc47852365459095.mockapi.io/favourites"),
          axios.get("https://628fb764dc47852365459095.mockapi.io/cart"),
          axios.get("https://628fb764dc47852365459095.mockapi.io/sneakers"),
        ]);
        setIsLoading(false);
        setFavouriteItems(favouritesResponse.data);
        setCartItems(cartResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert(error.message);
      }
    };
    fetchData();
  }, []);

  const onAddToCart = async (obj) => {
    try {
      const findItem = cartItems.find((item) => Number(item.parentId) === Number(obj.id));
      if (findItem) {
        setCartItems((prev) => prev.filter((item) => Number(item.parentId) !== Number(obj.id)));
        await axios.delete(`https://628fb764dc47852365459095.mockapi.io/cart/${findItem.id}`);
      } else {
        setCartItems((prev) => [...prev, obj]);
        const { data } = await axios.post("https://628fb764dc47852365459095.mockapi.io/cart", obj);
        setCartItems((prev) =>
          prev.map((item) => {
            if (item.parentId === data.parentId) {
              return {
                ...item,
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("Failed to add to cart", error);
    }
  };

  const onAddToFavourite = async (obj) => {
    try {
      const findItem = favouriteItems.find((fav) => Number(fav.id) === Number(obj.id));
      if (findItem) {
        axios.delete(`https://628fb764dc47852365459095.mockapi.io/favourites/${obj.id}`);
        setFavouriteItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
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

  const isItemAdded = (id) => {
    return cartItems.some((obj) => Number(obj.parentId) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        favouriteItems,
        onAddToFavourite,
        setShow,
        cartItems,
        setCartItems,
        isItemAdded,
      }}
    >
      <div className="wrapper clear">
        <Drawer
          onClickClose={() => setShow(false)}
          cartItems={cartItems}
          onClickRemove={onRemoveItem}
          opened={show}
        />

        <Header onClickCart={() => setShow(true)} />
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
                cartItems={cartItems}
                isLoading={isLoading}
              />
            }
          />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
