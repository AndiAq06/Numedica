import steam1 from "/img/steam1.png";
import steam2 from "/img/steam2.png";
import steam3 from "/img/steam3.png";
import steam4 from "/img/steam4.jpeg";
import steam5 from "/img/steam5.jpeg";
import steam6 from "/img/steam6.png";
import steam7 from "/img/steam7.jpeg";
import steam8 from "/img/steam8.jpeg";
import steam9 from "/img/steam9.jpeg";

const Steam = () => {
  return (
    <div className="container-box">
      <h2 className="judul">Steam & Leaf | SPSS</h2>
      <div className="introduction">
        <div className="content">
          <h4>Pengertian Diagram Batang & Daun</h4>
          <p>
            Diagram batang dan daun atau disebut juga stem and leaf plot merupakan teknik grafis yang menggambarkan data asli ke dalam dua bagian yang dinamakan batang dan daun. Diagram batang dan daun menggambarkan/ menyajikan data dengan
            cara memisahkan setiap nilai menjadi dua bagian: bagian batang (stem) yaitu digit angka sebelah kiri dan diikuti dengan angka berikutnya, yaitu daun (leaf), digit angka sebelah kanan. Pembagian batang dan daun mengikuti aturan
            tertentu yang disebut sebagai Key. Misalnya angka yang terdiri dari dua digit, angka atau digit pertama ditempatkan pada bagian batang, dan angka atau digit kedua ditempatkan (secara berurutan) pada bagian daun, contoh: barisan
            angka: 52, 51, 54 dapat dibentuk menjadi 5|1 2 4, dimana angka 5 merupakan batang, sedangkan angka 1 2 4 adalah daunnya.
          </p>
          <p>
            Pembacaan atau interpretasi dari diagram batang dan daun berkaitan dengan tujuan dari penggunaannya, yaitu: mengamati kesimetrisan pola data, melihat penyebaran atau variasi dari data, mengecek ada atau tidaknya pencilan
            (outlier, nilai- nilai yang berada jauh dari yang lainnya), mengetahui titik pemusatan data, dan mengetahui keberadaan atau lokasi gap (kesenjangan dalam data).
          </p>
        </div>
      </div>
      <div className="content">
        <div className="dataset">
          <h4>Membuat Diagram Batang dan Daun Menggunakan SPSS</h4>
          <p>1. Entri data kedalam Data View SPSS seperti tampilan dibawah ini</p>
          <img className="image" src={steam1} />

          <p>2. Lakukan penyesuaian propertis data pada Variabel View sebagai berikut:</p>
          <img className="image" src={steam2} />

          <p>3. Pilih dan klik menu Analyze – Descriptive Statistics – Explore</p>
          <img className="image" src={steam3} />

          <p>4. Akan muncul window Explore. Pilih variabel Nilai Kalkulus dan masukkan ke dalam kotak Dependent List dengan menekan tombol panah. Selanjutnya tekan tombol Plots.</p>
          <img className="plot" src={steam4} />

          <p>5. Setelah muncul window Explore: Plots, pilih opsi None untuk Boxplots, dan pastikan Stem- and-leaf pada Descriptive tercentang. Klik Continue untuk melanjutkan.</p>
          <img className="plot" src={steam5} />

          <p>6. Setelah kembali pada window Explore, pilih opsi Plots pada grup Display dan selesaikan dengan menekan tombol OK. Hasilnya ditampilkan pada Output SPSS sebagai berikut:</p>
          <img className="image" src={steam6} />
          <h2>Interpretasi</h2>
          <p>Dalam metode daun-daun (stem-and-leaf) dari output SPSS yang disajikan, terdapat pengelompokan data berdasarkan digit pertama dan digit terakhir.</p>
          <ul>
            <li>Steam (bagian depan): Merujuk pada digit pertama dari setiap angka dalam data. Dalam contoh ini, steamnya adalah 0, 1, 2, hingga 7. Ini menunjukkan kumpulan digit pertama yang terjadi dalam data.</li>
            <li>
              Leaf (bagian belakang): Merujuk pada digit terakhir dari setiap angka dalam kelompok steam. Contohnya, pada Steam 0, leafnya adalah 8, 9, 9. Artinya, angka-angka ini merupakan bagian dari data yang memiliki digit pertama 0,
              dengan digit kedua 8, 9, dan 9 masing-masing muncul.
            </li>
            <li>Contoh lainnya adalah pada Steam 1, Leafnya terdiri dari 0, 1, 1, 3, 5, 7, 8, 9 dan 9. Ini menunjukkan angka-angka dalam data yang memiliki digit pertama 1, dengan digit kedua yang berbeda-beda.</li>
          </ul>
          <p>
            Dengan metode ini, kita dapat melihat sebaran data berdasarkan digit pertama dan kedua dari setiap angka dalam kelompok-kelompok yang dibentuk. Metode daun-daun membantu dalam mengeksplorasi distribusi data secara lebih
            terperinci.
          </p>

          <p>7. Jika kita menginginkan pemisahan berdasarkan Jenis Kelamin yaitu antara Laki-laki dan Perempuan, maka pada window Explore masukkan variabel Jenis Kelamin pada Factor List.</p>
          <img className="plot" src={steam7} />

          <p>8. Setelah klik OK, maka hasilnya akan ditampilkan pada window Output SPSS</p>
          <img className="image" src={steam8} />
          <img className="image" src={steam9} />
        </div>
      </div>
    </div>
  );
};

export default Steam;
