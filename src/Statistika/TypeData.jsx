const TypeData = () => {
  return (
    <div className="container-box">
      <h2 className="judul">Jenis-Jenis Tipe Data Dalam Statistika</h2>

      <div className="content">
        <div className="introduction">
          <p>
            Peran data dalam analisis statistika memeiliki signifikansi yang besar karena tidak semua data dapat menjadi dasar untuk pengambilan keputusan. Dalam perencanaan dan analisis statistika, keberadaan data yang tepat sangat
            diperlukan untuk menghasilkan analisis yang akurat dan sesuai dengan tujuan yang ditetapkan. Oleh karena itu, pemahaman terhadap data menjadi hal yang krusial. Sebelum kita memahami lebih lanjut tentang data dan jenis-jenis
            data, penting untuk diketahui bahea kualitas suatu data dapat diukur sengan memenuhi beberapa kriteria berikut:
          </p>
          <ol>
            <li>
              <span>Dapat Diandalkan</span>
            </li>
            <p>Data dianggap dapat diandalkan ketika memiliki sifat objektif, representatif dan memiliki tingkat kesalahan baku yang rendah.</p>
            <li>
              <span>Bermanfaat dan Berguna</span>
            </li>
            <p>Kebermanfaatan dan kegunaan data terletak pada relevansinya dengan permasalahan yang ingin dipecahkan dan kemampuannnya memberikan informasi yang tepat pada waktu yanag sesuai(up to date).</p>
          </ol>
          <p>Setelah mengenal syarat bagi sebuah data dapat dikatakan baik, dalam statistika terdapat berbagai jenis data. Kita akan bahas secara singkat mengenai jenis-jenis data dalam statistika.</p>

          <ol>
            <li>
              <span>Nominal</span>
            </li>
            <p>
              Tipe data nominal adalah tipe data yang digunakan untuk mengkategorikan variabel tanpa adanya urutan atau tingkatan tertentu. Contohnya, warna mobil, jenis kelamin atau jenis buah-buahan. Dalam analisis statistik, variabel
              nominal dapat dihitung menggunakan modus, tetapi operasi matematis seperti penambahan atau penguranagn tidak memiliki arti.
            </p>
            <li>
              <span>Ordinal</span>
            </li>
            <p>
              Ordinal adalah tipe data yang memiliki tingkatan atau urutan, tetapi jarak antar tingkatan tidak konsisten. Contohnya tingkat pendidikan (SD,SMP,SMA). Meskipun kita tahu bahwa SMA lebih tinggi daripada SMP, kita tidak dapat
              mengatakan seberapa besar perbedaannya. Analsis statistik pada variabel ordinal melibatkan median atau rangking.
            </p>
            <li>
              <span>Interval</span>
            </li>
            <p>
              Tipe data interval memiliki urutan yang konsisten dan jarak antar nilai yang terukur. Namun, tidak ada titik nol mutlak. Contohnhya suhu dalam celcius. Perbedaan antara 20 dan 30 derajat tidak sama dengan perbedaan antara 30
              dan 40 derajat.
            </p>
            <li>
              <span>Rasio</span>
            </li>
            <p>
              Rasio adalah tipe data dengan urutan yang konsisten dan memiliki titik nol mutlak. Contohnya adalah berat badan, tinggi badan atau pendapatan. Operasi matematika seperti perbandingan atau pengukuran perbandingan dapat
              diterapkan pada tipe data ini.
            </p>
            <li>
              <span>Kuantitatif</span>
            </li>
            <p>
              Variabel kuantitatif mengukur besaran atau kuantitas dan dapat dinyatakan dalam angka. Contohnya suhu, jumlah penjualan atau waktu. Analisis statistik kuantitatif melibatkan pemakaian teknik-teknik statistik seperti regresi
              dan uji hipotesis.
            </p>

            <li>
              <span>Kualitatif</span>
            </li>
            <p>
              Variabel kualitatif, sebaliknya, mencatat kualitas atau karakteristik yang tidak dapat diukur secara kuantitatif. Misalnya, warna mata, jenis pekerjaan, atau status perkawinan. Analisis statistik pada variabel kualitatif
              melibatkan persentase dan frekuensi.
            </p>
            <li>
              <span>Numerik</span>
            </li>
            <p>
              Numerik mencakup dua kategori, yaitu numerik diskri dan numerik kontinu. Numerik diskrit adalah tipe data yang hanya dapat mengambil nilai-nilai tertentu dan terbatas (misalnya jumlah anak dalam sebuh keluarga). Numerik
              kontinu, dapat mengambil nilai dalam rentang tertentu dan memiliki tak terhingga banyak nilai diantaranya (misalnya, tinggi badan seseorang)
            </p>
            <li>
              <span>Kategorik</span>
            </li>
            <p>
              Variabel kategorik adalah tipe data yang mengelompokkan data ke dalam kategori atau kelompok tertentu. Contohnya, merek ponsel, jenis mobil, atau departemen di sebuah perusahaan. Analisis statistik pada variabel kategorik
              melibatkan distribusi frekuensi dan uji chi-kuadrat.
            </p>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default TypeData;
