import AI from "/img/AI.png";
import AI2 from "/img/AI2.jpg";

const ArtificialIntelligence = () => {
  return (
    <div className="container-box">
      <h2 className="judul">Artificial Intelligence</h2>

      <div className="introduction">
        <h3>Menggali Dunia Artificial Intelligence</h3>
        <img src={AI2} alt="Image 2 AI" style={{ marginTop: "10px" }} />
        <p>
          Artificial Intelligence (AI) merupakan cabang ilmu komputer yang bertujuan untuk menciptakan entitas pintar yang dpaat berpikir dan bertindak seperti manusia. Dengan kemajuan teknologi, AI menjadi pusat perhatian dalam berbagai
          industri dan membentuk transformasi besar dalam cara kita hidup dan bekerja.
        </p>

        <h4>Apa itu Artificial Intelligence?</h4>
        <p>Kecerdasan buatan atau AI adalah simulasi proses kecerdasan mesin, khususnya sistem komputer. Aplikasi khusus AI mencakup expert systems, natural language processing, speech recognition anda machine vision.</p>

        <h4>Bagaimana cara kerja AI?</h4>
        <p>
          Dengan semakin meningkatnya minat terhdap AI, vendor berusaha keras untuk mempromosikan penggunaan teknologi dalam produk dan layanan mereka. Terkadang, istilah AI digunakan oleh vendor hanya merujuk pada bagian tertentu dari
          teknologi ini, seperti machine learning. Agar AI dapat beroperasi, dibutuhkan dasar perangkat keras dan perangkat lunak khusus untuk menulis dan melatih algoritma machine learning. Meskipun tidak ada satu bahasa pemrograman khusus
          untuk AI, seperti, Python, R, Java dan C++ menjadi populer di kalangan pengembang AI.
        </p>
        <p>
          Secara umum, sistem AI berfungsi dengan mengumpulkan data pelatihan berlabel dengan jumlah besar, menganalisis data tersebut untuk mencari korelasi dan pola, dan kemudian menggunakan pola ini untuk membuat prediksi tentang keadaan
          di masa depan. Misalnya, chatbot yang diberi contoh teks dapat belajar untuk menghasilkan percakapan yang realistis, atau alat pengenalann gambar dapat belajar mengidentifikasi dan mendeskripsikan objek dalam gambar dengan melihat
          jutaan contoh. Teknologi AI generatif yang sedang berkembang pesat juga mampu menciptakan teks, gambar, musik, dan media lainnya dengan tingkat realisme yang tinggi.{" "}
        </p>
        <p>Pemrograman AI berfokus pada keterampilan kognitif yang mencakup hal-hal berikut:</p>
        <ul>
          <li>
            Pembelajaran. Bagian dari pemrograman AI ini berfokus pada pengambilan data dan pembuatan atutran tentang bagaimana mengubahnya menjadi sebuah informasi yang dapat dijalankan. Aturan ini yang disebut algoritma, memberikan
            perangkat komputasi langkah demi langkah tentang cara menyelesaikan tugas tertentu.
          </li>
          <li>Penalaran. Bagian dari pemrograman AI ini berfokus pada pemilihan algortitam yang tepat untuk mencapai hasil yang diinginkan.</li>
          <li>Koreksi diri. Bagian dari pemrograman ini dirancang untuk terus menyempurnakan algoritma dan memastikan bahwa merwka memberikan hasil yang paling akurat mungkin.</li>
          <li>Kreativitas. Bagian dari pemrograman AI ini menggunakan jaringan saraf, sistem berbasis aturan, metode statistik, dan teknik AI lainnya untuk menghasilkan gambar, teks, musik, dan ide-ide baru.</li>
        </ul>

        <h4>Kelebihan AI</h4>
        <ul>
          <li>
            Keahlian dalam pekerjaan berorientasi detail: AI telah membuktikan kemampuannya untuk mendiagnosis beberapa jenis kanker, seperti kanker payudara dan melanoma, dengan akurasi yang setara atau bahkan lebih baik dibandingkan
            dokter manusia.
          </li>
          <li>
            Efisiensi waktu untuk tugas yang membutuhkan data besar: AI banyak digunakan di industri yang membutuhkan analisis data besar, seperti perbankan, sekuritas, farmasi, dan asuransi, untuk mempercepat analisis dataset besar.
            Institusi keuangan, misalnya, rutin menggunakan AI untuk memproses aplikasi pinjaman dan mendeteksi kecurangan.
          </li>
          <li>Penghematan tenaga kerja dan peningkatan produktivitas: Automasi gudang, sebuah praktik yang semakin populer selama pandemi, diharapkan akan berkembang lebih lanjut dengan integrasi AI dan machine learning.</li>
          <li>Menghasilkan hasil yang konsisten: Alat terbaik dalam translasi AI memberikan tingkat konsistensi yang tinggi, memberikan kemampuan bahkan bagi bisnis kecil untuk mencapai pelanggan dalam bahasa asli mereka.</li>
          <li>Agen virtual berbasis AI selalu tersedia: Program AI tidak perlu tidur atau istirahat, memberikan layanan 24/7.</li>
        </ul>

        <h4>Kelemahan AI</h4>
        <ul>
          <li>Mahal</li>
          <li>Memerlukan keahlian teknis yang mendalam</li>
          <li>Kurangnya kemampuan untuk menggeneralisasi dari satu tugas ke tugas lainnya.</li>
          <li>Menghilangkan pekerjaan manusia, meningkatkan tingkat pengangguran.</li>
        </ul>

        <h4>Strong AI vs. Weak AI</h4>
        <ul>
          <li>Weak AI, juga dikenal sebagi AI sempit, dirancang dan dilatih untuk menyelesaikan tugas tertentu. Robot industri dan asisten pribadi virtual, seperti Siri milik Apple, menggunakan weak AI.</li>
          <li>
            Strong AI, juga dikenal sebagai kecerdasan buatan umum, menggambarkan pemprograman yang dapat mereplikasi kemampuan kognitif otak manusia. Ketika dihadapkan dengan tugas yang tidak dikenal, sistem AI kuat dapat menggunakan
            logika samar untuk menerapkan pengetahuan dari satu domain ke domain lain dan menemukan solusi secara mandiri. Secara teoritis, program AI kuat seharusnya mampu melewati uji Turing dan argumen Ruang China.
          </li>
        </ul>

        <h4>Apa saja 4 jenis kecerdasan buatan?</h4>
        <img src={AI} alt="AI image" />
        <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://blog.hubspot.com/marketing/types-of-ai </p>
        <p>Terdapat empat jenis kecerdasan buatan yang dapat dikategorikan, menurut Arend Hintze, seorang asisten professor biologi integratif dan ilmu komputer di Michigan State University.</p>
        <ol>
          <li>Reactive machines. Sistem AI ini tidak memiliki memori dan bersifat spesifik pada tugas tertentu. Contohnya adalah Deep Blue, program catur IBM yang mengalahkan Garry Kasparov pada 1990-an.</li>
          <li>
            Limited memory. Sistem AI ini memiliki memori, memungkinkan mereka menggunakan pengalaman masa lalu untuk menginformasikan keputusan di masa depan. Beberapa fungsi pengambilan keputusan pada mobil otonom dirancang dengan
            pendekatan ini.
          </li>
          <li>
            Theory of mind. Ketika diterapkan pada AI, ini berarti sistem tersebut memiliki kecerdasan sosial untuk memahami emosi. AI tipe ini akan dapat menyimpulkan niat manusia dan memprediksi perilaku, keterampilan penting agar sistem
            AI menjadi anggota tim manusia.
          </li>
          <li>Self-awareness. Pada kategori ini, sistem AI memiliki rasa diri, memberi mereka kesadaran. Mesin dengan kesadaran diri memahami keadaan mereka saat ini. Jenis AI ini belum ada.</li>
        </ol>
      </div>
    </div>
  );
};

export default ArtificialIntelligence;
