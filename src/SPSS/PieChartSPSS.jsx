import piechartspss1 from "/img/piechartspss1.png";
import piechartspss2 from "/img/piechartspss2.png";
import piechartspss3 from "/img/piechartspss3.png";
import piechartspss4 from "/img/piechartspss4.png";
import piechartspss5 from "/img/piechartspss5.jpeg";

const PieChartSPSS = () => {
  return (
    <div className="container-box">
      <h2 className="judul">Pie Chart | SPSS</h2>
      <div className="content">
        <div className="introduction">
          <h3>Pengertian Pie Charts</h3>
          {/* <img src={pie5} /> */}
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
              <span>Menyoroti Bagian Penting: </span>Membantu dalam menyoroti bagian yang signifikan dalam konteks keseluruhan data.
            </li>
          </ol>
        </div>

        <div className="content">
          <div className="dataset">
            <h4>Membuat Pie Chart Menggunakan SPSS</h4>
            <p>
              1. Entri data kedalam Data View SPSS seperti tampilan dibawah ini. Data dapat di akses di link berikut
              <a href="https://docs.google.com/spreadsheets/d/1v2-1oIfRwKud3DoO2S5ampjHCOEOlJcBhldMu5wQkAc/edit?usp=sharing" target="_blank">
                Data
              </a>
            </p>
            <img className="image" src={piechartspss1} alt="image pie chart 1" />

            <p>2. Klik Graphs → Legacy Dialogs → Pie. Seperti gambar dibawah ini.</p>
            <img className="image" src={piechartspss2} alt="image pie chart 2" />

            <p>3. Setelah muncul tampilan Pie Charts pilih yang Summaries group of cases.</p>
            <img className="image" src={piechartspss3} alt="image pie chart 3" />

            <p>
              4. Pilih variabel yang akan dibuat Pie CHartnya. Masukkan variabel tersebut ke kotak Define Slice by dengan meng-klik tanda panah disamping kotak tersebut. Seperti gambar dibawah ini. Pada bagian Slice Represent pilih % of
              Cases untuk melihat persentasenya.
            </p>
            <img className="image" src={piechartspss4} alt="image pie chart 4" />

            <p>5. Jika kita ingin menabahkan title maka bisa klik Titles di bagian samping kanan. Setelah itu masukkan title yang diinginkan. Kemudian klik continue.</p>

            <p>6. Setalah semuanya selesai maka Klik Ok. Maka hasilnya/outputnya akan keluar seperti gambar dibawah ini.</p>
            <img className="plot" src={piechartspss5} alt="image pie chart 5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PieChartSPSS;
