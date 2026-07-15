import "./App.css";
import Nav from "./components/nav";
import Carousel from "./components/carousel/MarketCarousel";

function App() {
  return (
    <>
      <Nav />
      <Carousel />

      <h1 className="text-1 font-bold font-mono text-neutral-100">
        Blank Page for now
      </h1>
      <p className="text-3 font-bold font-mono text-neutral-100">Text test</p>
      <p className="text-6 font-bold font-mono text-neutral-100">Text test</p>
    </>
  );
}

export default App;
