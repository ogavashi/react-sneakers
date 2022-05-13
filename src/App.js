import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr = [
  {
    title: "Nike Blazzer Mid Suede",
    price: "2999",
    imageUrl: "/img/sneakers/1.jpg",
  },
  {
    title: "Nike Air Max 270",
    price: "3999",
    imageUrl: "/img/sneakers/2.jpg",
  },
  {
    title: "Nike Blazzer Mid Suede",
    price: "2999",
    imageUrl: "/img/sneakers/3.jpg",
  },
  {
    title: "Puma X Aka Boku Future Rider",
    price: "1999",
    imageUrl: "/img/sneakers/4.jpg",
  },
];

function App() {
  return (
    <div className="wrapper clear">
      <Drawer />
      <Header />
      <div className="content p-40">
        <div className="d-flex align-center justify-between mb-40">
          <h1>All sneakers</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Search..." />
          </div>
        </div>
        <div className="d-flex">
          {arr.map((obj, index) => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
