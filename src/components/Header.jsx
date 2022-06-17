import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/argentBankLogo.png"
import { FaUserCircle } from "react-icons/fa";
import { logOut } from "../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";

function Header () {
  let loggedIn = useSelector((state) => state.user.loggedIn)
  let user = useSelector((state) => state.user.currentUser)
  let dispatch = useDispatch()
  console.log("user");
  console.log(user);
  console.log("is logged ?");
  console.log(loggedIn);

  return (
    <header className="header">
        <nav className="main-nav navbar navbar-expand-lg navbar-light d-flex justify-content-between">
            <Link to="/"> <img className="main-nav-logo-image header-logo" src={logo} alt="Logo Argent Bank" /> </Link>
            <div className="header-links">
              {
                loggedIn ?
                (
                  <div className="main-nav-links">
                    <Link className="main-nav-item" to="/profile"> <FaUserCircle className="header-signin-logo"/> {user.firstName} </Link>
                    <Link className="main-nav-item" to="/" onClick={dispatch(logOut)}> Sign out </Link>
                  </div>
                )
                :
                (
                  <Link className="main-nav-item" to="/login"> <span className="header-signin d-flex align-items-center "> <FaUserCircle className="header-signin-logo"/>Sign In </span> </Link>
                )
              }
            </div>
        </nav>
    </header>
  );
}

export default Header;