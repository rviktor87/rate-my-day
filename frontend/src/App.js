import './App.scss';
import Menu from "./components/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import {Routes, Route} from "react-router-dom";
import {Container} from "react-bootstrap";

function App() {
  return (
    <>
      <Menu/>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
        </Routes>
      </Container>
    </>

  );
}

export default App;
