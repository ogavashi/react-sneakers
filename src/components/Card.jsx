const Card = () => {
  return (
    <div>
      <div className="card">
        <div className="favourite">
          <img src="/img/unliked.svg" alt="Unliked" />
        </div>
        <img width={133} height={112} src="/img/sneakers/1.jpg" alt="Sneakers" />
        <h5>Nike Blazzer Mid Suede</h5>
        <div className="d-flex justify-between align-center">
          <div className="d-flex flex-column">
            <span>Price:</span>
            <b>2999 грн.</b>
          </div>
          <button className="button">
            <img width={11} height={11} src="/img/plus.svg" alt="Add"></img>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
