import blefaritis1 from "/img/blefaritis1.jpeg";
import blefaritis2 from "/img/blefaritis2.jpeg";
import blefaritis3 from "/img/blefaritis3.jpeg";
import blefaritis4 from "/img/blefaritis4.jpeg";
import blefaritis5 from "/img/blefaritis5.jpeg";
import blefaritis6 from "/img/blefaritis6.jpeg";

const Blefaritis = () => {
  return (
    <div className="container-box">
      <div className="introduction">
        <h2 className="judul">Blefaritis</h2>
        <ul>
          <li>
            <span>Definis:</span> Inflamasi kronis kelopak mata umumnya terjadi bilateral.
          </li>
          <li>Berdasarkan letak anatomi, Blefaritis dibagi menjadi dua yaitu:</li>
          <img className="img" src={blefaritis1} />
          <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://images.app.goo.gl/Cydz3FB6ksBWzQM5A </p>
          <ol>
            <li>Blefaritis Anterior, inflamasinya terjadi ditepi kelopak mata,kulit dan folikel bulu mata.</li>
            <li>Blefaritis Posterior, inflamasinya terjadi ditepi posterior kelopak sampai konjungtiva tarsal.</li>
          </ol>
        </ul>
      </div>
      <div className="content">
        <ol>
          <li>
            <span>Blefaritis Anterior, terdapat dua jenis yaitu:</span>
          </li>
          <p>
            <span>a. Blefaritis Stafilokokkal</span>
          </p>
          <img className="img" src={blefaritis2} />
          <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://images.app.goo.gl/uJCuzXZUeoY9DHEU8 </p>
          <p>
            Blefaritis stafilokokal/blefaritis ulcerative, terjadi di bagian pangkal bulu mata disebabkan oleh infeksi Staphylococcus aureus, Staphylococcus epidermidis atau Staphylococcus koagulase-negatif. Dinding sel bakteri tersebut
            memicu respons inflamasi berlebihan.
          </p>
          <p>
            <span>b. Blefaritis Seboroik </span>
          </p>
          <img className="img" src={blefaritis3} />
          <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://images.app.goo.gl/RvPzcV2JNwTxFDrn8</p>
          <p>Blefaritis seboroik sering merupakan bagian dari keadaan dermatitis seboroik generalisata yang diderita pasien. Dikaitkan dengan adanya koloni Pityrosporum ovale, namun masih belum jelas hubungan kausalitasnya.</p>

          <li>
            <span>Blefaritis Posterior </span>
          </li>
          <img className="img" src={blefaritis4} />
          <p style={{ fontStyle: "italic", textAlign: "center" }}>src:https://images.app.goo.gl/BaNrddWCKgaYjbm89</p>
          <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>Sekresi meibom seperti pasta gigi</p>
          <p>
            Blefaritis posterior merupakan inflamasi sekunder kelopak mata yang terjadi karena disfungsi atau gangguan pengeluaran secret kelenjar meibom (secret kelenjar meibom disebut meibom) dan kelenjar Zeis. Kolonisasi bakteri akan
            menghasilkan asam lemak bebas, yang dapat meningkatkan titik leleh kelenjar meibom, akibatnya kelenjar meibom akan mensekresikan secret yang lebih kental. Kondisi ini dapat menyebabkan sumbatan pada kelenjar meibom, sehingga
            sulit untuk mensekresikan sekretnya. Berkurangnya produksi dari kelenjar meibom dapat menurunkan kandungan fosfolipid yang berperan sebagai surfaktan di dalam tirai air mata (tear film), sehingga penguapan dan osmolaritas tirai
            air mata akan meningkat, tirai air mata menjadi tidak stabil, sehingga terjadi gesekan yang menyebabkan iritasi konjungtiva dan kornea, serta memudahkan kolonisasi dari Staphylococcus aureus.
            <img className="img" src={blefaritis5} />
            <p style={{ fontStyle: "italic", textAlign: "center" }}>src:https://images.app.goo.gl/eAau43BXS2qaEHuf8</p>
            <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>Penumpukan meibom tambak seperti tetesan minyak di orifisium kelenjar meibom</p>
          </p>

          <ul>
            <li>
              <span>Manifestasi Klinis Blefaritis Anterior dan Posterior</span>
            </li>
            <li>
              <span>Tatalaksana Blefaritis Anterior dan Posterior</span>
            </li>
            <table>
              <tr>
                <th>Terapi</th>
                <th>Blefaritis Anterior</th>
                <th>Blefaritis Posterior</th>
              </tr>
              <tr>
                <td>Non-Farmakologik</td>
                <td>
                  <p>Mengompres kelopak mata dengan air hangat selama 5-10 menit untuk melunakkan krusta dan mengencerkan meibom.</p>
                  <p>Kapas lidi yang dicelupkan dalam larutan shampoo bayi (diencerkan dalam air dengan perbandingan 1:1) untuk membersihkan krusta.</p>
                </td>
                <td>Mengompres kelopak mata dengan air hangat selama 5-10 menit untuk melunakkan krusta dan mengencerkan meibom, kemudian meibom yang menumpuk dikeluarkan dengan cara “memeras” kelopak mata kea rah tepi.</td>
              </tr>
              <tr>
                <td>Farmakologik</td>
                <td>
                  <p>Salep antibiotic untuk folikulitis akut (Kloramfenikol 1% tiap 1-3 jam, atau basitrasin 500 u/gram 1-4 kali sehari).</p>
                  <p>Pemberian air mata tambahan 4-8 kali sehari untuk mengurangi gejala mata kering.</p>
                  <p>Tetes mata steroid diberikan apabila terdapat konjungtivitis papiler atau keratitis marginalis (Fluorometolon 0,1% tiap 6 jam).</p>
                </td>
                <td>Antibiotik oral (doksisiklin 2×100 mg atau tetrasklin 4×250 mg. Apabila terdapat kontaindikasi terhadap antibiotic tersebut maka alternatifnya dapat diberikan eritromisin 4×500 mg).</td>
              </tr>
            </table>
          </ul>
        </ol>
      </div>

      <div className="related-post">
        <h2>Related Post</h2>
        <div className="article-list">
          <ul>
            <li>
              <a href="/glaukoma">Glaukoma | Kedokteran</a>
            </li>
            <li>
              <a href="/entropion">Entropion | Kedokteran</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Blefaritis;
