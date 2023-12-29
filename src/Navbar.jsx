import { useState } from "react";
import logo from "/public/img/Numedica.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="title">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Numedica</h1>
      </div>

      <div className="links">
        <ul>
          <li className="beranda">
            <Link to="/">Beranda</Link>
          </li>
          <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
            <a href="#" className="dropbtn menu">
              Statistika
            </a>
            {showDropdown && (
              <div className="dropdown-content">
                <Link to="/article-r-studio-list">R</Link>
                <Link to="/article-spss">SPSS</Link>
              </div>
            )}
          </li>
          <li>
            <Link to="/article-kedokteran-list" className="menu">
              Kedokteran
            </Link>
          </li>
          <li>
            <Link to="/article-pemprograman-list" className="menu">
              Pemprograman
            </Link>
          </li>
          <li>
            <a href="#" className="menu">
              Data Sciense
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
