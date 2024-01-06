const Parametrik = () => {
  return (
    <div className="container-box">
      <h2 className="judul">Perbedaan Statistika Parametrik dan Nonparametrik</h2>

      <div className="content">
        <div className="introduction">
          <p>
            Statistika adalah salah satu alat utama dalam ilmu pengetahuan modern yang membantu kita memahami data dan membuat keputusan berdasarkan informasi yang kita miliki. Dalam statistika, terdapat dua pendekatan utama yang digunakan
            untuk menganalisis data yaitu: <span> statistika parametrik</span> dan <span>statistika non-parametrik</span>. keduanya memiliki karakteristik,metode dan aplikasi yang berbeda. Pada artikel kali ini kita akan membahas lebih
            lanjut mengenai kedua statistika tersebut
          </p>
          <h3>
            <span>Statistika Parametrik</span>
          </h3>
          <p>
            Statistika parametrik didasarkan pada asumsi tertentu tentang distribusi data. Pendekatan ini sering kali memerlukan perkiraan parameter dari populasi, seperti mean,variance atau distribusi data yang terkait pada distribusi
            tertentu seperti distribusi normal,binomial atau distribusi lainnya.
          </p>
          <h4>
            <span>Asumsi-Asumsi Utama Statistika Parametrik:</span>
          </h4>
          <ol>
            <li>Salah satu asusmi utama statistika parametrik adalah bahwa distribusi data yang diamati diketahui atau dapat diidentifikasi sebagai bagian dari distribusi tertentu, seperti distribusi normal, binomial, dll.</li>
            <li>
              Statistika parametrik memerlukan estimasi parameter dari populasi, seperti mean atau variance. Asumsi ini memungkinkan kita untuk menggunakan sampel data untuk mengestimasi parameter-parameter ini dan kemudian membuat
              inferensi tentang populasi secara keseluruhan.
            </li>
            <li>
              Metode parametrik sering dipilih ketika data memiliki struktur yang jelas, seperti hubungan antar variabel yang terdefinisi dengan baik atau pola yang dapat diidentifikasi. Contohnya, regresi linear yang mengevaluasi hubungan
              antar variabel-variabel.
            </li>
          </ol>
          <h4>
            <span>Keuntungan Statistika Parametrik</span>
          </h4>
          <ol>
            <li>Jika data mengikuti asusmi yang diperlukan seprti yang telah disebutkan diatas, analisis parametrik sering memberikan hasil yang sangat tepat dan akurat.</li>
            <li>Lebih efisien secara komputasional, terutama ketika ukuran sampel besar.</li>
            <li>Dapat melakukan inferensi yang lebih kiat dan spesifik tentang populasi berdasarkan sampel yang diambil</li>
          </ol>
          <h4>
            <span>Batasan Statistika Parametrik</span>
          </h4>
          <ol>
            <li>Analisis parametrik sangat rentan terhadap ketidaksesuaian asumsi. Jika data tidak mematuhi asumsi, hasilnya bisa menjadi bias atau tidak akurat.</li>
            <li> Tidak semua jenis data dapat dimodelkan dengan baik menggunakan pendekatan parametrik. Data yang tidak terdistribusi normal atau memiliki kompleksitas tertentu mungkin tidak cocok untuk analisis parametrik.</li>
          </ol>
          <h4>
            <span>Contoh Metode Parametrik</span>
          </h4>
          <ol>
            <li>
              <span>Uji T-Student:</span> Digunakan untuk menguji perbedaan antara rata-rata dua sampel yang independen. Contoh: Seorang peneliti ingin mengetahui apakah terdapat perbedaan rata-rata IQ antara dua kelompok siswa yang
              berbeda.
            </li>
            <li>
              <span>Analisis Varians (ANOVA):</span> Digunakan untuk membandingkan rata-rata lebih dari dua kelompok. Contoh: Seorang ahli biologi membandingkan rata-rata tinggi tumbuhan di tiga lingkungan yang berbeda.
            </li>
          </ol>
          <p>Selanjutnya kita akan membahas mengenai Statistika Non-Parametrik</p>
          <h3>
            <span>Statistika Non-Parametrik</span>
          </h3>
          <p>
            Statistika non-parametrik, di sisi lain, tidak bergantung pada asumsi tertentu tentang distribusi data. Pendekatan ini lebih fleksibel dan digunakan ketika data tidak memenuhi syarat asumsi parametrik atau saat informasi tentang
            populasi sangat terbatas. Metode non-parametrik sering dianggap lebih aman karena kurangnya asumsi yang ketat.
          </p>
          <h4>
            <span>Karakteristik Statistika Non-Parametrik</span>
          </h4>
          <ol>
            <li>
              Statistika non-parametrik tidak mensyaratkan distribusi data tertentu. Ini membuatnya lebih cocok untuk digunakan dalam situasi di mana sifat distribusi data tidak diketahui atau tidak mengikuti distribusi tertentu seperti
              distribusi normal atau distribusi lainnya.
            </li>
            <li>
              Metode non-parametrik sering digunakan pada data yang tidak memenuhi syarat untuk analisis parametrik, seperti data yang terdistribusi secara asimetris (skewed), memiliki outlier yang signifikan, atau ukuran sampel yang kecil.
            </li>
          </ol>

          <h4>Keuntungan Menggunaka Statistika Non-Parametrik</h4>
          <ol>
            <li>Metode non-parametrik sering lebih robust terhadap data yang tidak mengikuti distribusi tertentu atau memiliki karakteristik khusus seperti outlier.</li>
            <li> Cocok digunakan saat data yang tersedia memiliki ukuran sampel yang terbatas.</li>
            <li>Tidak memiliki asumsi distribusi tertentu membuatnya lebih "aman" untuk digunakan pada beragam jenis data.</li>
          </ol>
          <h4>Batasan Statistika Non-Parametrik</h4>
          <ol>
            <li>Di situasi di mana asumsi-asumsi parametrik terpenuhi, metode non-parametrik mungkin kurang presisi daripada metode parametrik.</li>
            <li>Metode non-parametrik mungkin kurang kuat dalam pengujian hipotesis yang sangat spesifik atau dalam melakukan estimasi parameter tertentu.</li>
          </ol>

          <h4>
            <span>Contoh Metode Non-Parametrik</span>
          </h4>
          <ol>
            <li>
              <span>Uji Mann-Whitney:</span> Digunakan untuk membandingkan median dari dua kelompok data yang independen. Contoh: Seorang peneliti ingin mengetahui apakah ada perbedaan dalam tingkat kepuasan kerja antara dua departemen
              dalam sebuah perusahaan.
            </li>
            <li>
              <span>Uji Chi-Square:</span>U Digunakan untuk menguji asosiasi antara dua variabel kategorikal. Contoh: Seorang peneliti ingin mengetahui apakah terdapat hubungan antara jenis kelamin dan preferensi warna pada populasi
              tertentu.
            </li>
          </ol>
          <p>
            Pilihan antara keduanya sering bergantung pada karakteristik data, tujuan analisis, dan kemampuan untuk memenuhi asumsi-asumsi yang diperlukan. Kombinasi dari keduanya juga dapat digunakan untuk menghasilkan pemahaman yang lebih
            mendalam tentang data.
          </p>
          <p>
            Dalam praktiknya, pemilihan antara statistika parametrik dan non-parametrik adalah langkah yang penting dalam menganalisis data. Kedua pendekatan ini memiliki nilai dan batasan masing-masing, yang membuatnya menjadi instrumen
            yang berguna dalam mengeksplorasi informasi dari data yang beragam.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Parametrik;
