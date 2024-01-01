import { Link } from "react-router-dom/cjs/react-router-dom";
import pie1 from "/img/pie1.jpeg";
import pie2 from "/img/pie2.jpeg";
import pie3 from "/img/pie3.jpeg";
import pie4 from "/img/pie4.jpeg";
import pie5 from "/img/pie5.png";

const PieChart = () => {
  return (
    <div className="container-box">
      <h2 className="judul">Pie Charts | R studio</h2>
      <div className="content">
        <div className="introduction">
          <h4>Pengertian Pie Charts</h4>
          <img src={pie5} />
          <p>
            Pie chart, atau dalam bahasa Indonesia sering disebut dengan "diagram lingkaran", adalah jenis grafik yang menampilkan data dalam bentuk lingkaran yang terbagi menjadi beberapa "iris" atau "slices". Setiap iris mewakili proporsi
            atau persentase dari keseluruhan data. Diagram ini berguna untuk memvisualisasikan bagaimana setiap bagian berkontribusi terhadap keseluruhan.
          </p>
          <p>
            Kelebihan dari Pie Charts ini adalah Mudah dipahami, efektif dalam menampilkan proporsi relatif secara visual. Sedangkan Keterbatasannya adalah Kurang cocok untuk data yang kompleks atau memiliki banyak kategori, sulit jika
            terlalu banyak iris dalam satu diagram.
          </p>
          <h4>Kegunaan Pie Charts</h4>
          <ol>
            <li>
              <span>Visualisasi Proporsi:</span> Memberikan gambaran visual tentang bagaimana bagian-bagian menyumbang terhadap total keseluruhan.
            </li>
            <li>
              <span>Perbandingan Proporsi:</span>Memungkinkan perbandingan antara bagian-bagian yang membentuk keseluruhan.
            </li>
            <li>
              <span>Menyoroti Bagian Penting: </span> DMembantu dalam menyoroti bagian yang signifikan dalam konteks keseluruhan data.
            </li>
          </ol>
        </div>

        <div className="code">
          <h4>R- Pie Charts</h4>
          Pie Charts dibuat di R menggunakan Fungsi <span>pie()</span>
          <div className="box">
            <span>Sintaks:</span> <code>pie(x,labels, radius,main,col,clockwise)</code>
            <h4>Parameters</h4>
            <ul>
              <li>
                <span>x:</span>Parameter ini adalah vektor yang berisi nilai numerik yang digunakan dalam pie chart, mewakili proporsi dari setiap iris.
              </li>
              <li>
                <span>labels:</span> P Parameter ini memberikan deskripsi atau label untuk setiap iris/slice dalam pie chart.
              </li>
              <li>
                <span>radius:</span> Parameter ini menunjukkan jari-jari lingkaran pada pie chart. Nilainya berkisar antara -1 dan +1, mengatur ukuran lingkaran dalam hubungannya dengan ruang tampilan, di mana nilai positif menandakan
                ukuran yang lebih besar.
              </li>
              <li>
                <span>main:</span> Parameter ini merupakan judul atau title dari pie chart yang akan ditampilkan di bagian atas diagram
              </li>
              <li>
                <span>col:</span>Parameter ini memberikan warna pada iris atau slice dalam grafik pie.
              </li>
              <li>
                <span>clockwise:</span> Parameter ini berisi nilai logika yang menentukan apakah irisan pie chart digambar searah jarum jam (clockwise) atau berlawanan arah jarum jam (anti-clockwise).
              </li>
            </ul>
          </div>
        </div>
        <div className="dataset">
          <h2>Simple Pie Charts</h2>
          <pre className="tutorial">
            <code>
              {`
              # Data contoh
                values <- c(40, 30, 20, 10)
                labels <- c("A", "B", "C", "D")

                # Membuat simple pie chart
                pie(values, labels = labels, main = "Simple Pie Chart")
          `}
            </code>
          </pre>
          <img className="plot" src={pie1} />
        </div>

        <div className="dataset">
          <h2>Pie Charts dengan warna</h2>
          <pre className="tutorial">
            <code>
              {`
              # Data contoh
                values <- c(40, 30, 20, 10)
                labels <- c("Avanza", "Toyota", "Ferrari", "Lamborgini")

                # Membuat simple pie chart
                pie(values, labels = labels, main = "Car Pie Chart", col = rainbow(length(values)))
          `}
            </code>
          </pre>
          <img className="plot" src={pie2} />
        </div>

        <div className="dataset">
          <h2>Persentase Slice & Chart Legenda</h2>
          <p>Ada dua properti lagi dari diagram lingkaran: persentase irisan dan legenda grafik. Kita dapat menampilkan grafik dalam bentuk persentase serta menambahkan legenda.</p>
          <pre className="tutorial">
            <code>
              {`
              # Data contoh
                values <- c(40, 30, 20, 10)
                labels <- c("Avanza", "Toyota", "Ferrari", "Lamborgini")
                
                piepercent<- round(100 * values / sum(values), 1)
                
                # Plot the chart.
                pie(values, labels = piepercent,
                    main = "City pie chart", col = rainbow(length(values)))
                legend("topright",  c("Avanza", "Toyota", "Ferrari", "Lamborgini"),
                                    cex = 0.5, fill = rainbow(length(values)))
          `}
            </code>
          </pre>
          <img className="plot" src={pie3} />
        </div>

        <div className="dataset">
          <h2>3D Pie Chart</h2>
          <p>
            Di sini kita akan membuat diagram lingkaran 3D menggunakan <span>library plotrix</span> dan kemudian kita akan menggunakan fungsi pie3D() untuk memplot plot 3D.
          </p>
          <pre className="tutorial">
            <code>
              {`
              # Get the library.
                library(plotrix)
                
                #Data Contoh
                values <- c(40, 30, 20, 10)
                labels <- c("Avanza", "Toyota", "Ferrari", "Lamborgini")
                
                piepercent<- round(100 * values / sum(values), 1)
                
                # Plot the chart.
                pie3D(values, labels = piepercent,
                    main = "City pie chart", col = rainbow(length(values)))
                legend("topright",  c("Avanza", "Toyota", "Ferrari", "Lamborgini"),
                                    cex = 0.5, fill = rainbow(length(values)))
          `}
            </code>
          </pre>
          <img className="plot" src={pie4} />
        </div>
      </div>
      <div className="related-post">
        <h2>Related Post</h2>
        <div className="article-list">
          <ul>
            <li>
              <Link to="/boxplot-r-studio">Boxplot | R Studio</Link>
            </li>
            <li>
              <Link to="/barplot-r-studio">Bar-Chart | R Studio</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
