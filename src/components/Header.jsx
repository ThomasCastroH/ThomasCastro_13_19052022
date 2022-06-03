import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/argentBankLogo.png"
import { FaUserCircle } from "react-icons/fa";

function Header () {
  return (
    <header className="header">
        <nav className="main-nav navbar navbar-expand-lg navbar-light d-flex justify-content-between">
            <Link to="/"> <img className="main-nav-logo-image header-logo" src={logo} alt="Logo Argent Bank" /> </Link>
            <div className="header-links">
                <Link className="main-nav-item" to="/login"> <span className="header-signin d-flex align-items-center "> <FaUserCircle className="header-signin-logo"/>Sign In </span> </Link>
            </div>
        </nav>
    </header>
  );
}

export default Header;