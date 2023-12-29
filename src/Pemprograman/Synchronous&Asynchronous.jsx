const Synchronous = () => {
  return (
    <div className="container-box">
      <h2 className="judul"> Synchronous & Asynchronous dalam Pemrograman</h2>
      <p>
        Dalam dunia pemrograman konsep synchronicity (sinkronisasi) dan asynchronicity (asinkronisasi) merupakan dua pendekatan utama yang memengaruhi bagaimana proses dan tugas dieksekusi dalam sebuah program. Perbedaan yang cukup
        signifikan antara keduanya memiliki dampak besar pada kinerja program,responsivitas dan cara pengelolaan sumber daya pada aplikasi perangkat lunak.
      </p>

      <h3>Synchronous (Sinkron)</h3>
      <p>
        Operasi sinkron adalah tipe operasi di mana satu tugas atau proses harus selesai sebelum tugas atau proses lain dapat dikerjakan. Dalam konteks pemrograman, ini berarti bahwa baris kode dieksekusi satu per satu secara berurutan.
        Ketika suatu operasi dipanggil, program akan menunggu sampai operasi tersebut selesai sebelum melanjutkan ke operasi berikutnya. Ini bisa menjadi metode yang mudah dipahami karena urutan eksekusi yang jelas dan mudah diprediksi.
      </p>
      <p>
        Kelebihan dari pendekatan ini yaitu kemudahan dalam pengelolaan aliran program.Namun, dalam beberapa kasus, operasi sinkron dapat menyebabkan aplikasi menjadi lambat jika suatu operasi memakan waktu yang lama. Misalnya, saat
        mengunduh data besar dari internet, aplikasi mungkin terasa terblokir atau tidak responsif selama proses ini.
      </p>

      <h3>Asynchronous (Asinkron)</h3>
      <p>
        Di sisi lain, operasi asinkron memungkinkan tugas-tugas atau proses-proses untuk dieksekusi secara independen, tanpa hharus menunggu tugas sebelumnya selesai. Ini memungkinkan program untuk melanjutkan eksekusi kode tanpa harus
        berhenti dan menunggu operasi yang memakan waktu yang lama untuk dieksekusi terlebih dahulu.
      </p>
      <p>
        Dalam pemrograman asinkron, tugas yang membutuhkan waktu dapat dijalankan di latar belakang, dan ketika mereka selesai, hasilnya akan diproses. Hal ini memungkinkan aplikasi untuk tetap responsif terhadap interaksi pengguna sambil
        melakukan tugas-tugas yang memakan waktu di belakang layar
      </p>
      <p>
        Salah satu contoh yang umum dari pemrograman asinkron adalah saat mengunduh file besar. Sebagai contoh, dalam aplikasi web modern, permintaan untuk mengunduh data tidak menghentikan pengguna untuk berinteraksi dengan elemen lain di
        halaman web.
      </p>
      <h3>Perbandingan Kinerja Synchronous & Asynchronous</h3>
      <p>
        Kelebihan utama dari pendekatan asinkron adalah peningkatan responsivitas aplikasi. Namun, kompleksitas pengelolaan aliran program dan pengendalian keseluruhan dapat menjadi lebih sulit karena adanya banyak operasi yang berjalan
        secara bersamaan. Sementara itu, pendekatan sinkron memiliki kejelasan dalam aliran eksekusi kode, namun, dapat menghambat responsivitas aplikasi terutama saat ada operasi yang memakan waktu lama.
      </p>
      <p>
        <span>Berikut tabel perbandingan Synchronous (sinkron) dan Asynchronous (asinkron) dalam pemrograman</span>{" "}
      </p>
      <table>
        <tr>
          <th>Perbedaan</th>
          <th>Synchronous (Sinkron)</th>
          <th>Asynchronous (Asinkron)</th>
        </tr>
        <tr>
          <td>Eksekusi</td>
          <td>Berurutan, satu per satu</td>
          <td>Independen, tidak menunggu tugas sebelumnya selesai</td>
        </tr>
        <tr>
          <td>Penanganan Waktu</td>
          <td>Menunggu satu tugas selesai sebelum yang berikutnya dimulai</td>
          <td>Bisa menjalankan tugas tanpa menunggu tugas sebelumnya selesai</td>
        </tr>
        <tr>
          <td>Responsivitas</td>
          <td>Cenderung menghambat responsivitas aplikasi jika tugas memakan waktu lama</td>
          <td>Meningkatkan responsivitas dengan memungkinkan aplikasi untuk tetap berinteraksi sambil menyelesaikan tugas di latar belakang</td>
        </tr>
        <tr>
          <td>Pengelolaan Aliran Program</td>
          <td>Mudah dipahami dengan aliran eksekusi yang jelas</td>
          <td>Lebih kompleks karena banyak operasi yang berjalan secara bersamaan</td>
        </tr>
        <tr>
          <td>Penggunaan</td>
          <td>Cocok untuk tugas yang memerlukan urutan eksekusi yang jelas</td>
          <td>Berguna untuk tugas yang membutuhkan kinerja responsif dan penanganan tugas yang memakan waktu</td>
        </tr>
      </table>
    </div>
  );
};

export default Synchronous;
