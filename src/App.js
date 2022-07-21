import logo from './logo.svg';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route,Routes,Link } from "react-router-dom";
import Login from './components/Login';
import Register from './components/Register';
import Pizza from './components/Pizza';
import PizzaOrder from './components/PizzaOrder';
import BookOrder from './components/BookOrder';

function App() {
  return (
    <Router>
      <nav>
      </nav>
      <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/pizzamgmt" element={<Pizza/>}/>
      <Route path="/orderpizza" element={<PizzaOrder/>}/>
      <Route path="/BookOrder" element={<BookOrder/>}/>


      </Routes>
    </Router>
  );
}

export default App;
