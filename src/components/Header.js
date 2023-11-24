import { useState } from "react";
import Logo from "../assets/img/Food villa.png";
import { Link } from "react-router-dom";
import useOnline from "../uttilites/useOnline";

const Title = () => (
  <a href="/">
    <img className="logo" src={Logo} alt="Logo"></img>
  </a>
);

const Header = () => {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const isOnline = useOnline();
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>Cart</li>
        </ul>
      </div>
      <h1>{isOnline ? "Online" : "Offline"}</h1>
      {isLoggedIn ? (
        <button
          onClick={() => {
            setisLoggedIn(false);
          }}
        >
          Logout
        </button>
      ) : (
        <button
          onClick={() => {
            setisLoggedIn(true);
          }}
        >
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
