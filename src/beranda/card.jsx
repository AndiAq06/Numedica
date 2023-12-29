import stethoscope from "./stethoscope.png";
import python from "./python.png";

const Card = () => {
  return (
    <div className="container">
      <h2 className="lecture">Lecture</h2>
      <p className="capt">Numedica memepunyai beberapa materi online yang disediakan</p>
      <div className="card-container">
        <div className="card">
          <h2>Matematika</h2>
          <img src={python} alt="stethoscope" /> {/* Menggunakan properti src */}
          <p>Kami menyediakan pembelajaran Matematika secara terstruktur yang dibahas secara konsep mendalam dan lebih mudah untuk dipahami</p>
        </div>

        <div className="card">
          <h2>Programming</h2>
          <img src={python} alt="stethoscope" /> {/* Menggunakan properti src */}
          <p>Kami menyediakan materi programming seperti HTML,CSS,Javascript,Python dan tentunya R-Studio</p>
        </div>

        <div className="card">
          <h2>Kedeokteran</h2>
          <img src={stethoscope} alt="stethoscope" /> {/* Menggunakan properti src */}
          <p>Kami menyediakan artikel seputar dunia kedokteran bagi siapa saja yang ingin belajar dan mengembangakan skill di dunia kedokteran</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
