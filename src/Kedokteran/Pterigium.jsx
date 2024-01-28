import pterigium1 from "/img/pterigium1.jpeg";
import pterigium2 from "/img/pterigium2.jpeg";
import pterigium3 from "/img/pterigium3.jpeg";
import pterigium4 from "/img/pterigium4.jpeg";
import pterigium5 from "/img/pterigium5.jpeg";

const Pterigium = () => {
  return (
    <div className="container-box">
      <div className="introduction">
        <h2 className="judul">Pterigium</h2>
        <p>
          • Definisi Pterigium merupakan sebutan untuk kelainan klinis berupa jaringan fibrovaskular berbentuk segitiga pada limbus kornea. Asal kata pterigium adalah dari bahasa Yunani yaitu pterygos yang berarti “sayap”, sesuai dengan
          gambaran pterigium yang berbentuk atau menyerupai sayap.
        </p>
        <p>
          • Patofisiologi pterigium masih belum jelas, namun dikaitkan dengan adanya faktor resiko seperti pajanan kronik terhadap sinar matahari. Sehingga pterigium lebih banyak ditemukan dikawasan yang beriklim panas, kering, dan berdebu
          yang disebut sebagai “Pterigium belt” (Gambar 1). Meskipun belum jelas penyebabnya, namun sejumlah penelitian menyebutkan bahwa adanya proses degenerasi yang dipengaruhi oleh pajanan ultraviolet kronik diduga menjadi dasar
          penyebab terjadinya pterigium. Jaringan pterigium merupakan jaringan ikat fibroblast dan pembuluh darah yang berproliferasi dari lumbus kea rah kornea.
        </p>
        <img src={pterigium1} alt="pterigium 1" />
        <p style={{ textAlign: "center", margin: "0", fontWeight: "bold" }}>Gambar 1 (Pterigium Belt)</p>
        <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://images.app.goo.gl/YNs3iLRnyb7RACCR9</p>
      </div>

      <div className="content">
        <h3>Manifestasi Klinis</h3>
        <ul>
          <li>Mata merah berulang</li>
          <li>Rasa mengganjal</li>
          <li>Rasa berpasir dan perih</li>
          <li>Penglihatan tidak menurun, kecuali pterigium yang sudah menutupi sebagian besar pupil</li>
          <li>Pada pemeriksaan oftalmologik dapat ditemukan jaringan berwarna merah muda berbentuk segitiga yang tumbuh dengan dasar di limbus serta puncak segitiga di kornea. (Gambar 2)</li>
        </ul>

        <img src={pterigium2} alt="pterigium 2" />
        <p style={{ textAlign: "center", margin: "0", fontWeight: "bold" }}>Gambar 2 (Pterigium Belt)</p>
        <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://images.app.goo.gl/aiGzgfdejYfh18Et5</p>
        <p>Pterigium yang lebih sering ditemukan pada daerah fisura interpalpebral terutama di bagian nasal, yang diduga berkaitan dengan tingginya persentase pajanan sinar matahari pada bagian tersebut</p>
        <p>- Iritasi yang kronik menimbulkan tanda klinis berupa garis berwarna kecoklatan, yang merupakan deposit zat besi yang sering ditemukan di apeks pterigium yang dikenal sebagai stocker’s line (Gambar 3)</p>
        <img src={pterigium3} alt="pterigium 3" />
        <p style={{ textAlign: "center", margin: "0", fontWeight: "bold" }}>Gambar 3</p>
        <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://images.app.goo.gl/mTdcDxvkCbiYJ81w5</p>

        <h3>Klasifikasi Derajat Pterigium</h3>
        <img src={pterigium4} style={{ marginTop: "20px" }} alt="pterigium 4" />
        <p style={{ textAlign: "center", margin: "0", fontWeight: "bold" }}>Gambar 4</p>
        <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://images.app.goo.gl/hzqYBGq2EaR7iZdM8</p>
        <ul>
          <li>Derajat 0 : Tidak terdapat pterigium</li>
          <li>Derajat 1 : Pterigium translusens dan warnanya sama dengan konjungtiva, pembuluh darah episklera yang berada di bagian bawah pterigium tampak terlihat jelas, dilatasi yang minimal dari pembuluh darah</li>
          <li>
            Derajat 2 : Pterigium berawarna merah muda, pembuluh darah episklera yang berada di bagian bawah pterigium sudah terlihat lebih jelas dan masih dapat dibedakan dari jaringan pterigium itu sendiri, dilatasi pembuluh darah
            disertai dengan peningkatan densitas
          </li>
          <li>
            Derajat 3 : Pterigium berwarna merah, pembuluh darah episklera yang berada di bawah pterigum sulit dibedakan dari jaringan pterigium itu sendiri, pembuluh darah yang berkelok-kelok terlihat secara signifikan dan pembesaran
            pembuluh darah yang minimal
          </li>
          <li>Derajat 4 : Pterigium merah terang, menyebar dan lebih tebal, pembuluh darah episklera di bawah pterigium sudah sulit di identifikasi karena sudah kabur total, pembesaran pembuluh darah</li>
        </ul>
        <p>Terdapat juga klasifikasi yang lain berdasarkan perkembangan dari pterigium yaitu:Terdapat juga klasifikasi yang lain berdasarkan perkembangan dari pterigium yaitu:</p>
        <img src={pterigium5} style={{ marginTop: "20px" }} alt="pterigium 5" />
        <p style={{ textAlign: "center", margin: "0", fontWeight: "bold" }}>Gambar 5</p>
        <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://images.app.goo.gl/CCngFtarA9feT2nHA</p>
        <ul>
          <li>Derajat I : Pterigium terbatas pada limbus kornea</li>
          <li>Derajat II : Pterigium sudah melewati limbus dan belum mencapi pupil, tidak lebih dari 2 mm melewati kornea</li>
          <li>Derajat III : Pterigium sudah melebihi derajat II tetapi tidak melebihi pinggiran pupil mata dalam keadaan cahaya normal</li>
          <li>Derajat IV : Pterigium sudah melewati pupil sehingga mengganggu penglihatan</li>
        </ul>

        <h3>Tatalaksana</h3>
        <ul>
          <li>
            Terapi definitif : Bedah eksisi jaringan pterigium dengan penutupan sklera yang masih terbuka menggunakan <i>conjunctival autograft </i>atau <i>conjunctivolimbal autograft</i>
          </li>
          <li>Terapi medikamentosa : artificial tears, NSAID 4 kali sehari satu tetes dapat diberikan jika pterigium mengalami peradangan akibat iritasi lingkungan</li>
          <li>Edukasi : Mengurangi pajanan terhadap sinar matahari, dengan menggunakan alat pelindung seperti kacamata dengan filter terhadap UV, topi lebar, atau payung.</li>
        </ul>
      </div>
    </div>
  );
};

export default Pterigium;
