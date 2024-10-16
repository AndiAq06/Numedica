import scatter1 from "/img/scatter1.png";
import scatter2 from "/img/scatter2.png";
import scatter3 from "/img/scatter3.png";
import dataset2 from "/img/dataset2.jpeg";
import scatter4 from "/img/scatter4.jpeg";
import scatter5 from "/img/scatter5.jpeg";
import scatter6 from "/img/scatter6.jpeg";

const Scatter = () => {
  return (
    <div className="container-box">
      <h2 className="judul">Scatter Plot | R studio</h2>
      <div className="content">
        <div className="introduction">
          <h4>Pengertian Scatter Plot</h4>
          <p>
            Scatter Plot adalah jenis grafik yang digunakan untuk memvisualisasikan hubungan antara dua variabel numerik dalam bentuk titik-titik yang tersebar di dalam bidang. Setiap titik mewakili sepasang nilai dari dua variabel yang
            berbeda. Tujuan utamanya untuk menunjukkan pola atau hubungan antara dua variabel.
          </p>
          <h4>Tujuan Scatter Plot</h4>
          <ul>
            <li>Scatter Plot membantu dalam memvisualisasikan hubungan atau korelasi antara dua variabel. Ini dapat membantu dalam menentukan apakah ada hubungan antar keduanya.</li>
            <li>Scatter Plot dapat digunakan untuk melihat apakah ada pola tertentu dalam distribusi titik-titik, seperti pola linear,pola non-linear, atau ketiadaan pola.</li>
          </ul>
          <h4>Pola Scatter Plot</h4>
          <p>
            <span>- Korelasi Positif</span> Jika titik-titik cenderung bergerak dari kiri bawah ke kanan atas, maka ada kemungkinan terdapat korelasi positif antara kedua variabel.
          </p>
          <img src={scatter1} alt="scatter 1" />
          <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src: https://learn.nural.id/course/statistics/regresi-linier/scatterplot </p>
          <p>
            <span>- Korelasi Negatif</span> Jika titik-titik cenderung bergerak dari kiri atas ke kanan bawah, maka ada kemungkinan terdapat korelasi negatif antara kedua variabel.
          </p>
          <img src={scatter2} alt="scatter 2" />
          <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src: https://learn.nural.id/course/statistics/regresi-linier/scatterplot </p>
          <p>
            <span>- Tidak Ada Korelasi</span> Jika titik-titik tersebar acak di seluruh plot tanpa pola khusus, ini menunjukkan bahwa kedua variabel tersebut mungkin tidak memiliki hubungan.
          </p>
          <img src={scatter3} alt="scatter 3" />
          <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src: https://learn.nural.id/course/statistics/regresi-linier/scatterplot </p>
        </div>

        <div className="code">
          Scatter Plot dibuat di R menggunakan Fungsi <span>plot()</span>
          <div className="box">
            <span>Sintaks:</span> <code>plot(x, y, main, xlab, ylab, xlim, ylim, axes)</code>
            <h4>Parameters</h4>
            <ul>
              <li>
                <span>x:</span> Parameter ini menetapkan koordinat horizontal/variabel pertama.
              </li>
              <li>
                <span>y:</span> Parameter ini menetapkan koordinat vertikal/variabel kedua.
              </li>
              <li>
                <span>xlab:</span> Parameter ini adalah label untuk sumbu horizontal (sumbu x) pada scatter plot.
              </li>

              <li>
                <span>ylab:</span> Parameter ini adalah label untuk sumbu vertikal (sumbu y) pada scatter plot.
              </li>
              <li>
                <span>main:</span> Parameter main adalah judul dari grafik scatter plot.
              </li>
              <li>
                <span>xlim:</span> Parameter ini digunakan untuk plotting nilai-nilai x.
              </li>
              <li>
                <span>ylim:</span> Parameter ini digunakan untuk plotting nilai-nilai y.
              </li>
              <li>
                <span>axes:</span> Parameter ini menunjukkan apakah kedua sumbu harus digambar pada plot.
              </li>
            </ul>
          </div>
          <div className="dataset">
            <h3>Simple Scatter Plot pada R </h3>
            <p>Membuat Scatter Plot menggunakan data set"mtcars" dengan variabel "wt" dan "mpg".</p>
            <pre className="tutorial">
              <code>
                {`
                input <- mtcars
                print(head(input))
          `}
              </code>
            </pre>
            <img className="image" src={dataset2} alt="dataset" />

            <h4>Membuat Scatter Plot</h4>
            <pre className="tutorial">
              <code>
                {`
                # Input Data
                input <- mtcars[, c('wt', 'mpg')]
                
                # Membuat Scatter Plot
                plot(x = input$wt, y = input$mpg,
                    xlab = "Weight",
                    ylab = "Milage",
                    main = "Weight vs Milage"
                )
          `}
              </code>
            </pre>
            <img src={scatter4} alt="scatter 4" />
          </div>
          <h3>Scatterplot Matriks</h3>
          <p>Ketika kita memiliki dua atau lebih variabel dan kita ingin melihat korelasi antara satu variabel dengan variabel lain kita menggunakan scatterplot matiks</p>
          <div className="box">
            <span>Sintaks:</span> <code>pairs(dormula,data)</code>
            <h4>Parameters</h4>
            <ul>
              <li>
                <span>formula:</span> Parameter ini mewakili rangkaian variabel yang digunakan secara berpasangan.
              </li>
              <li>
                <span>data:</span> Parameter ini mewakili set data dari mana variabel-variabel akan diambil.
              </li>
            </ul>
          </div>
          <div className="dataset">
            <p>Dapat dilihat dibawah ini cara membuat scatterplot matriks</p>
            <pre className="tutorial">
              <code>
                {`
                pairs(~wt + mpg + disp + cyl, data = mtcars,
                    main = "Scatterplot Matrix")
          `}
              </code>
            </pre>
            <img src={scatter5} alt="scatter 5" />
            <p>"~wt + mpg + disp + cyl" menunjukkan bahwa kita ingin membuat matriks scatterplot yang membandingkan hubungan antara variabel 'wt', 'mpg', 'disp', dan 'cyl' dari dataset 'mtcars'</p>
          </div>
          <div className="dataset">
            <h3>3D Scatter Plot </h3>
            <p>
              Pada bagian terakhir ini kita akan mencoba membuat 3D scatter plot menggunakan <span>plot_ly()</span> dalam package <span>plotly</span>
            </p>
            <pre className="tutorial">
              <code>
                {`
                library(plotly)
                data <- mtcars
                plot_ly(data, x = ~mpg, y = ~hp, z = ~cyl, color = ~gear, type = "scatter3d", mode = "markers")
          `}
              </code>
            </pre>
            <img src={scatter6} alt="scatter 6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Scatter;
