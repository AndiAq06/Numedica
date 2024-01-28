import hordeolum1 from "/img/hordeolum1.jpeg";
import hordeolum2 from "/img/hordeolum2.jpeg";

const Hordeolum = () => {
  return (
    <div className="container-box">
      <div className="introduction">
        <h2 className="judul">Hordeolum</h2>
        <ul>
          <li>
            Hordeolum adalahh inflamasi akut kelenjar meibom, Zeis atau Moll di kelopak mata akibat infeksi <i> Staphylococcus aureus. </i>
          </li>
          <li>Hordeolum dibedakan menjadi dua berdasarkan letak anatomisnya yaitu: Hordeolum eksterna dan Hordeolum interna</li>
        </ul>
      </div>
      <hr />

      <div className="content">
        <h3>Hordeolum Eksterna</h3>
        <img className="img" src={hordeolum1} alt="hordeolum 1" />
        <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://images.app.goo.gl/FiyvNWYJLke7q3329</p>
        <p>
          Hordeolum eksterna terbentuk jika infeksi mengenai kelenjar Zeis atau Moll yang letaknya lebih superfisial. Dapat menginfeksi semua usia, tetapi sering ditemukan pada anak-anak, dewasa muda, dan orang-orang dengan
          immunocompromise. Patogenesis terjadinya hordeolum eksterna, terjadi apabila terdapat masalah pada kelenjar Zeis dan Moll, kelenjar Zeis berfungsi untuk menghasilkan sebum yang bersifat antiseptik yang dapat menghambat pertumbuhan
          bakteri sedangkan kelenjar Moll berfungsi untuk menghasilkan imunoglubulin A, musin 1, dan lisosom yang penting dalam sistem imunitas mata terhadap bakteri. Saat kelenjar ini terbendung, sistem proteksi yang ada di mata terganggu,
          akibatnya lebih mudah untuk terjadinya infeksi oleh Staphylococcus aureus sebagai patogen yang paling sering ditemukan. Setelah terjadi suatu respons inflamasi dengan infiltrasi leukosit, maka akan timbul suatu saccus yang berisi
          nanah atau terbentuk abses.
        </p>

        <h3>Hordeolum Interna</h3>
        <img className="img" src={hordeolum2} alt="hordeolum 2" />
        <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src:https://images.app.goo.gl/w68EwFXDdbAdXRHp7</p>
        <p>
          Hordeoulum interna terbentuk jika infeksi mengenai kelenjar meibom yang terletak di bagian posterior kelopak mata. Patogenesis terjadinya hordeolum interna, terjadi apabila terdapat masalah pada kelenjar meibom, kelenjar meibom
          adalah kelenjar sebaceous yang ditemukan di bagian tarsus kelopak mata. Kelenjar ini menghasilkan lapisan berminyak pada permukaan mata yang merupakan komponen dari tear film, yang mencegah agar tidak terjadi penguapan yang
          berlebihan air mata. Ketika kelenjar meibom terinfeksi oleh bakteri, maka akan terjadi hordeolum interna. Karena letak dari kelenjar meibom yang lebih ke arah posterior di dalam kelopak mata, hordeolum interna memiliki penampilan
          yang kurang tegas dibandingkan hordeolum eksterna. Setelah respons inflamasi lokal dan dengan adanya infiltrasi leukosit maka akan terbentuk kantong purulen atau abses.
        </p>

        <h3>Manifestasi Klinis:</h3>
        <ul>
          <li>Nyaeri, tenderness</li>
          <li>Kemerahan dan pembengkakan kelopak mata</li>
          <li>Kongesti, kemosis pada kongjungtiva</li>
          <li>Supuration pada margin kelopak mata disekitar akar bulu mata</li>
          <li>Fluktuasi</li>
        </ul>

        <h3>Diagnosis Banding</h3>
        <ul>
          <li>Blefaritis marginalis</li>
          <li>Kalazion</li>
          <li>Dakrioadenitis</li>
          <li>Selulitis</li>
          <li>Abses kelopak</li>
          <li>Kista dermoid</li>
          <li>Moluskum kontangiosum, dan lain-lain</li>
        </ul>

        <h3>Tatalaksana:</h3>
        <p>
          <span>Hordeolum Eksterna</span>
        </p>
        <ul>
          <li>Kompres air hangat selama 10-15 menit, 3-4 kali tiap hari.</li>
          <li>Antibiotik topikal : Salep mata kloramfenikol 1% (tiap 1-3 jam) atau Polymixin B/ Neomycin 0,35% (1-4 kali sehari)</li>
          <li>Antibiotik oral : Amoksisilin/ asam klavulanat 3×500 mg (dosis anak 20-40 mg/kgBB/hari dibagi 3 dosis)</li>
          <li>Jika setelah 48 jam pengobatan tidak tampak perbaikan dan pasien sudah tidak merasakan nyeri maka dapat dilakukan : Insisi horizontal untuk meminimalisi bekas sayatan, mengikuti struktur anatomis dari m. orbicularis oculi</li>
        </ul>

        <p>
          <span>Hordeoulum Interna</span>
        </p>
        <ul>
          <li>Kompres air hangat selama 10-15 menit, 3-4 kali tiap hari.</li>
          <li>Antibiotik topikal : Salep mata kloramfenikol 1% (tiap 1-3 jam) atau Polymixin B/ Neomycin 0,35% (1-4 kali sehari)</li>
          <li>Antibiotik oral : Amoksisilin/ asam klavulanat 3×500 mg (dosis anak 20-40 mg/kgBB/hari dibagi 3 dosis)</li>
          <li> Jika setelah 48 jam pengobatan tidak tampak perbaikan dan pasien sudah tidak merasakan nyeri maka dapat dilakukan : Insisi vertical dipermukaan konjungtiva tarsal, untuk mecegah tersayatnya kelenjar meibom</li>
        </ul>
      </div>
    </div>
  );
};

export default Hordeolum;
