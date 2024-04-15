import { useContext, useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { currentUser } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="left">
        <Link to="/" className="logo">
          <img src="/logo.png" alt="logo" className="logo-img" />
          <span>aseEstates</span>
        </Link>

        <Link to="/">Home</Link>
        <Link to="/properties">Properties</Link>
        <Link to="/">Contact</Link>
        <Link to="/">Agents</Link>
      </div>

      <div className="right">
        {currentUser ? (
          <div className="user">
            <img src={currentUser?.avatar || "/noavatar.jpg"} alt="avatar" />

            <span>{currentUser?.username}</span>

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
          {currentUser ? (
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
