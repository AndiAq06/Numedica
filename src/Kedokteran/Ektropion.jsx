import ektropion1 from "/img/ektropion1.jpeg";
import ektropion2 from "/img/ektropion2.jpeg";
import ektropion3 from "/img/ektropion3.jpeg";
import ektropion5 from "/img/ektropion5.jpeg";
import ektropion6 from "/img/ektropion6.jpeg";
import ektropion7 from "/img/ektropion7.jpeg";
import ektropion8 from "/img/ektropion8.jpeg";
import ektropion9 from "/img/ektropion9.jpeg";
import blefaritis1 from "/img/blefaritis1.jpeg";
import { Link } from "react-router-dom/cjs/react-router-dom";
import LinkClick from "../components/LinkClick";

const Ektropion = () => {
  const links = [
    {
      id: 1,
      title: " Glaukoma | Kedokteran",
      link: "/kedokteran/glaukoma",
    },
    {
      id: 2,
      title: "Blefaritis | Kedokteran",
      link: "/kedokteran/blefaritis",
    },
    {
      id: 3,
      title: "Entropion | Kedokteran",
      link: "/kedokteran/entropion",
    },
  ];
  return (
    <div className="container-box">
      <div className="introduction">
        <h2 className="judul">Ektropion</h2>
        <p>Ektropion adalah suatu keadaan berputarnya margo palpebra kea rah luar menjauhi bola mata, sehingga permukaan dalam kelopak mata dan kornea terekspos atau terpapar.</p>

        <p>Ektropion dapat disebabkan oleh beberapa hal,yaitu :</p>
        <ol>
          <li>Usia tua (Involusional)</li>
          <li>Parase N.VII (N.facialis)</li>
          <li>Sikatriks pada lamella anterior palpebral</li>
          <li>Kelainan Kongenital</li>
        </ol>
      </div>
      <hr />

      <div className="content">
        <ol>
          <li>
            <span>Ektropion Involusional</span>
          </li>
          <img src={ektropion1} />
          <p style={{ textAlign: "center", margin: "0", fontWeight: "bold" }}>Gambar 1</p>
          <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://images.app.goo.gl/mM2Fr2E8j58V6sGt9 </p>
          <p>Ektropion involusional dikaitkan dengan bertambahnya usia, terjadi kelemahan jaringan penyangga kelopak mata sehingga kelopak mata berputar kea rah luar menjauhi bola mata.</p>

          <li>
            <span>Ektropion Kausa Parase N.VII</span>
          </li>
          <img src={ektropion2} />
          <p style={{ textAlign: "center", margin: "0", fontWeight: "bold" }}>Gambar 2</p>
          <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://images.app.goo.gl/KvWcTq7SehkeUJYZ6 </p>
          <p>Ektropion kausa parase N.VII dapat disebabkan oleh Bell’ palsy, stroke, tumor serta pasca operasi intrakranial dan fasial.</p>

          <li>
            <span>Ektropion Kausa Sikatriks</span>
          </li>
          <img src={ektropion3} />
          <p style={{ textAlign: "center", margin: "0", fontWeight: "bold" }}>Gambar 3</p>
          <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://images.app.goo.gl/hwKVE1CVUJvicSLt8 </p>
          <p>
            Ektropion kausa sikatriks pada bagian lamella anterior palpebra (gambar 4), sikatriks menarik kelopak mata ke bawah dan margo palpebra berputar ke arah luar. Kondisi ini dapat disebabkan karena trauma, karsinoma kulit,
            dermatitis.
          </p>
          <img src={blefaritis1} />
          <p style={{ textAlign: "center", margin: "0", fontWeight: "bold" }}>Gambar 4</p>
          <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://images.app.goo.gl/Cydz3FB6ksBWzQM5A </p>

          <li>
            <span>Ektropion Kongenital : Sindrom Down</span>
          </li>
          <img src={ektropion5} />
          <p style={{ textAlign: "center", margin: "0", fontWeight: "bold" }}>Gambar 5</p>
          <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://images.app.goo.gl/1mggWAdD71GWEmeWA </p>
        </ol>

        <ul>
          <li>
            <span>Manifestasi Klinis</span>
          </li>
          <p>Akan ditemukan beberapa kondisi sebagai berikut:</p>
          <table>
            <thead>
              <tr>
                <th>Anamnesis</th>
                <th>Pemeriksaan Fisik</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <ul>
                    <li>Mata berair</li>
                    <li>Mata terasa nyeri</li>
                    <li>Mata terasa kering</li>
                    <li>Rasa seperti adanya benda asing di mata</li>
                  </ul>
                </td>
                <td>
                  <ul>
                    <li>Epifora</li>
                    <li>Margo palpebra yang berputar ke arah luar</li>
                    <li>Mata merah akibat iritasi pada konjungtiva tarsal dan konjungtiva bulbi yang tidak terlindungi</li>
                    <li>Pada tahap yang lebih lanjut dapat ditemukan hipertrofi konjungtiva, konjungtivitis kronik, keratitis exposure</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>

          <li>
            <span>Pemeriksaan Fisik</span>
          </li>
          <p>- Snap back test</p>
          <img src={ektropion6} />
          <p style={{ textAlign: "center", margin: "0", fontWeight: "bold" }}>Gambar 6</p>
          <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://images.app.goo.gl/cKbtJqQncvEkcqFJA</p>
          <p>Pemeriksaan dilakukan dengan cara menarik palpebral inferior menjauhi bola mata dan dilepaskan kembali. Normal adalah bila palpebral inferior segera kembali ke posisi normal.</p>

          <p>- Pinch test/distraction test</p>
          <img src={ektropion7} />
          <p style={{ textAlign: "center", margin: "0", fontWeight: "bold" }}>Gambar 7</p>
          <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://images.app.goo.gl/yiyvhM26v2qVckvw5A</p>
          <p>Pemeriksaan dilakukan dengan cara menarik palpebral inferior menjauhi bola mata, kemudian diukur jarak antara bola mata dan margo palpebra.</p>
          <p>Interpretasi: Normal : 5 mm; Minimal : 5-7 mm; Ringan : 8-9 mm; Sedang : 10-12 mm; Berat : &gt; 12 mm</p>

          <p>- Lateral distraction test (lateral canthal laxity test)</p>
          <img src={ektropion8} />
          <p style={{ textAlign: "center", margin: "0", fontWeight: "bold" }}>Gambar 8</p>
          <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://images.app.goo.gl/XvTcpCvXQwoPSrMz5</p>
          <p>
            Pemeriksaan dilakukan dengan cara menarik palpebral inferior kea rah medial. Dilihat perubahan yang terjadi pada kantus lateral. Normal kantus lateral berbentuk lancip; hasil positif atau laxity kantus lateral adalah bila kantus
            lateral berbentuk bulat (rounded).
          </p>

          <p>- Medial canthal laxity test</p>
          <img src={ektropion9} />
          <p style={{ textAlign: "center", margin: "0", fontWeight: "bold" }}>Gambar 9</p>
          <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://images.app.goo.gl/VmFjTYMgSg8JeTv96</p>
          <p>
            Pemeriksaan dilakukan dengan melihat perubahanposisi punctum inferior. Hasil normal adalah bila punctum terletak pada plika semilunaris dan akan tetap ditempatnya walaupun ditarik ke lateral. Laxity adalah bila punctum inferior
            berubah posisi bila ditarik ke lateral.
          </p>
        </ul>

        <ul>
          <li>
            <span>Tatalaksana</span>
          </li>
          <p>- Medikamentosa : Obat tetes mata yang bersifat lubrikasi (artificial tears) untuk mengatasi kekeringan.</p>
          <p>-Operasi : Teknik operasi bergantung dari penyebab ektropion.</p>
        </ul>
      </div>

      <LinkClick links={links} />
    </div>
  );
};

export default Ektropion;
