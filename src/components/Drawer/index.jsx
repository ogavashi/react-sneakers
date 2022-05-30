import axios from "axios";
import { useContext, useState } from "react";
import AppContext from "../../context";
import CartItem from "../CartItem";
import Info from "../Info";
import styles from "./Drawer.module.scss";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const Drawer = ({ cartItems = [], onClickClose, onClickRemove }) => {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [orderId, setOrderId] = useState(null);
  const [loading, setLoading] = useState(false);

  const { setCartItems } = useContext(AppContext);

  const confirmOrder = async () => {
    try {
      setLoading(true);
      const { data } = await axios.post("https://628fb764dc47852365459095.mockapi.io/orders", {
        items: cartItems,
      });
      setOrderId(data.id);
      setIsConfirmed(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        await axios.delete(`https://628fb764dc47852365459095.mockapi.io/cart/${cartItems[i].id}`);
        await delay(1000);
      }
    } catch (error) {
      alert(error);
    }
    setLoading(false);
  };

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
          <div className="d-flex flex-column flex">
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
              <button disabled={loading} className="greenButton" onClick={confirmOrder}>
                Confirm your order <img src="img/arrow.svg" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isConfirmed ? "Thanks, your order is confirmed" : "Cart is empty"}
            description={
              isConfirmed
                ? `Order №${orderId} is passed to delivery service`
                : "Add at least one pair to make order"
            }
            image={isConfirmed ? "img/complete-order.jpg" : "img/empty-cart.jpg"}
          />
        )}
      </div>
    </div>
  );
};

export default Drawer;
