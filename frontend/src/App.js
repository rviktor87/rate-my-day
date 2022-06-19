import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.scss';
import Menu from "./components/Menu";
import Home from "./pages/Home";
import About from "./pages/About";
import {Routes, Route} from "react-router-dom";
import {Container} from "react-bootstrap";
import Register from "./pages/Register";

function App() {
  return (
    <>
      <Menu/>
      <Container>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="register" element={<Register/>}/>
        </Routes>
      </Container>
    </>

  );
}

export default App;
