import React from "react";
// import logo from "./path_to_your_logo.png"; // Ganti path_to_your_logo.png dengan path gambar logo Anda

const Footer = () => {
  return (
    <footer>
      <div className="top-section">
        <div className="logo">{/* <img src={logo} alt="Logo" /> */}</div>
        <div className="numedica-text">
          <p>Numedica</p>
          <p>Dukung kami dengan memberikan donasi ke Nomor ShopeePay 081524190409</p>
        </div>
      </div>
      <div className="bottom-section">
        <p>&copy; {new Date().getFullYear()} Numedica</p>
      </div>
    </footer>
  );
};

export default Footer;
