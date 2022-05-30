import React from "react";
import Card from "../components/Card";
import EmptyPage from "../components/EmptyPage";
import AppContext from "../context";

const Favourites = () => {
  const { favouriteItems, onAddToFavourite } = React.useContext(AppContext);

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My Favourites</h1>
      </div>
      {favouriteItems.length > 0 ? (
        <div className="d-flex flex-wrap">
          {favouriteItems.map((item, index) => (
            <Card key={index} onAddFavourite={onAddToFavourite} item={item} favourite={true} />
          ))}
        </div>
      ) : (
        <EmptyPage />
      )}
    </div>
  );
};

export default Favourites;
