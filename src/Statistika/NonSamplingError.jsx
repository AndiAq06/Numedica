import { Link } from "react-router-dom/cjs/react-router-dom";

const NonSamplingError = () => {
  return (
    <div className="container-box">
      <h2 className="judul">Non-Sampling Error</h2>

      <div className="content">
        <div className="introduction">
          <p>
            Non-Sampling Error dalam statistik merujuk pada kesalahan yang terjadi dalam proses pengumpulan,pengolahan, dan interpretasi data yang tidak terkait dengan metode pengambilan sampel. Berbeda dengan sampling error yang terjadi
            karena variasi acak dalam sampel, non-sampling error lebih berkaitan dengan faktor-faktor lain yang dapat memengaruhi keakuratan analisis statistik.
          </p>

          <h3>Mekanisme Kesalahan Non-Sampling</h3>
          <p>Kesalahan non-sampling dapat timbul ketika sampel atau seluruh populasi (sensus) diambil. Itu terbagi dalam dua kategori: </p>
          <h4>1. Kesalahan acak</h4>
          <p>
            Kesalahan acak adalah kesalahan yang tidak dapat dipertanggungjawabkan dan terjadi begitu saja. Dalam studi statistik, diyakini bahwa setiap kesalahan acak saling mengimbangi, sehingga hal ini tidak terlalu menjadi perhatian.
          </p>
          <h4>2. Kesalahan sistematis</h4>
          <p>
            Kesalahan sistematis mempengaruhi sampel penelitian dan sebagai akibatnya seringkali menghasilkan data yang tidak berguna. Kesalahan sistematis bersifat konsisten dan berulang, sehingga pembuat penelitian harus berhati-hati
            untuk mengurangi kesalahan tersebut.
          </p>
          <p>
            Kesalahan non-sampling dapat terjadi dari beberapa aspek suatu penelitian. Kesalahan non-sampling yang paling umum mencakup kesahalan dalam entri data, pertanyaan yang kurang bagus dan pengambilan keputusan yang bias, tidak
            adanya tanggapan, informasi palsu, dan analisis yang tidak tepat.
          </p>

          <h3>Jenis Kesalahan Non-Sampling</h3>
          <p>Terdapat beberapa jenis kesalahan non-sampling, antara lain:</p>
          <h4>1. Kesalahan non-respons</h4>
          <p>
            Kesalahan non-respons disebabkan oleh perbedaan antara orang-orang yang memilih berpartisipasi dengan orang-orang yang tidak berpartisipasi dalam survei tertentu. Dalam kata lain, kesalahan ini terjadi ketika orang-orang diberi
            opsi untuk berpartisipasi namun memilih untuk tidak melakukannya. Oleh karena itu, hasil survei mereka tidak dimasukkan ke dalam data.
          </p>
          <h4>2. Kesalahan pengukuran</h4>
          <p>
            Kesalahan pengukuran mengacu pada semua kesalahan yang terkait denga pengukurann setiap unit sampel, berbeda dengan kesalahan yang terkait dengan cara pemilihan unit sampel tersebut. Kesalahan ini sering muncul ketika terdapat
            pertanyaan yang membingungkan, data berkualitas rendah karena kelelahan sampling (misalnya, seseorang lelah mengisi durvei), dan alat pengukuran berkualitas rendah.
          </p>
          <h4>3. Kesalahan pewawancara</h4>
          <p>
            Kesalahan pewawancara terjadi ketika pewawancara (atau administrator) melakukan kesalahan saat mencatat sebuah respons. Dalam penelitian kualitatif, pewawancara dapat mempengaruhi responden untuk menjawab dengan cara tertentu.
            Dalam penelitian kuantitatif, pewawancara dapat menanyakan pertanyaan dengan cara yang berbeda, yang menghasilkan hasil yang berbeda pula.
          </p>
          <h4>4. Kesalahan pemrosesan</h4>
          <p>Kesalahan pemrosesan muncul saat terjadi masalah dalam memproses data yang menyebabkan kesalahan tertentu. Contohnya adalah jika data dimasukkan dengan cara yang salah atau jika file data rusak.</p>

          <h3>
            <a href="/statistika/sampling-error">Sampling Error</a> vs Non-Sampling Error
          </h3>
          <p>Terdapat perbedaan penting antara sampling error dan non-sampling error</p>
          <ul>
            <li>Kesalahan sampling error dapat terjadi meskipun tidak ada kesalahan nyata yang dilakukan, berbeda dengan kesalahan non-sampling error yang muncul ketika terjadi kesalahan.</li>
            <li>Sampling error terjadi apabila sampel tidak mewakili kebenaran universal, sedangkan non-sampling error bersifat spesifik pada desain penelitian tertentu.</li>
            <li>Kesalahan sampling error dapat dikurangi secara signifikan seiring bertambahnya ukuran pengambilan sampel, namun kesalahan non-pengambilan sampel memerlukan proses yang lebih metodologis untuk menguranginya.</li>
            <li>
              Kesalahan pengambilan sampel seringkali disebabkan oleh faktor internal, sedangkan kesalahan non pengambilan sampel disebabkan oleh faktor eksternal yang tidak sepenuhnya berkaitan dengan suatu survei, penelitian, atau sensus.
            </li>
          </ul>

          <h3>Mengurangi Kesalahan Non-Sampling Error</h3>
          <p>
            Mengurangi kesalahan non-sampling tidak semudah mengurangi kesalahan sampling. Dalam kesalahan sampling, Anda dapat mengurangi risiko kesalahan dengan hanya meningkatkan ukuran sampel. Namun hal ini tidak berlaku untuk kesalahan
            non-sampling yang seringkali sulit dideteksi dan dihilangkan (kecuali jika pertimbangan metodis sangat diberikan terhadap sumber kesalahan tersebut).
          </p>
          <p>
            Untuk mengurangi kesalahan non-sampling secara efektif, perlu dipertimbangkan dengan cermat oleh mereka yang merancang studi untuk memastikan validitas hasil. Sebagai contoh, seorang peneliti mungkin merancang mekanisme dalam
            studi untuk mengurangi kesalahan tanpa memperkenalkan kesalahan lainnya.
          </p>
          <p>
            Sebagai contoh, seorang peneliti dapat memberikan bonus kepada individu berdasarkan akurasi entri data mereka, atau mereka dapat merekam semua wawancara untuk memastikan pewawancara tetap pada topik dan skrip yang telah
            ditentukan.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NonSamplingError;
