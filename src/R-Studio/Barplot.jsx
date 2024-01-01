import { Link } from "react-router-dom/cjs/react-router-dom.min";
import barplot1 from "/img/barplot1.jpeg";
import barplot2 from "/img/barplot2.jpeg";
import barplot3 from "/img/barplot3.jpeg";
import barplot4 from "/img/barplot4.jpeg";
import barplot5 from "/img/barplot5.jpeg";
import barplot6 from "/img/barplot6.png";

const Barplot = () => {
  return (
    <div className="container-box">
      <h2 className="judul">Bar-Chart | R studio</h2>
      <img src={barplot6} />
      <div className="content">
        <div className="introduction">
          <h4>Pengertian Bar-Chart</h4>
          <p>
            Barplot atau bar chart adalah jenis grafik yang menggunakan batang-batang vertikal atau horizontal untuk menampilkan data kategoris dan kuantitatif. Setiap batang merepresentasikan kategori data dan panjang batang menunjukkan
            jumlah atau nilai dari kategori tersebut.
          </p>
          <h4>Fungsi Bar-Chart</h4>
          <ol>
            <li>
              <span>Visualisasi Data Kategoris: </span>Merepresentasikan data kategori dan jumlahnya dengan batang-batang.
            </li>
            <li>
              <span>Perbandingan Data:</span> Membandingkan kuantitas atau proporsi antara kategori yang berbeda dengan mudah.
            </li>
            <li>
              <span>Ringkasan Visual:</span> Memberikan gambaran cepat tentang distribusi atau perbandingan antara grup atau kategori.
            </li>
          </ol>
        </div>
        <div className="code">
          Bar-Chart dibuat di R menggunakan Fungsi <span>barplot()</span>
          <div className="box">
            <span>Sintaks:</span> <code>barplot(H, xlab, ylab, main, names.arg, col)</code>
            <h4>Parameters</h4>
            <ul>
              <li>
                <span>H:</span> Parameter ini berisi nilai-nilai numerik yang akan digunakan untuk membuat grafik batang
              </li>
              <li>
                <span>xlab:</span> Parameter ini adalah label untuk sumbu x (horizontal) pada grafik batang.
              </li>
              <li>
                <span>ylab:</span> Parameter ini adalah label untuk sumbu y (vertikal) pada grafik batang.
              </li>
              <li>
                <span>main:</span> Parameter ini adalah judul atau label utama dari grafik batang.
              </li>
              <li>
                <span>names.arg:</span> Parameter ini adalah vektor yang berisi nama-nama yang akan muncul di bawah setiap batang dalam grafik batang.
              </li>
              <li>
                <span>col:</span> Parameter ini digunakan untuk memberikan warna pada batang-batang dalam grafik.
              </li>
            </ul>
          </div>
        </div>
        <div className="dataset">
          <h3>Simple Bar-Chart</h3>
          <pre className="tutorial">
            <code>
              {`
              # Membuat data bar-chart
              A <- c(30, 40, 32, 10, 4)
              
              # Plot bar chart
              barplot(A, xlab = "X-axis", ylab = "Y-axis", main ="Bar-Chart")
          `}
            </code>
          </pre>
          <img src={barplot1} />
        </div>
        <div className="dataset">
          <h3>Bar-Chart Horizontal</h3>
          <p>Membuat Bar-Chart Horizontal dengan menambahkan horiz = TRUE</p>
          <pre className="tutorial">
            <code>
              {`
              # Contoh data
                data <- c(10, 20, 15, 25, 30)
                names <- c("A", "B", "C", "D", "E") # Nama-nama untuk setiap bar

                # Membuat barplot horizontal
                barplot(data, horiz = TRUE, 
                        main = "Contoh Barplot Horizontal",
                        xlab = "Nilai",
                        ylab = "Kategori",
                        names.arg = names,
                        col = "skyblue") # Warna batang, misalnya, biru langit
          `}
            </code>
          </pre>
          <img src={barplot2} />
        </div>
        <div className="dataset">
          <h3>Bar-Chart | Menambahkan nilai Data pada Bar-Chart</h3>
          <p>Kita juga dapat menambahkan nilai data pada Bar-Chart seperti dibawah ini</p>
          <pre className="tutorial">
            <code>
              {`
              # Data baru
                A <- c(17, 2, 8, 13, 1, 22)
                B <- c("Jan", "Feb", "Mar", "Apr", "Mei", "Jun")
                
                # Plot grafik batang dengan fitur teks
                barplot(A, names.arg = B, xlab = "Bulan",
                        ylab = "Artikel", col = "steelblue",
                        main = "Numedica - Grafik Artikel",
                        cex.main = 1.5, cex.lab = 1.2, cex.axis = 1.1)
                
                # Tambahkan label data di atas setiap batang
                text(
                  x = barplot(A, names.arg = B, col = "green", ylim = c(0, max(A) * 1.2)),
                  y = A + 1, labels = A, pos = 3, cex = 1.2, col = "black"
                )
          `}
            </code>
          </pre>
          <img src={barplot3} />
          <ul>
            <li>
              Argumen cex.main, cex.lab, dan cex.axis: Mengontrol ukuran font dari judul grafik, label sumbux-x, dan label sumbu-y, secara berturut-turut. Mereka diatur menjadi 1.5, 1.2, dan 1.1 untuk meningkatkan ukuran font guna
              memudahkan pembacaan.
            </li>
            <li>
              Fungsi text(): Digunakan untuk menambahkan label data di atas setiap batang. Argumen x menentukan koordinat-x dari label (sama dengan koordinat-x barplot()), argumen y menambahkan nilai 1 terhadap tinggi batang yang sesuai (A
              + 1) untuk menempatkan label tepat di atas batang.
            </li>
          </ul>
        </div>

        <div className="dataset">
          <h3>Membuat grouped Bar-Chart</h3>
          <li>
            Ambil nilai vektor dan jadikan matriks M yang akan dikelompokkan atau ditumpuk. Pembuatan matriks dapat dilakukan dengan cara.
            <pre className="tutorial">
              <code>
                {`
                M <- matrix(c(values...), nrow = no_of_rows, ncol = no_of_column, byrow = TRUE)
          `}
              </code>
            </pre>
          </li>
          <li>
            Untuk menampilkan bar secara eksplisit kita dapat menggunakan parameter di samping.
            <pre>
              <code>
                {`
                barplot( beside=TRUE)
          `}
              </code>
            </pre>
          </li>
          <pre className="tutorial">
            <code>
              {`
              # Contoh data
                data <- matrix(c(12, 8, 10, 
                                5, 6, 4), 
                              nrow = 2, byrow = TRUE)
                rownames(data) <- c("Group A", "Group B")
                colnames(data) <- c("Category 1", "Category 2", "Category 3")

                # Membuat grouped bar chart
                barplot(data, beside = TRUE, col = c("orange", "brown"), legend = rownames(data),
                        main = "Grouped Bar Chart",
                        xlab = "Categories", ylab = "Values")
          `}
            </code>
          </pre>
          <img src={barplot5} />
          <p>
            Kode ini digunakan untuk membuat grouped bar chart dengan menggunakan R. Pertama, dilakukan pembentukan sebuah matriks data dengan dua baris yang mewakili dua kelompok ("Group A" dan "Group B") serta tiga kolom yang mewakili
            tiga kategori ("Category 1", "Category 2", dan "Category 3"). Setelah matriks data terbentuk, fungsi barplot() digunakan dengan argumen beside = TRUE untuk membuat grouped bar chart. Dalam grafik tersebut, batang dari setiap
            kelompok dikelompokkan secara berdampingan untuk setiap kategori, menggunakan warna oranye dan coklat. Legenda ditambahkan berdasarkan nama-nama kelompok, sementara sumbu x dan y dilabeli sebagai "Categories" dan "Values"
            masing-masing. Grafik ini memungkinkan perbandingan langsung antara kategori dalam setiap kelompok secara visual, membantu untuk melihat perbedaan antara kelompok dan kategori-kategori yang terlibat.
          </p>
        </div>

        <div className="dataset">
          <h3>Membuat stacked Bar-Chart</h3>
          <pre className="tutorial">
            <code>
              {`
              # Contoh data
                data <- matrix(c(12, 8, 10, 
                                5, 6, 4), 
                              nrow = 2, byrow = TRUE)
                rownames(data) <- c("Group A", "Group B")
                colnames(data) <- c("Category 1", "Category 2", "Category 3")

                # Membuat grouped bar chart
                barplot(data, beside = TRUE, col = c("orange", "brown"), legend = rownames(data),
                        main = "Grouped Bar Chart",
                        xlab = "Categories", ylab = "Values")
          `}
            </code>
          </pre>
          <img src={barplot4} />
          <p>
            Kode tersebut membuat sebuah grafik stacked bar chart menggunakan R. Pertama, terdapat pembentukan data dalam bentuk matriks dengan dua baris yang mewakili dua kelompok ("Group A" dan "Group B") serta tiga kolom yang
            merepresentasikan tiga kategori ("Category 1", "Category 2", dan "Category 3"). Setelah data terbentuk, fungsi barplot() digunakan untuk membuat grafik stacked bar chart. Dalam grafik tersebut, warna batang ditetapkan menjadi
            orange dan brown, legenda ditambahkan berdasarkan nama-nama kelompok, dan sumbu x dan y dilabeli dengan "Categories" dan "Values" secara berturut-turut. Grafik ini menyajikan informasi visual tentang nilai-nilai di setiap
            kategori untuk kedua kelompok, memungkinkan perbandingan antara kategori dalam kelompok tersebut secara langsung.
          </p>
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
              <Link to="/pie-chart-r-studio">Pie Chart | R Studio</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Barplot;
