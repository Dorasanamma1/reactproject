import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Veg from "./Veg";
import Nonveg from "./Nonveg";
import { useSelector } from "react-redux";
import Cart from "./cart";
import Cooldrinks from "./cooldrinks";

function App() {
  // Get cart items from Redux
  const cartitems = useSelector((state) => state.cart);

  // Total quantity in cart
  const cartcount = cartitems.reduce((total, item) => total + item.quantity, 0);

  return (
    <BrowserRouter>
      {/* NAVBAR */}
      <nav className="navbar">
        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-btn active-link" : "nav-btn"
          }
          to="/"
        >
          Home
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-btn active-link" : "nav-btn"
          }
          to="/veg"
        >
          Veg
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-btn active-link" : "nav-btn"
          }
          to="/nonveg"
        >
          Nonveg
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-btn active-link" : "nav-btn"
          }
          to="/cooldrinks"
        >
          Cooldrinks
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            isActive ? "nav-btn active-link" : "nav-btn"
          }
          to="/cart"
        >
          Cart ({cartcount})
        </NavLink>
      </nav>

      <div className="page-container">
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/veg" element={<Veg />} />
          <Route path="/nonveg" element={<Nonveg />} />
          <Route path="/cooldrinks" element={<Cooldrinks/>} />

          {/* Add Cart Page Route (create Cart.jsx file) */}
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
