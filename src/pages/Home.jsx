import Card from "../components/Card";

const Home = ({
  items,
  inputValue,
  onChangeInput,
  setInputValue,
  onAddToCart,
  onAddToFavourite,
  cartItems,
  isLoading,
}) => {
  const renderItems = () => {
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(inputValue.toLowerCase())
    );
    return (isLoading ? [...Array(8)] : filteredItems).map((item, index) => (
      <Card
        item={item}
        key={index}
        onAddCart={onAddToCart}
        onAddFavourite={onAddToFavourite}
        inCart={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
        isLoading={isLoading}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex align-center justify-between mb-40">
        {inputValue ? <h1>Results for "{inputValue}"</h1> : <h1>All sneakers</h1>}
        <div className="search-block d-flex">
          <img src="/img/search.svg" alt="Search" />
          <input onChange={onChangeInput} placeholder="Search..." value={inputValue} />
          {inputValue && (
            <img
              className="clear cu-p"
              src="img/btn-remove.svg"
              alt="Clear"
              onClick={() => setInputValue("")}
            />
          )}
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
};

export default Home;
