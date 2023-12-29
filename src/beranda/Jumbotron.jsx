import homeimg from "/img/home.png";
import "../css/Jumbotron.css";
import git from "/img/github.png";
import ig from "/img/Instagram.png";

const Jumbotron = () => {
  return (
    <div className="grid-container">
      <div className="text-container">
        <h2>Belajar Online Mudah dan Menyenangkan</h2>
        <a href="#">Join Us!</a>
      </div>
      <div className="image-container">
        <img src={homeimg} alt="Belajar Online" />
      </div>

      <div className="support">
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <img src={ig} alt="Instagram" />
        </a>
        <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
          <img src={git} alt="GitHub" />
        </a>
      </div>
    </div>
  );
};

export default Jumbotron;
