import pinguekulitis1 from "/img/pinguekulitis1.jpeg";
import pinguekulitis2 from "/img/pinguekulitis2.jpeg";

const Pinguekulitis = () => {
  return (
    <div className="container-box">
      <div className="introduction">
        <h2 className="judul">Pinguekulitis</h2>
        <p>
          Definisi Pinguekula adalah kondisi umum pada konjungtiva yang biasanya terjadi pada bagian nasal dan konjungtiva bulbi anterior bagian temporal, akibat efek dari UV. Pinguekulitis terjadi ketika pinguekula mengalami peradangan,
          sehingga terjadi vaskularisasi yang meningkat, berwarna merah dan iritasi.
        </p>
        <p>
          Faktor resiko pinguekula adalah pajanan sinar matahari dalam jangka waktu yang lama, oleh karena itu pinguekula berhubungan erat dengan kebiasaan bekerja di luar ruangan serta penduduk di daerah khatulistiwa. Lesi awal terjadi
          karena radiasi matahari (UV) terus menerus, yang menyebabkan terjadinya degenerasi konjungtiva, berupa perubahan susunan kolagen serta jaringan elastin stroma konjungtiva.
        </p>

        <h3>Manifestasi Klinis</h3>
        <p>
          - Pinguekula berbentuk penebalan yang meninggi dan barwarna putih hingga kuning, yang tumbuh di bagian horizontal konjungtiva bulbi di area fisura palpebral, yang dapat menginvasi limbus. Pinguekula lebih keruh dari konjungtiva
          normal, dengan deposit lemak (Gambar 1)
        </p>
        <img src={pinguekulitis2} alt="pinguekulitis 1" />
        <p style={{ textAlign: "center", margin: "0", fontWeight: "bold" }}>Gambar 1 Pinguekula yang terletak dibagian konjungtiva nasal</p>
        <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://images.app.goo.gl/dwBepDLRLN692P9Q8</p>
        <p>- Lebih sering terjadi pada kedua mata, dan lebih sering ditemukan di daerah nasal dibandingkan temporal.</p>
        <p>
          - Pemeriksaan histopatologi ditemukan ciri khas pinguekula yaitu adanya degenerasi jaringan kolagen dengan hialinisasi stroma konjungtiva, penumpukan serat elastic basofilik, deposisi granular, dan tidak adanya keterlibatan
          kornea.
        </p>

        <h3>Klasifikasi Derajat Pinguekula</h3>
        <img src={pinguekulitis1} alt="pinguekulitis 2" />
        <p style={{ textAlign: "center", margin: "0", fontWeight: "bold" }}>Gambar 2</p>
        <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://images.app.goo.gl/qLtzQc8u6SQDtiv37</p>
        <ul>
          <li>Derajat 0 : Tidak terdapat pinguekula</li>
          <li>Derajat 1 : Mild atau moderate pinguekula. Putih kekuningan, rata atau sedikit elevasi dengan ukuran lesi berdiameter kurang dari 5mm</li>
          <li>Derajat 2 : Severe pinguekula, nampak sangat tervaskularisasi dan lesi yang elevasi yang berdiameter lebih dari 5mm</li>
        </ul>

        <h3>Tatalaksana</h3>
        <ul>
          <li>Definitif : Bedah eksisi, untuk alasan kosmetik atau apabila ukuran lesi besar sehingga menyebabkan iritasi yang bermakna</li>
          <li>Medikamentosa : Steroid lemah topical, pada pinguekulitis</li>
          <li>Edukasi : Hindari pajanan terhadap UV</li>
        </ul>
      </div>
    </div>
  );
};

export default Pinguekulitis;
