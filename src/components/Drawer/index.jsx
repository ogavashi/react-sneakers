import styles from "./Drawer.module.scss";

const Drawer = () => {
  return (
    <div>
      <div style={{ display: "none" }} className={styles.overlay}>
        <div className={styles.drawer}>
          <h2 className="d-flex justify-between mb-30">
            Cart <img className="cu-p removeBtn" src="img/btn-remove.svg" alt="Remove" />
          </h2>
          <div className={styles.items}>
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneakers/1.jpg)" }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Nike Blazzer Mid Suede</p>
                <b>2999 грн.</b>
              </div>
              <img className="removeBtn" src="img/btn-remove.svg" alt="Remove" />
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneakers/2.jpg)" }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Nike Blazzer Mid Suede</p>
                <b>2999 грн.</b>
              </div>
              <img className="removeBtn" src="img/btn-remove.svg" alt="Remove" />
            </div>
            <div className="cartItem d-flex align-center mb-20">
              <div
                style={{ backgroundImage: "url(/img/sneakers/3.jpg)" }}
                className="cartItemImg"
              ></div>
              <div className="mr-20 flex">
                <p className="mb-5">Nike Blazzer Mid Suede</p>
                <b>2999 грн.</b>
              </div>
              <img className="removeBtn" src="img/btn-remove.svg" alt="Remove" />
            </div>
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
      </div>
    </div>
  );
};

export default Drawer;
