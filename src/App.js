import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Routes,Link } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Pizza from './components/Pizza';
import PizzaOrder from './components/PizzaOrder';
import BookOrder from './components/BookOrder';
//import Header from './layout/Header';
import Nav from './layout/Nav';

function App() {
  return (
    <Router>
      <nav>
        <Nav/>
      </nav>
      <Routes>
    
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/pizzamgmt" element={<Pizza/>}/>
      <Route path="/vieworder" element={<PizzaOrder/>}/>
      <Route path="/BookOrder" element={<BookOrder/>}/>


      </Routes>
    </Router>
  );
}

export default App;
