import { Link } from "react-router-dom/cjs/react-router-dom";

const SamplingError = () => {
  return (
    <div className="container-box">
      <h2 className="judul">Sampling Error</h2>

      <div className="content">
        <div className="introduction">
          <h3>Apa Itu Kesalahan Sampling Error </h3>
          <p>
            Kesalahan pengambilan ssampel adalah kesalahan statistik yang terjadi karena tidak memilih sampel yang mewakili seluruh populasi data. Akibatnya, hasil yang ditemukan dalam sampel tidak mewakili keseluruhan populasi. Sampling
            merupakan analisis yang dilakukan dengan memilih sejumlah observasi dari populasi yang lebih besar. Metode pemilihan tersebut dapat menghasilkan baik kesalahan sampling maupun kesalahan{" "}
            <a href="/statistika/non-sampling-error">non-sampling error </a>.
          </p>
          <h3>Jenis Kesalahan Sampling Error</h3>
          <p>Ada berbagai kategori kesalahan sampling error</p>

          <h4>1. Kesalahan Khusus Populasi</h4>
          <p>
            Kesalahan ini terjadi ketika seorang peneliti tidak memahami secara tepat siapa yang seharusnya menjadi subjek survei. Misalnya, survei yang ditujukan pada kelompok tertentu namun tidak memperhitungkan variasi yang penting dari
            populasi yang sebenarnya.
          </p>
          <h4>Kesalahan Pemilihan</h4>
          <p>
            Kesalahan ini Muncul saat survei dilakukan secara sukarela atau hanya diikuti oleh peserta yang tertarik dalam survei tersebut. Hal ini dapat memengaruhi representasi data karena mungkin hanya memperoleh respons dari kelompok
            tertentu yang memiliki minat khusus terhadap topik survei. Upaya diperlukan agar partisipasi merata dari berbagai kelompok.
          </p>
          <h4>Kesalahan Frame</h4>
          <p>Terjadi ketika sampel diambil dari data populasi yang salah atau tidak sesuai. Contohnya, mengambil sampel dari wilayah yang berbeda dengan populasi yang ingin disurvei.</p>
          <h4>Kesalahan Non-Respons</h4>
          <p>
            Berlangsung ketika tanggapan yang penting tidak diperoleh dari survei karena kendala dalam menghubungi responden potensial atau karena mereka menolak untuk berpartisipasi. Kesalahan ini dapat menghasilkan bias dalam analisis
            karena data yang diperoleh mungkin tidak mewakili seluruh populasi yang ingin disurvei.
          </p>

          <h3>Mengurangi Kesalahan Sampling Error</h3>
          <p>
            Kesalahan sampling error dapat dikurangi dengan meningkatkan ukuran sampel. Ketika ukuran sampel bertambah, sampel semakin mendekati populasi sebenarnya, sehingga mengurangi potensi penyimpangan dari populasi sebenarnya. Para
            peneliti mungkin berusaha mengurangi kesalahan sampling dengan melakukan replikasi studi mereka. Ini bisa dilakukan dengan mengambil pengukuran yang sama secara berulang, menggunakan lebih dari satu subjek atau kelompok, atau
            dengan melakukan beberapa studi.
          </p>
          <p>
            Pemilihan acak juga merupakan cara tambahan untuk meminimalkan terjadinya kesalahan sampling. Pemilihan acak menetapkan pendekatan sistematis dalam pemilihan sampel. Sebagai contoh, daripada memilih peserta untuk diwawancarai
            secara sembarangan, seorang peneliti mungkin memilih mereka yang namanya muncul pertama, kesepuluh, kedua puluh, ketiga puluh, keempat puluh, dan seterusnya, dalam daftar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SamplingError;
