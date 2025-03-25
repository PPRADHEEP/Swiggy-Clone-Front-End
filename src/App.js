import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import Footer from "./components/Footer"; 
import PartnerWithUs from "./components/PartnerWithUs";
const App = () => {
  return (
    <div id="root">
      <div className="main-content">
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu/:id" element={<Menu />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/partner" element={<PartnerWithUs />} />
      </Routes>
    </Router>
    </div>
    <Footer>
        <Footer/>
    </Footer>
    </div>
  );
};


export default App;
