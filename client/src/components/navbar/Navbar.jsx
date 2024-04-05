import { useState } from "react";
import { Link } from "react-router-dom";

import "./navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState(false);

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
        <Link to="/login">Sign In</Link>
        <Link to="/signup" className="sign-up">
          Sign Ip
        </Link>

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
          <Link to="/">Sign In</Link>
          <Link to="/">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
