import React, { useContext, useState } from "react";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";

import styles from "./Card.module.scss";

const Card = ({ item, onAddCart, onAddFavourite, isLoading = false, favourite = false }) => {
  const [isFavourite, setIsFavourite] = useState(favourite);

  const { isItemAdded } = useContext(AppContext);

  const onClickPlus = () => {
    onAddCart({ ...item, parentId: item.id });
  };

  const onClickFavourite = () => {
    onAddFavourite({ ...item, parentId: item.id });
    setIsFavourite(!isFavourite);
  };

  return (
    <div className={styles.card}>
      {isLoading ? (
        <ContentLoader
          speed={2}
          width={155}
          height={250}
          viewBox="0 0 155 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="1" y="0" rx="10" ry="10" width="155" height="155" />
          <rect x="0" y="167" rx="5" ry="5" width="155" height="15" />
          <rect x="0" y="187" rx="5" ry="5" width="100" height="15" />
          <rect x="1" y="234" rx="5" ry="5" width="80" height="25" />
          <rect x="124" y="230" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <div>
          {onAddFavourite && (
            <div className={styles.favourite}>
              <img
                onClick={onClickFavourite}
                src={isFavourite ? "/img/liked.svg" : "/img/unliked.svg"}
                alt="Like"
              />
            </div>
          )}
          <img width={133} height={112} src={item.imageUrl} alt="Sneakers" />
          <h5>{item.title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Price:</span>
              <b>{item.price} грн.</b>
            </div>
            {onAddCart && (
              <img
                className={styles.plus}
                src={isItemAdded(item.id) ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
                alt="Add"
                onClick={onClickPlus}
              ></img>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
