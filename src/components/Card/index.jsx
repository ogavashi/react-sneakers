import styles from "./Card.module.scss";
import React from "react";

const Card = ({ item, onAddCart }) => {
  const [isAdded, setisAdded] = React.useState(false);

  const onClickPlus = () => {
    setisAdded(!isAdded);
    onAddCart(item);
  };

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.favourite}>
          <img src="/img/unliked.svg" alt="Unliked" />
        </div>
        <img width={133} height={112} src={item.imageUrl} alt="Sneakers" />
        <h5>{item.title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Price:</span>
            <b>{item.price} грн.</b>
          </div>
          <img
            className={styles.plus}
            src={isAdded ? "/img/btn-checked.svg" : "/img/btn-plus.svg"}
            alt="Add"
            onClick={onClickPlus}
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Card;
