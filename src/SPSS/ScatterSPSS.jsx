import scatter1 from "/img/scatter1.png";
import scatter2 from "/img/scatter2.png";
import scatter3 from "/img/scatter3.png";

const ScatterSPSS = () => {
  return (
    <div className="container-box">
      <h2 className="judul">Scatter Plot | SPSS</h2>

      <div className="content">
        <div className="introduction">
          <h4>Pengertian Scatter Plot</h4>
          <p>
            Scatter Plot adalah jenis grafik yang digunakan untuk memvisualisasikan hubungan antara dua variabel numerik dalam bentuk titik-titik yang tersebar di dalam bidang. Setiap titik mewakili sepasang nilai dari dua variabel yang
            berbeda. Tujuan utamanya untuk menunjukkan pola atau hubungan antara dua variabel.
          </p>
          <h4>Tujuan Scatter Plot</h4>
          <ul>
            <li>Scatter Plot membantu dalam memvisualisasikan hubungan atau korelasi antara dua variabel. Ini dapat membantu dalam menentukan apakah ada hubungan antar keduanya.</li>
            <li>Scatter Plot dapat digunakan untuk melihat apakah ada pola tertentu dalam distribusi titik-titik, seperti pola linear,pola non-linear, atau ketiadaan pola.</li>
          </ul>
          <h4>Pola Scatter Plot</h4>
          <p>
            <span>- Korelasi Positif</span> Jika titik-titik cenderung bergerak dari kiri bawah ke kanan atas, maka ada kemungkinan terdapat korelasi positif antara kedua variabel.
          </p>
          <img src={scatter1} alt="image scatter 1" />
          <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src: https://learn.nural.id/course/statistics/regresi-linier/scatterplot </p>
          <p>
            <span>- Korelasi Negatif</span> Jika titik-titik cenderung bergerak dari kiri atas ke kanan bawah, maka ada kemungkinan terdapat korelasi negatif antara kedua variabel.
          </p>
          <img src={scatter2} alt="image scatter 2" />
          <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src: https://learn.nural.id/course/statistics/regresi-linier/scatterplot </p>
          <p>
            <span>- Tidak Ada Korelasi</span> Jika titik-titik tersebar acak di seluruh plot tanpa pola khusus, ini menunjukkan bahwa kedua variabel tersebut mungkin tidak memiliki hubungan.
          </p>
          <img src={scatter3} alt="image scatter 3" />
          <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src: https://learn.nural.id/course/statistics/regresi-linier/scatterplot </p>
        </div>
      </div>
    </div>
  );
};

export default ScatterSPSS;
