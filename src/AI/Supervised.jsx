const Supervised = () => {
  return (
    <div className="container-box">
      <h2 className="judul">Supervised vs. Unsupervised Learning: What's the Difference?</h2>

      <div className="content">
        <div className="introduction">
          <h4>Dalam artikel ini, kita kan mempelajari dasar-dasar dua pendekatan sciense data: supervised and unsupervised. Cari tahu pendekatan mana yang tepat untuk situasi Anda.</h4>

          <p>
            Dunia semakin "pintar" setiap hari, dan untuk memenuhi ekspekstasi konsumen yang berbagai macam, perusahaan semakin banyak menggunakan algoritme pembelajaran mesin untuk mempermudah mereka dalam berbagai hal. Contohnya Anda
            dapat melihat perangkat ponsel cerdas menggunakan pengenalan wajah untuk membuka kunci ponsel atau untuk mendeteksi penipuan kartu kredit (seperti memicu peringatan untuk pembelian yang tidak biasa)
          </p>
          <p>
            Dalam kecerdasan buatan (AI) dan pembelajaran mesin, ada dua pendekatan dasar: Supervid=supervised learning dan unsupervised learning. Perbedaan utamanya adalah yang satu menggunakan data berlabel untuk membantu memprediksi
            hasil, sedangkan yang satunya tidak menggunakan label. Namun, ada beberapa perbedaan antara kedua pendekatan tersebut, dan aspek-aspek utama yang membuat pendekatan yang satu lebih unggul dari pendekatan yang lain. Postingan ini
            akan memperjelas perbedaannya sehingga Anda dapat memilih pendekatan terbaik untuk situasi Anda.
          </p>

          <h3>Apa itu Supervised Learning?</h3>
          <p>
            Supervised learning adalah pembelajaran mesin yang ditentukan oleh penggunaan kumpulan data yang memiliki label. Kumpulan data ini dirancang untuk melatih atau mengawasi algoritme dalam memprediksi atau mengklasifikasikan hasil
            secara baik dan akurat. Dengan menggunakan masukan dan keluaran yang diberi label, model dapat mengukur keakuratannya dan mempelajarinya seiring waktu berjalan.
          </p>
          <p>Supervised Learning dapat dibedakan menjadi dua jenis masalah: klasifikasi dan regresi</p>

          <ul>
            <li>
              <span>Klaisifikasi:</span> menggunakan algoritma untuk menetapkan data pengujian secara akurat kedalam kategori tertentu, seperti memisahkan anggur dan apel. Atau, di dunia nyata,algoritme supervised learning digunakan untuk
              mengklasifikasikan spam dalam folder terpisah dari kotak masuk Anda seperti yang ada pada gmail.Linear classifiers, support vector machines, decision trees and random forest adalah jenis klasifikasi algoritme yang umum
              digunakan.
            </li>
            <li>
              <span>Regresi</span> adalah jenis lain dari metode supervised learning yang menggunakan algoritme untuk memahami hubungan antara variabel dependent dan independent. Model regresi ini berguna untuk memprediksi nilai numerik
              berdsarkan titik data yang berbeda, seperti proyeksi pendapatan penjualan untuk bisnis. Beberapa algoritma regresi yang populer adalah regresi linier, regresi logistik, dan regresi polinomial.
            </li>
          </ul>
          <h3>Apa itu Unsupervised Learning?</h3>
          <p>
            Unsupervised Learning menggunakan algoritme pembelajaran mesin untuk menganalisis dan mengelompokkan kumpulan data yang tidak berlabel. Algoritme ini menemukan pola tersembunyi dalam data tanpa memerlukan campur tangan manusia
            karena itu disebut sebagai model tanpa pengawasan.
          </p>

          <p>Model pembelajaran tanpa pengawasan digunakan untuk tiga kasus: pengelompokan,asosiasi, dan reduksi dimensi.</p>
          <ul>
            <li>
              <span>Pengelompokan</span> adalah teknik untuk mengelompokkan data yang tidak berlabel berdasarkan persamaan dan perbedaannya. Misalnya algoritma K-Means menetapkan titik data serupa ke dalam kelompok, di mana nilai K mewakili
              pengelompokan. Teknik ini berguna untuk segmentasi pasar, kompresi gambar, dll.
            </li>
            <li>
              <span>Asosiasi</span> adalah metode unsupervised learning yang menggunakan aturan berbeda untuk menemukan hubungan antar variabel dalam kumpulan data tertentu.. Metode ini sering digunakan untuk analisis keranjang pasar dan
              mesin rekomendasi.
            </li>
            <li>
              <span>Reduksi Dimensi</span> adalah teknik teknik yang digunakan ketika jumlah fitur (dimensi) dalam kumpulan data tertentu terlalu tinggi. ni mengurangi jumlah input data ke ukuran yang dapat dikelola sekaligus menjaga
              integritas data. Seringkali, teknik ini digunakan pada tahap prapemrosesan data, seperti saat autoencoder menghilangkan noise dari data visual untuk meningkatkan kualitas gambar.
            </li>
          </ul>
          <h3>Perbedaan utama antara supervised dan unsupervised learning</h3>
          <p>Perbedaan utama antara kedua pendekatan ini adalah penggunaan kumpulan data berlabel. Supervised learning menggunakan data masukan dan keluaran yang diberi label, sedangkan unsupervised learning tidak.</p>

          <p>
            Dalam pembelajaran yang diawasi, algoritme mempelajari pola dari data pelatihan yang telah diberi label oleh manusia. Model ini cenderung akurat, namun memerlukan label manual pada data. Sebaliknya, pembelajaran tanpa pengawasan
            menemukan pola secara otomatis dari data yang tidak berlabel. Model ini masih memerlukan validasi manusia pada variabel outputnya. Contoh pembelajaran yang diawasi adalah memprediksi waktu perjalanan berdasarkan waktu, cuaca dll
            yang sebelumnya sudah dilatih. Contoh pembelajaran tanpa pengawasan adalah mengelompokkan produk belanjaan online yang sering dibeli bersamaan, meskipun kelompoknya perlu divalidasi agar masuk akal.
          </p>

          <h3>Supervised vs. Unsupervised: Mana yang terbaik untuk Anda?</h3>
          <p>Memilih pendekatan yang tepat untuk situasi Anda bergantung pada cara data scientist menilai struktur dan volume data Anda, serta kasus penggunaannya. Untuk membuat keputusan, pastikan untuk melakukan hal berikut:</p>
          <ul>
            <li>
              <span>Evaluasi data masukan:</span> Apakah data tersebut berlabel atau tidak berlabel?
            </li>
            <li>
              <span>Tentukan tujuan:</span>Apakah Anda mempunyai masalah yang berulang dan jelas untuk dipecahkan? Atau apakah algoritme perlu memprediksi masalah baru?
            </li>
            <li>Apakah ada algoritme dengan dimensi yang sama yang Anda perlukan (jumlah fitur, atribut, atau karakteristik)? Bisakah mereka mendukung volume dan struktur data Anda?</li>
          </ul>
          <p>
            Mengklasifikasikan data besar bisa menjadi tantangan nyata dalam pembelajaran yang diawasi, namun hasilnya sangat akurat dan dapat dipercaya. Sebaliknya, pembelajaran tanpa pengawasan dapat menangani data dalam jumlah besar
            secara real-time. Namun, terdapat kurangnya transparansi dalam pengelompokan data dan tingginya risiko hasil yang tidak akurat.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Supervised;
