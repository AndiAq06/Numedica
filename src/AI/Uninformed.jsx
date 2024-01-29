import dfs from "/img/dfs.png";
import bfs from "/img/BFS.png";
import ucs from "/img/ucs.png";
import dls1 from "/img/dls1.png";
import dls2 from "/img/dls2.png";
import idds from "/img/IDDS.png";
import bs from "/img/bs.png";
import uninformed from "/img/uninformed.png";

const Uninformed = () => {
  return (
    <div className="container-box">
      <div className="introduction">
        <h2 className="judul">Uninformed Search Algorithms</h2>

        <p>
          Siapapun, baik manusia maupun sistem kecerdasan buatan, perlu mempertimbangkan semua kemungkinan cara untuk mencapai keadaan tujuan (jika ada) dari awal atau keadaan saat ini, beserta semua konsekuensinya. Demikian pula, sistem AI
          atau pemprograman Python menggunakan berbagai algoritma pencarian untuk mencapai keadaan tujuan tertentu atau untuk memecahkan suatu masalah.
        </p>
        <p>
          "Uninformed Search", seperti namanya, berarti mesin mengikuti suatu algoritma tanpa mempedulikan apakah langkah-langkah yang diambil benar atau salah, efisien atau tidak. Algoritme ini bersifat brute force, tidak memeiliki
          informasi tambahan tentang ruang pencarian selain informasi tentang cara melintasi atau mengunjungi node pada pohon pencaharian. Oleh karena itu, algoritma pencarian yang tidak memeiliki informasi ini juga disebut algoritma
          pencarian buta.
        </p>
        <p>
          Algoritma pencarian menghasilkan pohon pencarian tanpa menggunakan pengetahuan khusus tentang domain masalah, hanya dengan pendekatan brute force. Mereka tidak memiliki informasi latar belakang seperti algoritma pencarian
          berinformasi tentang cara mendekati tujuan. Namun, inilah dasar-dasar algoritma pencarian dalam AI.
        </p>

        <h4>Apa itu Uninformed Search?</h4>
        <p>
          Uninformed Search, juga dikenal sebagain pencarian buta, adalah algoritma pencarian yang mengeksplorasi ruang masalah tanpa pengetahuan atau informasi spesifik tentang masalah selain keadaan awal dan kemungkinan tindakan yang
          harus diambil. Algoritma ini tidak memiliki heuristik khusus domain atau pengetahuan sebelumnya tentang masalah tersebut. Algoritme ini biasanya kurang efisien dibandingkan algoritme penelusuran inormasi, namu berguna dalam
          skenario tertentu atau sebagi dasar untuk teknik penelusuran lebih lanjut.
        </p>
        <h4>Jenis Algoritma Uninformed Search</h4>
        <p>Ada beberapa jenis algoritma Uninformed Search dalam AI adalah sebagai berikut:</p>
        <ul>
          <li>Depth First Search</li>
          <li>Breadth-First Search</li>
          <li>Depth Limited Search</li>
          <li>Uniform Cost Search</li>
          <li>Iterative Deepening Depth First Search</li>
          <li>Bidirectional Search (if applicable)</li>
        </ul>

        <p>Namun, sebelum kita masuk ke jenis pencarian, mari kita kenali beberapa istilah yang sering digunakan dibagian-bagian selanjutnya.</p>
        <ul>
          <li>
            <span>State:</span> Menyediakan semua informasi tentang lingkungan.
          </li>
          <li>
            <span>Goal State:</span> Kondisi hasil yang diinginkan dalam suatu permasalahan tertentu dan jenis algoritma pencarian yang kita cari.
          </li>
          <li>
            <span>Goal Test</span> Tes untuk menentukan apakah suatu keadaan tertentu merupakan keadaan tujuan.
          </li>
          <li>
            <span>Path/Step Cost</span> Ini adalah bilangan bulat yang mewakili biaya untuk berpindah dari satu node ke node lainnya.
          </li>
          <li>
            <span>Space Complexity</span> Suatu fungsi yang menggambarkan jumlah ruang (memori) yang dibutuhkan suatu algoritma dalam hal masukan ke algoritma.
          </li>
          <li>
            <span>Time Complexity</span> Suatu fungsi yang menggambarkan jumlah waktu yang dibutuhkan algoritma dalam kaitannya dengan input ke algoritma.
          </li>
        </ul>

        <h3>Depth First Search (DFS)</h3>
        <p>
          Ini adalah algoritma pencarian dimana pohon pencarian akan dilintasi dari node root. Ia akan melintasi, mencari kunci di daun cabang tertentu. Jika kunci tidak ditemukan, pencari menelusuri kembali langkahnya (backtracking) ke
          titik di mana cabang lainnya belum dijelajahi, dan prosedur yang sama diulangi untuk cabang lainnya.
        </p>
        <img src={dfs} alt="DFS image" />
        <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://www.analyticsvidhya.com/blog/2021/02/uninformed-search-algorithms-in-ai/</p>
        <p>
          Gambar di atas menjelaskan dengan jelas Algoritma DFS. Pertama, teknik pencarian dimulai dari akar node A kemudian menuju ke cabang dimana terdapat node B (urutan leksikografis). Kemudian menuju ke node D karena DFS, dan dari D
          hanya ada satu node yang harus dilalui yaitu node H. Namun setelah node H tidak memiliki node anak, kita menelusuri kembali jalur yang kita lalui sebelumnya dan kembali mencapai node B, tapi kali ini, kita melintasi jalur yang
          belum terlacak melintasi node E. Ada dua cabang di node E, tapi mari kita melintasi node I (urutan leksikografis) dan kemudian menelusuri kembali jalur tersebut karena kita tidak memiliki jumlah node lagi setelah E untuk
          melintasi. Kemudian kita melintasi simpul J karena ini adalah cabang yang belum dilacak dan kemudian kita kembali menemukan bahwa kita berada di ujung dan menelusuri kembali jalur tersebut dan mencapai simpul B dan kemudian kita
          akan melintasi cabang yang belum dilacak, yaitu melalui simpul C, dan mengulangi proses yang sama. Ini disebut Algoritma DFS.
        </p>
        <h4>Keuntungan</h4>
        <ul>
          <li>DFS memerlukan memori yang sangat sedikit karena hanya perlu menyimpan tumpukan node pada jalur dari akr ke node saat ini.</li>
          <li>Dibutuhkan lebih sedikit waktu untuk mencapai node tujuan dibandingkan algoritma BFS.</li>
        </ul>
        <h4>Kekurangan</h4>
        <ul>
          <li>Ada kemungkinan kejadian serupa akan terus terjadi di banyak State bagian dan tidak ada jaminan akan menemukan solusi. </li>
          <li>Algoritme DFS digunakan untuk pencarian mendalam, dan terkadang bisa sampai ke loop tak terbatas.</li>
        </ul>

        <h3>Breadth-First Search (BFS)</h3>
        <p>
          Ini adalah algoritma pencarian grafik lain dalam AI yang melintasi luas untuk mencari tujuan di pohon. Ia memulai pencarian dari simpul akar dan memperluas simpul penerus sebelum memperluas lebih jauh ke arah yang lebih luas dan
          melintasi simpul-simpul tersebut daripada mencari berdasarkan kedalaman.
        </p>
        <img src={bfs} alt="DFS image" />
        <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://www.analyticsvidhya.com/blog/2021/02/uninformed-search-algorithms-in-ai/</p>
        <p>
          Gambar di atas merupakan contoh Algoritma BFS. Dimulai dari root node A kemudian melintasi node B. Sampai langkah ini sama dengan DFS. Namun di sini, alih-alih memperluas turunan dari B seperti dalam kasus DFS, kita memperluas
          turunan lain dari A, yaitu node C karena BFS, lalu berpindah ke level berikutnya dan melintasi dari D ke G, lalu dari H ke K dalam contoh tipikal ini. Untuk menelusuri di sini, kami hanya mempertimbangkan urutan leksikografisnya.
          Ini adalah bagaimana Algoritma BFS diimplementasikan.
        </p>

        <h4>Keuntungan</h4>
        <ul>
          <li>BFS akan membaerikan solusi jika ada solusi</li>
          <li>Jika terdapat lebih dari satu solusi untuk suatu masalah, maka BFS kan memberikan solusi minimal yang memerlukan langkah paling sedikit.</li>
        </ul>
        <h4>Kekurangan</h4>
        <ul>
          <li>Ini memerlukan banyak memori karena setiap level pohon harus disimpan dalam memori untuk berkembang ke level berikutnya.</li>
          <li>BFS membutuhkan banyak waktu jika solusinya jauh dari root node.</li>
        </ul>

        <h3>Uniform Cost Search (UCS)</h3>
        <p>
          Uni Cost Search (UCS) adalah algoritma traversal dan pencarian grafik yang digunakan dalam AI dan ilmu komputer. UCS mengeksplorasi grafik dengan memperluas node secara bertahap mulai dari node awal dan bergerak menuju tujuan
          sambil mempertimbangkan biaya yang terkait dengan sisi atau langkah.
        </p>
        <p>
          Algoritma ini digunakan ketika biaya langkah tidak sama, tetapi memerlukan solusi optimal untuk keadaan tujuan. Dalam kasus seperti ini, kami menggunakan Uniform Cost Search untuk menemukan tujuan dan jalur, termasuk biaya
          kumulatif untuk memperluas setiap node dari node akar ke node tujuan. Itu tidak mendalam atau luas. Ia mencari node berikutnya dengan biaya terendah, dan dalam kasus biaya jalur yang sama, mari kita pertimbangkan urutan
          leksikografis dalam kasus kita.
        </p>
        <img src={ucs} alt="DFS image" />
        <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://www.analyticsvidhya.com/blog/2021/02/uninformed-search-algorithms-in-ai/</p>
        <p>
          Pada gambar di atas, anggap S sebagai simpul awal dan G sebagai keadaan tujuan. Dari node S kita mencari node untuk diperluas, dan kita memiliki node A dan G, namun karena ini adalah UCS maka node tersebut diperluas dengan biaya
          langkah terendah, sehingga node A menjadi penerusnya, bukan node tujuan yang kita perlukan, G. Dari A kita lihat node turunannya B dan C. Karena C mempunyai biaya langkah paling rendah, maka ia melewati node C. Lalu kita lihat
          penerus dari C, yakni D dan G. Karena biaya ke D rendah, kami memperluas bersama dengan node D. Karena D hanya memiliki satu anak G yang merupakan status tujuan yang kami perlukan, kami akhirnya mencapai status tujuan D dengan
          menerapkan Algoritma UFS. Kalau kita sudah menempuh cara ini, yang pasti total biaya jalur kita dari S ke G hanya 6 bahkan setelah melintasi banyak node daripada langsung ke G yang biayanya 12 dan 6&lt;&lt;12 (dalam hal biaya
          langkah). Namun hal ini mungkin tidak berhasil pada semua kasus.
        </p>
        <h4>Keuntungan</h4>
        <ul>
          <li>Pencarian UCS merupakan metode pencarian yang optimal karena di setiap state, jalur dengan biaya paling kecil dipilih.</li>
        </ul>

        <h4>Kekurangan</h4>
        <li>Ia tidak peduli dengan jumlah langkah atau menemukan jalur terpendek yang terlibat dalam masalah pencarian, dan hanya memikirkan biaya jalur. Algoritme ini mungkin terjebak dalam loop tak terbatas.</li>

        <h3>Depth Limited Search (DLS)</h3>
        <p>
          DLS dalah algoritma pencarian tanpa informasi. Ini merip dengan DFS tetapi hanya berbeda dalam beberapa hal. Kekurangan DFS diatasi dengan menyediakan pencarian kedalaman Pertama dengan batas kedalamn yang telah ditentukan.
          Artinya, node di kedalaman diperlakukan seolah-olah tidak memiliki penerus. Pencarian ini disebut Depth Limited Search (DLS). Pencarian dengan DLS dapat dihentikan dalam dua kasus:
        </p>
        <ol>
          <li>Standard Failure Value (SFV): SFV menyatakan bahwa tidak ada solusi terhadap masalah tersebut.</li>
          <li>Cutoff Failure Value (CFV): Nilai Kegagalan Batas menunjukkan bahwa tidak ada solusi dalam batas kedalaman yang diberikan.</li>
        </ol>

        <img src={dls1} alt="DFS image" />
        <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://www.analyticsvidhya.com/blog/2021/02/uninformed-search-algorithms-in-ai/</p>

        <p>
          Gambar di atas menggambarkan implementasi algoritma DLS. Node A berada pada Limit = 0, diikuti oleh node B, C, D, dan E pada Limit = 1 dan node F, G, dan H pada Limit = 2. Status awal kita dianggap sebagai node A, dan status
          tujuan kita adalah node H. Untuk mencapai node H, kami menerapkan DLS. Jadi dalam kasus pertama, mari tetapkan batas kita ke 0 dan cari tujuannya.
        </p>
        <p>
          Sejak batas 0, algoritme akan berasumsi bahwa tidak ada anak setelah batas 0 meskipun node ada lebih jauh. Sekarang, jika kita menerapkannya, kita hanya akan melintasi node A karena hanya ada satu node di batas 0, yang pada
          dasarnya merupakan status tujuan kita. Jika kita menggunakan SFV maka dikatakan tidak ada penyelesaian masalah pada batas 0, sedangkan LCV menyatakan tidak ada penyelesaian masalah sampai batas kedalaman yang ditetapkan. Karena
          kita tidak dapat menemukan tujuannya, mari kita tingkatkan batas kita menjadi 1 dan terapkan DFS hingga batas 1, meskipun ada lebih banyak node setelah batas 1. Namun node tersebut tidak diperluas karena kita telah menetapkan
          batas kita sebagai 1.
        </p>
        <p>
          Oleh karena itu node A, diikuti oleh B, C, D, dan E, diperluas dalam urutan yang disebutkan. Seperti dalam kasus pertama kita, jika kita menggunakan SFV, dikatakan tidak ada solusi untuk masalah pada batas 1, sedangkan LCV
          mengatakan tidak ada solusi untuk masalah sampai batas kedalaman yang ditetapkan 1. Oleh karena itu kita kembali meningkatkan batas kita dari 1 menjadi 2 dalam gagasan untuk menemukan tujuan.
        </p>
        <p>
          Hingga batas 2, DFS akan diimplementasikan dari node awal A dan turunannya B, C, D, dan E. Kemudian dari E, ia berpindah ke F, dengan cara yang sama menelusuri kembali jalurnya, dan menjelajahi cabang yang belum dijelajahi di mana
          terdapat node G. Ia kemudian menelusuri kembali jalurnya dan menjelajahi anak C, yaitu node H, dan akhirnya kita mencapai tujuan kita dengan menerapkan Algoritma DLS. Misalkan kita memiliki penerus lebih lanjut dari node F tetapi
          hanya node sampai batas 2 yang akan dieksplorasi karena kita telah membatasi kedalamannya dan telah mencapai keadaan tujuan.
        </p>
        <img src={dls2} alt="DLS image" />
        <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://www.analyticsvidhya.com/blog/2021/02/uninformed-search-algorithms-in-ai/</p>
        <p>Pencarian dengan DLS dapat diakhiri dengan dua kondisi kegagalan</p>
        <ol>
          <li>Kegagalan Standar: ini menunjukkan bahwa masalah tidak ada solusinya.</li>
          <li>Nilai Kegagalan Batas: Nilai ini mendefinisikan tidak adanya solusi untuk masalah dalam batas kedalaman tertentu.</li>
        </ol>
        <h4>Keuntungan</h4>
        <ul>
          <li>Pencarian dengan DLS terbatas menghemat memori</li>
        </ul>
        <h4>Kekurangan</h4>
        <ul>
          <li>DLS memiliki kekurangan dalam hal kelengkapan dan tidak optimal jika memiliki lebih dari satu goal state.</li>
        </ul>

        <h3>Iterative Deepening Depth First Search (IDDFS)</h3>
        <p>
          Ini adalah algoritma pencarian yang menggunakan kekuatan gabungan dari algoritma BFS dan DFS. Ini bersifat berulang. Ini mencari kedalaman terbaik di setiap iterasi. Ia melakukan Algoritma hingga mencapai node tujuan. Algoritme
          diatur untuk mencari hingga kedalaman tertentu dan kedalaman tersebut terus meningkat pada setiap iterasi hingga mencapai keadaan tujuan.
        </p>
        <img src={idds} alt="IDDS image" />
        <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://www.analyticsvidhya.com/blog/2021/02/uninformed-search-algorithms-in-ai/</p>
        <p>
          Pada gambar di atas, anggaplah node tujuan adalah G dan status awal adalah A. Kita menjalankan IDDFS dari node A. Pada iterasi pertama, node tersebut hanya melintasi node A pada level 0. Karena tujuannya tidak tercapai, kami
          memperluas node kami, melanjutkan ke level berikutnya, yaitu 1 dan melanjutkan ke iterasi berikutnya. Kemudian pada iterasi berikutnya, kita melintasi node A, B, dan C. Bahkan pada iterasi ini, status tujuan kita tidak tercapai,
          jadi kita memperluas node tersebut ke level berikutnya, yaitu 2, dan node tersebut dilintasi dari memulai node atau iterasi sebelumnya dan memperluas node A, B, C, dan D, E, F, G. Meskipun node tujuan dilalui, kita lanjutkan untuk
          iterasi berikutnya, dan sisa node A, B, D , H, I, E, C, F, K, dan G(BFS & DFS) juga dieksplorasi, dan kami menemukan status tujuan dalam iterasi ini. Ini adalah implementasi dari Algoritma IDDFS.
        </p>
        <h4>Keuntungan</h4>
        <ul>
          <li>Ini menggabungkan keunggulan algoritma pencarian BFS dan DFS dalam hal pencarian cepat dan efisiensi memori.</li>
        </ul>

        <h4>Kekurangan</h4>
        <ul>
          <li>Kelemahan utama IDDFS adalah ia mengulangi semua pekerjaan dari tahap sebelumnya.</li>
        </ul>

        <h3>Bidirectional Search</h3>
        <p>Sebelum lebih lanjut mengenai Bidirectional Search ini, kita pahami dulu beberapa istilahnya</p>
        <ul>
          <li>
            <span>Pencarian Depan</span> Melihat ke depan dari awal
          </li>
          <li>
            <span>Pencarian Mundur</span> Melihat dari akhir ke awal ke belakang
          </li>
        </ul>

        <p>
          Bidirectional Search adalah strategi pencarian yang melibatkan dua arah pencarian pada saat yang bersamaan: satu dari simpul awal (pencarian depan), dan satu dari simpul tujuan (pencarian mundur). Tujuannya adalah untuk
          mempercepat pencarian dengan mengurangi ruang pencarian yang perlu dieksplorasi.
        </p>
        <img src={bs} alt="BS image" />
        <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://www.analyticsvidhya.com/blog/2021/02/uninformed-search-algorithms-in-ai/</p>
        <p>
          Gambar ini memberikan gambaran yang jelas tentang bagaimana BS dijalankan. Kami memiliki node 1 sebagai node awal/root dan node 16 sebagai node tujuan. Algoritma membagi pohon pencarian menjadi dua subpohon. Jadi dari awal node 1,
          kita melakukan pencarian maju, dan pada saat yang sama, kita melakukan pencarian mundur dari node tujuan 16. Pencarian maju melintasi node 1, 4, 8, dan 9, sedangkan pencarian mundur melintasi node 16, 12, 10, dan 9. Kita melihat
          bahwa pencarian maju dan mundur bertemu di node 9, yang disebut node persimpangan. Jadi total jalur yang ditelusuri dengan pencarian forwarding dan jalur yang ditelusuri dengan pencarian mundur merupakan solusi optimal. Ini adalah
          bagaimana Algoritma BS diimplementasikan.
        </p>
        <h4>Keuntungan</h4>
        <ul>
          <li>Karena BS menggunakan berbagai teknik seperti DFS, BFS, DLS, dll., BS efisien dan memerlukan lebih sedikit memori.</li>
        </ul>

        <h4>Kekurangan</h4>
        <ul>
          <li>Penerapan pohon pencarian dua arah sulit dilakukan.</li>
          <li>Dalam pencarian dua arah, seseorang harus mengetahui keadaan tujuan terlebih dahulu.</li>
        </ul>

        <h3>Kesimpulan</h3>
        <p>
          Strategi Uninformed Search untuk penelusuran adalah strategi multiguna yang menggabungkan kekuatan penelusuran terarah dan bekerja dengan cara brute force. Algoritme dari strategi ini dapat diterapkan pada berbagai masalah dalam
          ilmu komputer karena mereka tidak memiliki informasi terkait ruang keadaan dan masalah target, dan mereka tidak mengetahui cara melintasi pohon.
        </p>
        <img src={uninformed} alt="Uninformed image" />
      </div>
    </div>
  );
};

export default Uninformed;
