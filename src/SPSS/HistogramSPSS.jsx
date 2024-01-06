import histogramspss1 from "/img/histogramspss1.png";
import histogramspss2 from "/img/histogramspss2.png";
import histogramspss3 from "/img/histogramspss3.png";
import histogramspss4 from "/img/histogramspss4.png";
import histogramspss5 from "/img/histogramspss5.jpeg";
const HistogramSPSS = () => {
  return (
    <div className="container-box">
      <h2 className="judul">Histogram | SPSS</h2>
      <div className="content">
        <div className="introduction">
          <h4>Pengertian Histogram</h4>
          <p>
            Histogram merupakan grafik batang yang menampilkan frekuensi atau jumlah kemunculan data di setiap interval. Interval tersebut adalah rentang nilai data dibagi ke dalam interval, dan tinggi setiap batang menunjukkan seberapa
            sering data jatuh dalam interval tersebut.
          </p>
          <h4>Kegunaan Histogram</h4>
          <ul>
            <li>
              <span>Distribus Data</span> Memberikan gambaran visual tentang distribusi suatu data. Ini membantu untuk melihat apakah data cenderung berkumpul di interval tertentu atau berdistribusi merata.
            </li>
            <li>
              <span>Pemahaman Pola</span> Histogram membantu mengidentifikasi pola atau bentuk distribusi data seperti distribusi normal,skewed, atau distribusi lainnya.
            </li>
            <li>
              <span>Pemilihan Interval</span> Memungkinkan untuk memahami dana menyesuaikan lebar interval agar relevan dengan data yang dihadapi.
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
            <img className="image" src={histogramspss1} alt="image histogram 1" />

            <p>2. Klik Graphs → Legacy Dialogs → Histogram. Seperti gambar dibawah ini.</p>
            <img className="image" src={histogramspss2} alt="image histogram 2" />

            <p>3. Setelah muncul tampilan Histogram Pilih variabel yang akan dibuat Histogramnya. Masukkan variabel tersebut ke kotak Variable dengan meng-klik tanda panah disamping kotak tersebut. Seperti gambar dibawah ini</p>
            <img className="image" src={histogramspss3} alt="image histogram 3" />

            <p>4. Jika kita ingin menabahkan title maka bisa klik Titles di bagian samping kanan. Setelah itu masukkan title yang diinginkan. Kemudian klik continue.</p>
            <img className="image" src={histogramspss4} alt="image histogram 4" />

            <p>5. Setalah semuanya selesai maka Klik Ok. Maka hasilnya/outputnya akan keluar seperti gambar dibawah ini.</p>
            <img className="plot" src={histogramspss5} alt="image histogram 5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistogramSPSS;
