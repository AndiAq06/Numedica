import dataset from "/img/dataset.jpeg";
import boxplot from "/img/boxplot.jpg";
import boxplot2 from "/img/boxplot2.png";
import boxplot3 from "/img/boxplot3.jpeg";
import boxplot4 from "/img/boxplot4.jpeg";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Boxplot = () => {
  return (
    <div className="container-box">
      <h2 className="judul">Boxplot | R studio</h2>

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
          <img src={boxplot2} />
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
        <div className="code">
          Boxplot dibuat di R menggunakan Fungsi <span>boxplot()</span>
          <div className="box">
            <span>Sintaks:</span> <code>boxplot(x,data,notch,varwidth,names,main)</code>
            <h4>Parameters</h4>
            <ul>
              <li>
                <span>x:</span> Parameter ini diatur sebagai vektor atau formula.
              </li>
              <li>
                <span>data:</span> Parameter ini mengatur kerangka data.
              </li>
              <li>
                <span>notch:</span> Parameter ini adalah label untuk sumbu horizontal.
              </li>
              <li>
                <span>varwidth:</span> Parameter ini adalah nilai logis. Diatur sebagai benar untuk menggambar lebar kotak yang proposional terhadap ukuran sampel.
              </li>
              <li>
                <span>main:</span> Parameter ini adalah judul dari grafik.
              </li>
              <li>
                <span>names:</span> Parameter ini adalah label kelompok yang akan ditampilkan di bawah setiap boxplot.
              </li>
            </ul>
          </div>
        </div>
        <div className="dataset">
          <h2>Membuat Dataset</h2>
          <p>Pada tutorial kali ini kita menggunakan dataset yang disediakan oleh R yaitu "mtcars" dataset.</p>
          <pre className="tutorial">
            <code>
              {`
              data(mtcars)
              head(mtcars)
          `}
            </code>
          </pre>
          <img className="image" src={dataset} />
        </div>
        <div className="dataset">
          <h2>Membuat Boxplot</h2>
          <p>Sekarang kita akan membuat boxplot "mpg"</p>
          <pre className="tutorial">
            <code>
              {`
              # Membuat boxplot untuk variabel 'mpg' dari dataset mtcars
              boxplot(mtcars$mpg, 
                      main = "Boxplot of MPG in mtcars",
                      xlab = "Mileage per Gallon")
          `}
            </code>
          </pre>
          <img src={boxplot} />
          <h2>Interpretasi</h2>
          <p>
            Dari grafik boxplot di atas, terlihat bahwa garis tengah dalam kotak (box) mewakili nilai median dari distribusi data. Perlu diperhatikan bahwa jarak antara kuartil pertama (Q1) dan median, serta jarak antara median dan kuartil
            ketiga (Q3), tidak terlalu jauh. Hal ini menunjukkan adanya distribusi data yang cenderung simetris.
          </p>
          <p>
            Dalam konteks ini, "simetris" mengacu pada distribusi data di mana nilai median (garis tengah kotak) berada di tengah-tengah atau hampir di tengah antara kuartil pertama dan kuartil ketiga. Ketika jarak antara Q1, median, dan Q3
            relatif serupa, dapat diinterpretasikan bahwa sebagian besar data terletak di sekitar nilai-nilai ini, dan tidak ada kecenderungan yang kuat untuk distribusi data yang sangat condong ke satu sisi (misalnya, distribusi yang
            sangat miring ke kanan atau kiri).
          </p>
        </div>
        <div className="dataset">
          <h2>Membuat Boxplot antara Variabel "disp" dan "gear"</h2>
          <p>Sekarang kita akan menggambarkan graph relasi antara "disp" dan "gear"</p>
          <pre className="tutorial">
            <code>
              {`
              boxplot(disp ~ gear, data = mtcars,
                      main = "Displacement by Gear",
                      xlab = "Gear",
                      ylab = "Displacement")
          `}
            </code>
          </pre>
          <img src={boxplot3} />
          <h2>Interpretasi</h2>
          <p>
            Pada boxplot di atas, kita memeriksa distribusi variabel disp (displacement) berdasarkan nilai variabel gear. Dalam kategori gear 3, distribusi data cenderung simetris. Di sisi lain, untuk kategori gear 4, data cenderung condong
            ke kiri (skewed left), menunjukkan kecenderungan adanya nilai-nilai yang lebih rendah. Sedangkan untuk kategori gear 5, distribusi data cenderung condong ke kanan (skewed right), menunjukkan kecenderungan adanya nilai-nilai yang
            lebih tinggi.
          </p>
        </div>

        <div className="dataset">
          <h2>Membuat Boxplot Horizontal antara Variabel "disp" dan "gear" </h2>
          <p>Sekarang kita akan menggambarkan graph relasi antara "disp" dan "gear"</p>
          <pre className="tutorial">
            <code>
              {`
              boxplot(disp ~ gear, data = mtcars,
                      main = "Displacement by Gear",
                      ylab = "Gear",
                      xlab = "Displacement",
                      horizontal = TRUE)
          `}
            </code>
          </pre>
          <img src={boxplot4} />
          <h2>Interpretasi</h2>
          <p>
            Pada boxplot di atas, kita memeriksa distribusi variabel disp (displacement) berdasarkan nilai variabel gear. Dalam kategori gear 3, distribusi data cenderung simetris. Di sisi lain, untuk kategori gear 4, data cenderung condong
            ke kiri (skewed left), menunjukkan kecenderungan adanya nilai-nilai yang lebih rendah. Sedangkan untuk kategori gear 5, distribusi data cenderung condong ke kanan (skewed right), menunjukkan kecenderungan adanya nilai-nilai yang
            lebih tinggi.
          </p>
        </div>
      </div>
      <div className="related-post">
        <h2>Related Post</h2>
        <div className="article-list">
          <ul>
            <li>
              <Link to="/barplot-r-studio">Bar-Chart | R Studio</Link>
            </li>
            <li>
              <Link to="/pie-chart-r-studio">Pie Chart | R Studio</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Boxplot;
