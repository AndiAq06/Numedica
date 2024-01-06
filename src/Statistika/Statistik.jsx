import statistik1 from "/img/statistik1.jpg";
import statistik2 from "/img/statistik2.jpg";

const Statistik = () => {
  return (
    <div className="container-box">
      <h2 className="judul">Apa itu Statistika dan Statistik ??</h2>
      <img src={statistik1} alt="statistik vector" />
      <div className="content">
        <div className="introduction">
          <p>
            Dalam pembahasan ilmu data, seringkali terjadi kebingungan antara penggunaan istilah "statistik" dan "statistika". Kedua istilah ini sering digunakan secara beergantian, tetapi sesungguhnya memiliki perbedaan dalam konteks
            penggunaannya.
          </p>
          <h3>Statistik vs Statistika</h3>
          <p>
            <span>Statistik</span> merujuk pada data numerik yang terkumpul dari berbagai sumber, seperti survei,eksperimen, atau observasi. Ini mencakup kumpulan angka,fakta, atau informasi yang dianalisis untuk mendapatkan wawasan atau
            makna tertentu. Misalnya, "Statistik menunjukkan bahwa 70% responden setuju dengan pernyataan tersebut".
          </p>
          <p>
            <span>Statistika</span> adalah ilmu atau disiplin ilmu yang berkaitan dengan pengumpulan,analisis,interpretasi, dan presentasi data. Ini merupakan cabang ilmu matematika yang menggunakan alat-alat matematika untuk menjelaskan,
            meringkas,dan memahami data. Misalnya, "Ahli statistika sedang mengembangkan model prediktif untuk memprediksi perilaku pasar.
          </p>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Statistika</th>
                <th>Statistik</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Disiplin Ilmu</td>
                <td>Kumpulan angka-angka</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Pendekatan ilmiah yang membahas teknik-teknik untuk menghimpun, mengolah, menganalisis, menafsirkan, dan menyajikan data.</td>
                <td>Merujuk pada hasil dari proses pengolahan data yang kemudian disajikan dalam berbagai bentuk, seperti tabel, grafik, diagram, dan metode visualisasi lainnya</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Melibatkan penerapan metode penelitian, seperti survei dan eksperimen, untuk mengumpulkan informasi dan data.</td>
                <td>Informasi yang masih dalam bentuk data, baik itu berupa angka maupun bukan angka, yang akan diolah dan dianalisis melalui proses statistika.</td>
              </tr>
            </tbody>
          </table>

          <h3>Perkembangan Statistika</h3>
          <p>
            Statistika telah menapaki perjalanan yang mengagumkan sejak zaman awalnya. Pada abad ke-19, Francis Galton membentuk fondasi awal statistika dengan metode-metode yang memungkinkan analisis data dalam berbagai bidang. Saat itu,
            statistika banyak diterapkan dalam demografi, ekonomi, dan ilmu sosial untuk memahami populasi, produksi, dan perilaku manusia
          </p>
          <p>
            Pengembangan teori probabilitas oleh para matematikawan seperti Blaise Pascal dan Pierre de Fermat menjadi tonggak penting dalam evolusi statistika. Konsep dasar ini memberikan fondasi bagi statistika inferensial modern. Selain
            itu, perkembangan teknik deskriptif, seperti pengukuran pusat data dan variasi, telah memungkinkan ringkasan yang lebih komprehensif tentang data yang diamati.
          </p>
          <p>
            Revolution teknologi dan komputasi telah membawa statistika ke era baru. Peningkatan dalam teknologi dan kemampuan komputasi telah mengubah cara pengolahan data, memungkinkan analisis yang lebih cepat dan kompleks. Konsep Big
            Data mendorong statistika melampaui batas-batas konvensionalnya, mengolah jumlah data besar dan kompleks untuk mendapatkan wawasan yang berharga.
          </p>
          <p>
            Statistika telah menembus berbagai bidang, dari ilmu pengetahuan hingga bisnis. Dalam ilmu pengetahuan, statistika digunakan untuk merumuskan teori dan menguji hipotesis, sementara di dunia bisnis, menjadi alat penting dalam
            analisis pasar, prediksi tren, dan pengambilan keputusan yang berbasis data.
          </p>
          <p>
            Saat ini, statistika terus beradaptasi dengan perkembangan teknologi dan kebutuhan akan analisis data yang lebih kompleks. Perkembangan dalam kecerdasan buatan (AI) dan machine learning telah menjadi bagian penting dari evolusi
            statistika, membuka pintu untuk analisis yang lebih maju dan mendalam. Di tengah kemajuan ini, pentingnya etika dalam penggunaan statistika juga semakin ditekankan, terutama dalam konteks penggunaan Big Data dan keamanan data
            pribadi.
          </p>

          <h3>Jenis-Jenis Statistika Berdasarkan Pengolahan Data</h3>
          <ol>
            <li>
              <p>
                Statistika deskriptif adalah jenis statistika yang memeriksa dan merangkum data tanpa membuat kesimpulan untuk kelompok data yang lebih besar. Ini fokus pada informasi data yang ada, tanpa menguji hipotesis atau membuat
                kesimpulan yang berlaku secara umum untuk populasi.
              </p>
              <p>
                Statistika jenis ini memang hanya digunakan untuk menyajikan dan menganalisis data supaya lebih bermakna dan komunikatif. Tentunya, disertai penghitungan-penghitungan sederhana yang bersifat memperjelas keadaan dan atau
                karakteristik data yang bersangkutan.
              </p>
              <p>
                Contoh statistika deskriptif ini adalah data tentang jumlah siswa di sekolah, jumlah burung di suatu penangkaran, jumlah kelulusan siswa setiap tahunnya, dan lainnya. Data-data deskriptif nantinya akan disajikan ke dalam
                bentuk tertentu, misalnya tabel, baik dengan distribusi frekuensi tunggal atau berkelompok, histogram, dan poligon, supaya mudah serta cepat dipahami.
              </p>
              <p>
                Keberadaan statistika deskriptif ini dikenal juga dengan statistika dasar yang menggunakan penghitungan sederhana. Sebut saja ada penghitungan frekuensi, frekuensi kumulatif, persentase, persentase kumulatif, tingkat
                persentil, skor tertinggi dan terendah, rerata hitung, simpangan baku, varian (ragam), hingga pembuatan tabel silang.
              </p>
            </li>
            <li>
              Statistika inferensial merupakan jenis statistika yang fokus pada penarikan kesimpulan yang valid dari data, seringkali dengan memasukkan elemen probabilitas. Ini terlibat dalam analisis data sampel untuk mengestimasi
              parameter populasi dan menguji hipotesis. Melalui proses ini, statistika inferensial menghasilkan kesimpulan umum yang berlaku dari sampel yang telah dianalisis.
            </li>
          </ol>

          <img src={statistik2} alt="statistik vector" />

          <h3>Statistik Dalam Berbagai Bidang</h3>
          <p>Statistik memiliki peran penting dalam berbagai bidang:</p>
          <ul>
            <li>
              <span>Dalam Sains:</span> Membantu merumuskan dan menguji hipotesis, serta menginterpretasikan hasil eksperimen.
            </li>
            <li>
              <span>Dalam Ekonomi dan Keuangan:</span> Digunakan untuk memprediksi tren, mengukur risiko, dan membuat keputusan investasi.
            </li>
            <li>
              <span>Dalam Sosial dan Kesehatan:</span> Dalam ilmu sosial, digunakan untuk mengevaluasi data survei dan dalam bidang kesehatan, untuk analisis epidemiologi dan uji klinis.
            </li>
          </ul>
          <p>
            Jadi,statistik adalah ilmu yang tidak hanya terdiri dari angka-angka, tetapi merupakan alat penting untuk merangkum, menganalisis, dan memahami dunia di sekitar kita. Dengan kombinasi statistik deskriptif dan inferensial, kita
            dapat mengeksplorasi, menganalisis, dan menafsirkan data secara efektif, memberikan landasan untuk pengambilan keputusan yang tepat dalam berbagai bidang kehidupan kita.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Statistik;
