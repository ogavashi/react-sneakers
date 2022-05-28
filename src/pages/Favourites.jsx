import React from "react";
import Card from "../components/Card";

const Favourites = ({ favourites, onAddToFavourite }) => {
  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        <h1>My Favourites</h1>
      </div>

      <div className="d-flex flex-wrap">
        {favourites.map((item) => (
          <Card key={item.id} setFavourite={true} onAddFavourite={onAddToFavourite} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Favourites;
