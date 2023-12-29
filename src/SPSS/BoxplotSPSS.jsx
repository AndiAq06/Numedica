import boxplot2 from "/img/boxplot2.png";
import boxplotspss1 from "/img/boxplotspss1.png";
import boxplotspss2 from "/img/boxplotspss2.png";
import boxplotspss3 from "/img/boxplotspss3.png";
import boxplotspss4 from "/img/boxplotspss4.png";
import boxplotspss5 from "/img/boxplotspss5.jpeg";
import boxplotspss6 from "/img/boxplotspss6.png";
import boxplotspss7 from "/img/boxplotspss7.png";
import boxplotspss8 from "/img/boxplotspss8.png";
import boxplotspss9 from "/img/boxplotspss9.jpeg";

const BoxplotSPSS = () => {
  return (
    <div className="container-box">
      <h2 className="judul">Bar-Chart | R studio</h2>

      <div className="content">
        <div className="introduction">
          <h4>Pengertian Box Plot</h4>
          <p>
            Boxplot atau diagram kotak merupakan salah satu jenis visualisasi data yang digunakan untuk menganalisis distribusi data serta menampilkan statistik deskriptif seperti nilai tengah, kuartil, rentang data, dan keberadaan outliers
            (data yang ekstrem). Diciptakan pertama kali oleh John Tukey pada tahun 1969, boxplot merupakan alat yang efektif untuk memahami sebaran data secara visual.
          </p>
          <h4>Fungsi Boxplot</h4>
          <ol>
            <li>
              <span>Menunjukkan Sebaran Data </span>: Boxplot membantu dalam menunjukkan bagaimana data tersebar secara grafis. Ini memberi gambaran visual tentang sebaran nilai-nilai data dari minimum hingga maksimum.
            </li>
            <li>
              <span>dentifikasi Posisi Nilai Tengah:</span>I Dengan menampilkan garis di dalam kotak, boxplot memvisualisasikan nilai median (nilai tengah) dari data, yang merupakan pemisah antara kuartil pertama dan kedua.
            </li>
            <li>
              <span>Pengukuran Kuartil dan Rentang Interkuartil:</span> Diagram kotak memperlihatkan kuartil pertama (Q1) dan ketiga (Q3), yang membentuk kotak. Rentang interkuartil (IQR) dapat dihitung dari Q3 - Q1, menyoroti sebaran data
              di tengah.
            </li>
            <li>
              <span>Mendeteksi Outliers</span> Tanda-tanda titik di luar batas atas dan bawah (whiskers) menunjukkan adanya outliers atau data yang jauh dari nilai-nilai lainnya.
            </li>
          </ol>
          <img className="image" src={boxplot2} />
          <p style={{ fontStyle: "italic" }}>src: www.belajarstatistik.com</p>
          <h4>Cara Membaca Boxplot</h4>
          <ul>
            <li>Median: Garis di dalam kotak menunjukkan nilai tengah dari data.</li>
            <li>Kuartil (Q1 dan Q3): Kotak mewakili 50% tengah dari data, dengan kuartil pertama (Q1) sebagai batas bawah kotak dan kuartil ketiga (Q3) sebagai batas atas.</li>
            <li>Whiskers: Menyediakan informasi tentang sebaran data di luar kuartil. Mereka dapat menunjukkan rentang data atau batas untuk data non-outliers.</li>
            <li>Outliers: Titik-titik yang berada di luar whiskers, menandakan data yang signifikan secara ekstrem dari distribusi.</li>
            <li>Simetri: Jika median (garis di dalam kotak) berada di tengah kotak, dan jarak antara Q1 dan median serta Q3 dan median sekitar sama, grafik menunjukkan simetri.</li>
            <li>
              Cenderung Miring ke Kanan (Skewness ke Kanan): Jika median lebih dekat ke Q1 daripada ke Q3 (median lebih dekat ke "atas" kotak), dan rentang data di sebelah kanan (di atas kotak) lebih panjang daripada di kiri (di bawah
              kotak), grafik cenderung miring ke kanan.
            </li>
            <li>
              Cenderung Miring ke Kiri (Skewness ke Kiri): Jika median lebih dekat ke Q3 daripada ke Q1 (median lebih dekat ke "bawah" kotak), dan rentang data di sebelah kiri (di bawah kotak) lebih panjang daripada di kanan (di atas
              kotak), grafik cenderung miring ke kiri.
            </li>
          </ul>
        </div>

        <div className="content">
          <div className="dataset">
            <h4>Membuat Single Boxplot Menggunakan SPSS</h4>
            <p>
              1. Entri data kedalam Data View SPSS seperti tampilan dibawah ini. Data dapat di akses di link berikut
              <a href="https://docs.google.com/spreadsheets/d/1v2-1oIfRwKud3DoO2S5ampjHCOEOlJcBhldMu5wQkAc/edit?usp=sharing" target="_blank">
                Data
              </a>
            </p>
            <img className="image" src={boxplotspss1} />

            <p>2. Klik Graphs → Legacy Dialogs → pilih Boxplot. Seperti gambar dibawah ini.</p>
            <img className="image" src={boxplotspss2} />

            <p>3. Setelah muncul tampilan menu Boxplot, pilih Simple dan di Data in Chart Are pilih Summaries of separate variables, lalu klik Define. Summaries of separate dipilih karena kita hanya bekerja dengan 1 variabel.</p>
            <img className="image" src={boxplotspss3} />

            <p>4. Pilih variabel yang akan dibuat boxplotnya. Masukkan variabel tersebut ke kotak Boxes Represent dengan meng-klik tanda panah disamping kotak tersebut. Setalah itu klik Ok.</p>
            <img className="image" src={boxplotspss4} />

            <p>5. Diagram kotak yang dihasilkan dari data tersebut ditampilkan pada Gambar dibawah ini.</p>
            <img className="plot" src={boxplotspss5} />

            <h4>Membuat Multiple Boxplot Menggunakan SPSS</h4>
            <p>Jika Anda memiliki beberapa variabel, SPSS juga dapat membuat beberapa plot kotak berdampingan. Misalnya, kita memiliki data berikut tentang poin rata-rata yang dicetak oleh 16 pemain di tiga tim berbeda:</p>
            <p>
              1. Entri data kedalam Data View SPSS seperti tampilan dibawah ini. Data dapat di akses di link berikut
              <a href="https://docs.google.com/spreadsheets/d/1v2-1oIfRwKud3DoO2S5ampjHCOEOlJcBhldMu5wQkAc/edit?usp=sharing" target="_blank">
                Data
              </a>
              .{" "}
            </p>
            <img className="image" src={boxplotspss6} />

            <p>2. Klik Analyze → Descriptive Statistics → Explore. Seperti gambar dibawah ini</p>
            <img className="image" src={boxplotspss7} />

            <p>
              3. Setelah muncul tampilan Explore. Masukkan semua variabel ke Dependent List dengan meng-klik tanda panah disamping kotak. Setelah itu klik Plots pada bagian disamping dan pada bagian Boxplot pilih Dependents together seperti
              tampilan dibawah ini.
            </p>
            <img className="image" src={boxplotspss8} />

            <p>4. Setelah klik Ok maka muncul tampilan boxplot.</p>
            <img className="plot" src={boxplotspss9} />

            <h2>Interpretasi</h2>
            <ul>
              <li>Median poin yang tertinggi untuk tim B dan terendah untuk tim C</li>
              <li>Variasi jumlah poin yang paling tinggi terdapat pada tim B, terlihat dari seberapa panjang box plot mereka dibandingkan dengan tim A dan tim C.</li>
              <li>Pemain dengan poin tertinggi per pertandingan ada di tim B dan pemain dengan poin terendah per pertandingan ada di tim C.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoxplotSPSS;
