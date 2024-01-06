import histogram1 from "/img/histogram1.png";
import histogram2 from "/img/histogram2.jpeg";
import histogram3 from "/img/histogram3.jpeg";
import histogram4 from "/img/histogram4.jpeg";
import histogram5 from "/img/histogram5.jpeg";

const Histogram = () => {
  return (
    <div className="container-box">
      <h2 className="judul">Histogram | R studio</h2>
      <img className="images" src={histogram1} alt="histogram image" />
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
        <div className="code">
          Histogram dibuat di R menggunakan Fungsi <span>hist()</span>
          <div className="box">
            <span>Sintaks:</span> <code>hist(v,main,xlab,xlim,ylim,breaks,col,border)</code>
            <h4>Parameters</h4>
            <ul>
              <li>
                <span>v:</span> Parameter ini berisi nilai-nilai numerik yang digunakan dalam pembuatan histogram
              </li>
              <li>
                <span>main:</span> Parameter ini adalah judul dari grafik histogram yang akan dibuat.
              </li>
              <li>
                <span>col:</span> Parameter ini digunakan untuk menetapkan warna dari batang-batang pada histogram.
              </li>
              <li>
                <span>xlab:</span> Parameter ini adalah label untuk sumbu horizontal (sumbu x) pada histogram.
              </li>
              <li>
                <span>border:</span> Parameter ini digunakan untuk menetapkan warna batas dari setiap batang pada histogram.
              </li>
              <li>
                <span>xlim:</span> Parameter ini adalah label kelompok yang akan ditampilkan di bawah setiap boxplot.
              </li>
              <li>
                <span>ylim:</span> Parameter ini digunakan untuk menetapkan rentang nilai yang akan ditampilkan pada sumbu y (sumbu vertikal) pada histogram.
              </li>
              <li>
                <span>breaks:</span> Parameter ini digunakan sebagai lebar setiap batang pada histogram.
              </li>
            </ul>
          </div>
          <div className="dataset">
            <h3>Simple Histogram pada R </h3>
            <p>Membuat simple histogram menggunkan parameter yang sudah disebutkan diatas.</p>
            <pre className="tutorial">
              <code>
                {`
                # Membuat data untuk histogram.
                v <- c(19, 23, 11, 5, 16, 21, 32, 
                    14, 19, 27, 39, 6, 9, 17, 23, 39)
                
                # Membuat histogram
                hist(v, xlab = "Books",
                    col = "orange", border = "black")
          `}
              </code>
            </pre>
            <img src={histogram2} alt="image histogram 2" />
          </div>
          <div className="dataset">
            <h3>Membuat Range untuk Nilai X dan Y </h3>
            <p>Untuk mendeskripsikan nilai range kita dapat melakukan langkah berikut:</p>
            <ol>
              <li>Kita dapat menggunakan parameter xlim dan ylim pada X-axis dan Y-axis.</li>
              <li>Kita juga dapat menambahkan parameter breaks untuk mengatur lebar setiap batang pada histogram.</li>
            </ol>
            <p>Lihat contoh dibawah ini</p>
            <pre className="tutorial">
              <code>
                {`
                # Membuat data untuk histogram.
                v <- c(19, 23, 11, 45, 30, 49, 5, 16, 21, 32, 
                    14, 19, 27, 39, 6, 9, 17, 23, 39, 40)
                
                # Membuat histogram
                hist(v, xlab = "Books", col = "green",
                    border = "black", xlim = c(0, 50),
                    ylim = c(0, 5), breaks = 5)
          `}
              </code>
            </pre>
            <img src={histogram3} alt="image histogram 3" />
          </div>
          <div className="dataset">
            <h3>Membuat Histogram Mengembalikan Nilai untuk Labels</h3>
            <p>
              Untuk membuat histogram mengembalikan nilai dapat mengunakan fungsi <span>text()</span>
            </p>
            <pre className="tutorial">
              <code>
                {`
                # Membuat data untuk histogram.
                v <-  c(19, 23, 11, 5, 16, 21, 32, 
                    14, 19, 27, 39, 6, 9, 17, 23, 39)
                
                # Membuat histogram.
                m<-hist(v, xlab = "Berat", ylab ="Frequency",
                        col = "darkmagenta", border = "pink", 
                        breaks = 5)
                
                # Setting labels
                text(m$mids, m$counts, labels = m$counts, 
                    adj = c(0.5, -0.5))

          `}
              </code>
            </pre>
            <img src={histogram4} alt="image histogram 4" />
            <p>
              Dalam kode diatas "m$mids" mengacu pada nilai tengah dari tiap interval (kelas) pada histogram yang dihasilkan dan digunkan untuk mengatur posisi horizontal pada label. Sedangkan "m$counts" mengacu pada jumlah frekuensi data
              di setiap interval yang dihasilkan oleh fungsi "hist()" dan digunakan untuk mengatur posisi label secara vertikal{" "}
            </p>
          </div>
          <div className="dataset">
            <h3>Membuat Histogram dengan Lebar Berbeda </h3>
            <p>Membuat grafik histogram lebar berbeda, dengan menggunakan parameter di atas, kami membuat histogram menggunakan lebar tidak seragam.</p>
            <pre className="tutorial">
              <code>
                {`
                # Membuat data untuk histogram.
                v <- c(19, 23, 11, 5, 16, 21, 32, 14,
                    19, 27, 39, 120, 40, 70, 90)
                    
                # Membuat Histogram
                hist(v, xlab = "Weight", ylab ="Frequency",
                    xlim = c(50, 100),
                    col = "darkmagenta", border = "pink",
                    breaks = c(5, 55, 60, 70, 75,
                            80, 100, 140))
          `}
              </code>
            </pre>
            <img src={histogram5} alt="image histogram 5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Histogram;
