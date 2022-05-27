import CartItem from "../CartItem";
import styles from "./Drawer.module.scss";

const Drawer = ({ cartItems = [], onClickClose, onClickRemove }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Cart
          <img
            onClick={onClickClose}
            className="cu-p removeBtn"
            src="img/btn-remove.svg"
            alt="Remove"
          />
        </h2>
        {cartItems.length > 0 ? (
          <div>
            <div className={styles.items}>
              {cartItems.map((item, index) => (
                <CartItem item={item} onClickRemove={onClickRemove} key={item.id} />
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Total: </span>
                  <div></div>
                  <b> 9000 грн. </b>
                </li>
                <li>
                  <span>Tax 5%:</span>
                  <div></div>
                  <b>450 грн.</b>
                </li>
              </ul>
              <button className="greenButton">
                Confirm your order <img src="img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <div className="cartEmpty d-flex align-center justify-center flex-column flex">
            <img className="mb-20" width="120px" src="/img/empty-cart.jpg" alt="Empty" />
            <h2>Cart is empty</h2>
            <p className="opacity-6">Add at least one pair to make order</p>
            <button onClick={onClickClose} className="greenButton">
              <img src="img/arrow.svg" alt="Arrow" />
              Go back
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Drawer;
