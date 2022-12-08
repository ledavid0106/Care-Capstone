import React from "react";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import "./NavBar.css";

const Navbar = () => {
  const { logoutUser, user } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <div className="navbar bg-dark sticky-top">
      <ul>
        <li className="navbar-brand mr-auto mt-2 mt-lg-0">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <b>Care Capstone</b>
          </Link>
        </li>
        <li className="">
          {user ? (
            <button onClick={logoutUser}>Logout</button>
          ) : (
            <button onClick={() => navigate("/login")}>Login</button>
          )}
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
