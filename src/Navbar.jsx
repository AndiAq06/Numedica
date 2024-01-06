// import { useState } from "react";
// import logo from "/img/NuMedica.png";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [showDropdown, setShowDropdown] = useState(false);
//   const toggleDropdown = () => {
//     setShowDropdown(!showDropdown);
//   };

//   return (
//     <nav className="navbar">
//       <div className="title">
//         <img src={logo} alt="Logo" className="logo" />
//         <h1>Numedica</h1>
//       </div>

//       <div className={`menu-toggle ${showDropdown ? "open" : ""}`} onClick={toggleDropdown}>
//         <div className="hamburger"></div>
//       </div>

//       <div className={`links ${showDropdown ? "open" : ""}`}>
//         <ul>
//           <li className="beranda">
//             <Link to="/">Beranda</Link>
//           </li>
//           <li className="dropdown" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
//             <a href="#" className="dropbtn menu">
//               Statistika
//             </a>
//             {showDropdown && (
//               <div className="dropdown-content">
//                 <Link to="/article-r-studio-list">R</Link>
//                 <Link to="/article-spss">SPSS</Link>
//               </div>
//             )}
//           </li>
//           <li>
//             <Link to="/article-kedokteran-list" className="menu">
//               Kedokteran
//             </Link>
//           </li>
//           <li>
//             <Link to="/article-pemprograman-list" className="menu">
//               Pemprograman
//             </Link>
//           </li>
//           <li>
//             <a href="#" className="menu">
//               Data Sciense
//             </a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import logo from "/img/NuMedica.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="navbar">
      <div className="title">
        <div className={`menu-toggle ${showMenu ? "open" : ""}`} onClick={toggleMenu}>
          <div className="hamburger">☰</div>
        </div>
        <div className={`links ${showMenu ? "open" : ""}`}>
          {" "}
          <ul>
            <li>
              <Link to="/" className="menu">
                Beranda
              </Link>
            </li>
            <li className={`dropdown menu ${showDropdown ? "open" : ""}`} onClick={toggleDropdown}>
              <a href="#" className="dropbtn menu">
                Statistika
              </a>
              {showDropdown && (
                <div className="dropdown-content">
                  <Link to="/r/article-r-studio-list">R</Link>
                  <Link to="/spss/article-spss">SPSS</Link>
                  <Link to="/statistika/article-statistika">Statistika</Link>
                </div>
              )}
            </li>
            <li>
              <Link to="/kedokteran/article-kedokteran-list" className="menu">
                Kedokteran
              </Link>
            </li>
            <li>
              <Link to="/pemrograman/article-pemprograman-list" className="menu">
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
      </div>

      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
        <h1 style={{ cursor: "pointer" }}>Numedica</h1>
      </div>
    </nav>
  );
};

export default Navbar;
