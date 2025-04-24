import "./App.css";
import { Route, Routes, useLocation } from "react-router";
import Home from "./pages/Home";
import { useLayoutEffect } from "react";
import Navbar from "./components/Navbar";

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};

function App() {
  return (
    <>
      <Wrapper>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Wrapper>
    </>
  );
}

export default App;
