import { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const user = true;

  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="logo" className="logo-img" />
          <span>aseEstates</span>
        </Link>

        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Agents</Link>
      </div>

      <div className="right">
        {user ? (
          <div className="user">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />

            <span>Felix Olali</span>

            <Link to="/profile">
              <small>3</small>
              <span>Profile</span>
            </Link>
          </div>
        ) : (
          <>
            <Link to="/login">Sign In</Link>
            <Link to="/signup" className="sign-up">
              Sign Up
            </Link>
          </>
        )}

        <div className="menu-icon">
          <img
            src="/menu.png"
            alt="menu"
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>

        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Agents</Link>
          {user ? (
            <Link className="profile" to="/profile">
              <small>3</small>
              <span>Profile</span>
            </Link>
          ) : (
            <>
              <Link to="/">Sign In</Link>
              <Link to="/">Sign Up</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
