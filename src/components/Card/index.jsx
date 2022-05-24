import styles from "./Card.module.scss";

const Card = ({ title, price, imageUrl }) => {
  const onClickButton = () => {
    alert(title);
  };

  return (
    <div>
      <div className={styles.card}>
        <div className={styles.favourite}>
          <img src="/img/unliked.svg" alt="Unliked" />
        </div>
        <img width={133} height={112} src={imageUrl} alt="Sneakers" />
        <h5>{title}</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Price:</span>
            <b>{price} грн.</b>
          </div>
          <button className="button" onClick={() => onClickButton()}>
            <img width={11} height={11} src="/img/plus.svg" alt="Add"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
