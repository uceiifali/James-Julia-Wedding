import "./App.css";
import Date from "./Components/Date";
import Friends from "./Components/Friends";
import Gallery from "./Components/Gallery";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";
import Story from "./Components/Story";
import { useState, useEffect } from "react";
import DotLoader from "react-spinners/DotLoader";
function App() {
  let [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="flex items-center justify-center absolute top-[45%] left-[45%] ">
          <DotLoader
            color="#E75E5E"
            loading={loading}
            size={120}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <>
          <NavBar />
          <Header />
          <Hero />
          <Date />
          <Friends />
          <Story />
          <Gallery />
        </>
      )}
    </div>
  );
}

export default App;
