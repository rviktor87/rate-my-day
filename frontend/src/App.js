import './App.scss';
import Menu from "./components/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>

  );
}

export default App;
