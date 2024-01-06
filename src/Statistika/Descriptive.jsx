const Descriptive = () => {
  return (
    <div className="container-box">
      <h2 className="judul">Statistik Descriptive Vs Inferensia</h2>

      <div className="content">
        <div className="introduction">
          <p>
            Statistik adalah cabang ilmu matematika yang membantu kita melihat tren dan pola dalam sebagian besar data numerik. Teknik statistik dapat dikategorikan menjadi Statistik Deskriptif dan Statistik Inferensia. Dalam Artikel kali
            ini kita akan membahas perbedaan antara keduanya dan bagaimana pengaruhnya terhadap bidang analisis data.
          </p>

          <h4>Apa itu Statistik Deskriptif?</h4>
          <p>
            Statistik Deskriptif menggambarkan karakteristik dari sebuah data. Ini adalah teknik sederhana untuk mendeskripsikan, menampilkan, dan meringkas data dengan cara yang bermakna. Anda cukup memilih grup mana yang Anda minati,
            mencatat data tentang grup tersebut, lalu menggunakan ringkasan statistik dan grafik untuk mendeskripsikan grup tersebut. Tidak ada ketidakpastian karena kita hanya mendeskripsikan item/gruip yang sebenarnya kita ukur. Kita
            tidak bermaksud menyimpulkan tentang kumpulan data yang besar.
          </p>

          <h4>Apa itu Statistik Inferensia?</h4>
          <p>
            Statistik Inferensia memungkinkan kita untuk melakukan hipotesis dan evaluasi penerapan data pada populasi yang lebih besar. Tujuan dari statistik inferensia ini membuat pernyataan yang lebih luas tentang populasi secara umum
            berdasarkan informasi yang diperoleh dari sampel. Berikut perbedaan utamaa antara statistik deskriptif dan inferensia:
          </p>

          <table>
            <thead>
              <tr>
                <th></th>
                <th>Statistik Deskriptif</th>
                <th>Statistik Inferensia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tujuan</td>
                <td>Menjelaskan dan meringkas data</td>
                <td>Membuat inferensia dan membuat kesimpulan dari suatu populasi berdasarkan sampel yang ada</td>
              </tr>
              <tr>
                <td>Analisis data</td>
                <td>Menganalisis dan menafsirkan karakteristik kumpulan data</td>
                <td>Menggunakan data sampel untuk menggeneralisasi atau memprediksi mengenai populasi yang lebih besar</td>
              </tr>
              <tr>
                <td>Populasi vs Sampel</td>
                <td>Berfokus pada seluruh populasi atau kumpualan data</td>
                <td>Berfokus pada sampel untuk menarik kesimpulan tentang keseluruhan populasi</td>
              </tr>
              <tr>
                <td>Pengukuran</td>
                <td>Mengukur ukuran tendensi sentral dan dispersi</td>
                <td>Mengukur parameter,menguji hipotesis dan menentukan tingkat kepercayaan atau signifikansi level</td>
              </tr>
              <tr>
                <td>Contoh</td>
                <td>Mean, median, modus, standar deviasi, rentang, dan frekuensi</td>
                <td>Pengujian hipotesis, interval kepercayaan, regresi, ANOVA, uji chi-square, uji-t, dll.</td>
              </tr>
              <tr>
                <td>Parameter Populasi</td>
                <td>Biasanya tidak diperkirakan</td>
                <td>Diestimasi menggunakan statistik sampel (misalnya, mean sampel sebagai estimasi mean populasi)</td>
              </tr>
            </tbody>
          </table>
          <h4>Persamaan Statistik Deskriptif dan Inferensia</h4>
          <p>
            Statistik deskriptif dan inferensial digunakan untuk menganalisis dan memahami data, yang fungsinya mirip dengan statistik deskriptif. Keduanya menggunakan teknik dan instrumen statistik untuk membuat penilaian tentang suatu
            komunitas. Ide dasar yang sama dalam probabilitas, seperti seleksi, pengacakan, dan distribusi probabilitas, juga digunakan oleh keduanya. Yang terakhir, keduanya menggunakan jenis program statistik yang sama, termasuk SPSS,
            SAS, dan R.
          </p>
          <h4>Contoh Statistik Deskriptif</h4>
          <p>
            Contoh statistik deskriptif adalah menghitung dan menjelaskan karakteristik utama kumpulan data. Ukuran seperti mean, median, mode, range, varians, dan standar deviasi adalah beberapa contohnya. Misalnya, Kita dapat menggunakan
            statistik deskriptif untuk menentukan usia rata-rata, distribusi usia, dan standar deviasi usia kelompok individu.
          </p>
        </div>
        <h4>Contoh Statistik Inferensia</h4>
        <p>
          Dengan menggunakan sampel data, statistik inferensial digunakan untuk menarik kesimpulan atau generalisasi tentang populasi yang lebih luas. Contohnya termasuk analisis regresi, rentang kepercayaan, dan pengujian hipotesis.
          Misalnya, Anda dapat menggunakan statistik inferensial untuk menilai apakah ada perbedaan yang signifikan pada hasil pasien yang menerima obat dibandingkan dengan mereka yang menerima plasebo jika Anda ingin mengetahui apakah obat
          baru efektif.
        </p>
      </div>
    </div>
  );
};

export default Descriptive;
