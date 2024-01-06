import dotplot1 from "/img/dotplot1.png";
import dotplot2 from "/img/dotplot2.png";
import dotplot3 from "/img/dotplot3.png";
import dotplot4 from "/img/dotplot4.png";
import dotplot5 from "/img/dotplot5.png";
import dotplot6 from "/img/dotplot6.jpeg";
import dotplot7 from "/img/dotplot7.jpeg";

const Dotplot = () => {
  return (
    <div className="container-box">
      <h2 className="judul">Dot Plot | SPSS</h2>

      <div className="content">
        <div className="introduction">
          <h4>Pengertian Dot Plot</h4>
          <p>
            Dot Plot merupakan salah satu jenis visualisasi data yang digunakan untuk menampilkan distribusi nilai atau frekuensi pada data kuantitatif. Ini terdiri dari titik-titik diskrit yang ditempatkan pada sumbu horizontal atau
            sumbu-X sesuai dengan nilai yang diamati dalam data. Setiap titik mewakili satu observasi atau nilai dalam kumpulan data.
          </p>
          <h4>Tujuan Dot Plot</h4>
          <ul>
            <li>
              <span>Visualisasi Distribusi:</span> Dot Plot membantu dalam melihat distribusi nilai atau frekuensi pada data. Dengan menempatkan titik pada sumbu yang sesuai dengan nilainya, kita dapat dengan jelas melihat sebaran data.
            </li>
            <li>
              <span>Perbandingan Nilai:</span> Dot Plot membantu untuk melihat perbandingan nilai antar-kategori atau kelompok dalam satu data set. Misalnya, jika ada beberapa kelompok data, dot plot memungkinkan untuk membandingkan sebaran
              nilai antar-kelompok secara langsung.
            </li>
            <li>
              <span>Mendeteksi Outlier:</span> Dot Plot memudahkan untuk menemukan pola atau distribusi nilai-nilai yang ekstrem atau outlier dalam data. Outlier biasanya terleatak di luar pola umum titik-titik pada dot plot.
            </li>
          </ul>
        </div>

        <div className="content">
          <div className="dataset">
            <h4>Membuat Dot Plot Menggunakan SPSS</h4>
            <p>
              1. Entri data kedalam Data View SPSS seperti tampilan dibawah ini. Data dapat di akses di link berikut
              <a href="https://docs.google.com/spreadsheets/d/1v2-1oIfRwKud3DoO2S5ampjHCOEOlJcBhldMu5wQkAc/edit?usp=sharing" target="_blank">
                Data
              </a>
            </p>
            <img className="image" src={dotplot1} alt="image dotplot 1" />

            <p>2. Klik Graphs → Legacy Dialogs → Scatter/Dot. Seperti gambar dibawah ini.</p>
            <img className="image" src={dotplot2} alt="image dotplot 2" />

            <p>3. Setelah muncul tampilan Scatter/Dot pilih yang Simple Dot untuk membuat Dot Plot.</p>
            <img className="image" src={dotplot3} alt="image dotplot 3" />

            <p>4. Pilih variabel yang akan dibuat Dot Plotnya. Masukkan variabel tersebut ke kotak X-axis Variable dengan meng-klik tanda panah disamping kotak tersebut. Seperti gambar dibawah ini</p>
            <img className="image" src={dotplot4} alt="image dotplot 4" />

            <p>5. Jika kita ingin menabahkan title maka bisa klik Titles di bagian samping kanan. Setelah itu masukkan title yang diinginkan. Kemudian klik continue.</p>
            <img className="image" src={dotplot5} alt="image dotplot 5" />

            <p>6. Setalah semuanya selesai maka Klik Ok. Maka hasilnya/outputnya akan keluar seperti gambar dibawah ini.</p>
            <p>Output pertama yang kita tidak settings title-nya itu terlihat sumbu-X nya tidak berurut tetapi sesuai dengan data kita. Sedangkan jika kita settings title-nya maka sumbu-X nya itu terlihat berurut dari kecil ke besar.</p>
            <img className="plot" src={dotplot6} alt="image dotplot 6" />
            <img className="plot" src={dotplot7} alt="image dotplot 7" style={{ marginTop: "20px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dotplot;
