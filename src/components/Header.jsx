const Header = ({ onClickCart }) => {
  return (
    <div>
      <header className="p-40 d-flex justify-between align-center">
        <div className="d-flex align-center">
          <img className="mr-15" width={40} height={40} src="/img/logo.png" alt="Logo" />
          <div>
            <h3 className="text-uppercase">React Sneakers</h3>
            <p className="opacity-5">Best sneakers shop</p>
          </div>
        </div>
        <ul className="d-flex">
          <li onClick={onClickCart} className="mr-30 cu-p">
            <img className="mr-15" width={18} height={18} src="/img/cart.svg" alt="Cart" />
            <span>6000 грн.</span>
          </li>
          <li>
            <img width={18} height={18} src="/img/user.svg" alt="User" />
          </li>
        </ul>
      </header>
    </div>
  );
};

export default Header;
