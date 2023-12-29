import glukoma1 from "/img/glukoma1.jpeg";
import glukoma2 from "/img/glukoma2.jpeg";
import glukoma3 from "/img/glukoma3.jpeg";
import glukoma4 from "/img/glukoma4.jpeg";
import glukoma5 from "/img/glukoma5.jpeg";
import glukoma6 from "/img/glukoma6.jpeg";
import glukoma7 from "/img/glukoma7.jpeg";
import glukoma8 from "/img/glukoma8.jpeg";

const Glaukoma = () => {
  return (
    <div className="container-box">
      <div className="introduction">
        <h2 className="judul">Pengertian Glaukoma</h2>
        <p>Glaukoma adalah suatu kondisi dimana terjadi peningkatan tekanan intraocular bola mata yang dapat berlanjut menjadi kebutaan.</p>
        <p>Glaukoma sendiri terdiri dari beberapa jenis :</p>
        <ol>
          <li> Glaukoma sudut terbuka primer</li>
          <li> Glaukoma sudut tertutup primer</li>
          <li> Glaukoma sekunder</li>
          <li> Normo tension glaucoma</li>
        </ol>
      </div>
      <hr />
      <div className="content">
        <ol>
          <li>
            <span>Glaukoma Sudut Terbuka Primer (POAG) </span>
            <img className="img" src={glukoma1} />
            <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src: https://images.app.goo.gl/3tKWfgZfW4wTx4U59</p>
            <ul>
              <li>
                <span>Definisi : Glaukoma yang terjadi karena adanya masalah pada saluran keluar aquos humor.</span>
              </li>
              <li>
                TIO <span> ≥ 22 mmHg – 30 mmHg</span>
              </li>
              <li>
                <span>
                  Sifat perlangsungan : Kronis, Progresif <span>-&gt;</span> Semakin lama akan semakin memburuk
                </span>
              </li>
              <li>
                <span>Gejala Klinis : Bersifat asimptomatis pada tahap awal </span>(tidak ada nyeri, tidak ada sakit kepala, tidak ada mual muntah, tidak ada mata merah), <span>pada tahap yang lebih advance</span> akan timbul loss vision di
                lapangan pandang bagian perifer sehingga <span>akan tampak seperti tunnel vision.</span>
              </li>
              <li>
                <span>Triad of symptomps : </span>
                <ol>
                  <li>
                    <span> &gt; TIO</span>
                  </li>
                  <li>
                    <span>↑ CDR ( CDR &gt; 0,5)</span>
                  </li>
                  <li>
                    <span>Tunnel Vision</span>
                  </li>
                </ol>
              </li>
              <li>
                <span>Patofisiologi : </span>Karena adanya masalah pada saluran keluar dari aquous humor <span>-&gt;</span> penumpukan aquous humor di COA <span>-&gt;</span> peningkatan tekanan intraocular secara progresif{" "}
                <span>-&gt;</span> disfungsi vaskuler (menyebabkan iskemia saraf optik) dan disfungsi mekanis (menyebabkan kompresi akson) <span>-&gt;</span> Irreversible peripheral visual loss
              </li>
              <li>
                <span>Penegakan Diagnosis</span>
                <p>- Tes Lapang Pandang (untuk menilai apakah terdapat kehilangan penglihatan perifer)</p>
                <p>- Goneoskopi (untuk mengukur berapa TIOnya)</p>
              </li>
              <li>
                <span>Medikamentosa</span>
                <ol>
                  <li>Prostaglandin analog 1×1 (Pemberiannya pada malam hari) (Untuk melancarkan aliran aquous humor melalui trabecular meshwork atau melalui uveasklera pathway)</li>
                  <li>Tetes Timolol 0,25% - 0,5% 2×1 / Tetes Betaksolol 0,2% - 0,5% 2×1 (Untuk hambat Produksi)</li>
                  <li>Asetazolamid Tablet 125-250 mg 4×1 (Menghambat produksi secara langsung dari aquous humor karena berperan sebagai Carbonic anhidrase inhibitor)</li>
                  <li>Apabila sudah dalam tahap yang lebih lanjut atau tidak membaik dengan pengobatan maka perlu dilakukan tindakan seperti : Laser trabekuloplasti, Tindakan bedah (trabekulektomi)</li>
                </ol>
              </li>
            </ul>
          </li>
          <hr />
          <li>
            <span>Glaukoma Sudut Tertutup Primer (PCAG)</span>
            <img className="img" src={glukoma2} />
            <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src: https://images.app.goo.gl/3tKWfgZfW4wTx4U59</p>
            <ul>
              <li>
                <span>Definisi: Glaukoma yang terjadi karena adanya hambatan pada aliran aquos humor dan saluran keluarnya.</span>
              </li>
              <li>
                <span>TIO 60-80 mmHg</span>
              </li>
              <li>
                <span>Sifat perlangsungannya : Akut dan tiba tiba</span>
              </li>
              <li>
                <span>Faktor Predisposisi :</span>
                <p>- sudut sempit</p>
                <p>- bilik mata depan dangkal</p>
                <p>- aksial length yang pendek (pada kasus hipermetrop)</p>
                <p>- diameter kornea kecil</p>
                <p>- usia</p>
              </li>
              <li>
                <span>Etiologi :</span>
                <p>
                  - <span>blokade pupil (paling sering menyebabkan glaucoma tertutup primer)</span>
                </p>
                <p>
                  - lensa yang membesar (pada kasus katarak stadium mature) <span>-&gt;</span> glaucoma sekunder et causa katarak
                </p>
                <p>
                  - dislokasi lensa ke anterior <span>-&gt;</span> <span> glaucoma sekunder et causa dislokasi lensa</span>
                </p>
                <p>sinekia posterior (kondisi dimana terjadi perlekatan antara iris terhadap permukaan lensa) </p>
                <p>- edema corpus siliaris</p>
                <p>- galukoma malignant</p>
              </li>
              <li>
                <span>Patofisiologi :</span>
                <p>
                  Faktor-faktor predisposisi <span>-&gt;</span> Midriasis pupil <span>-&gt;</span> bagian pangkal ujung dari iris cenderung akan bersentuhan dengan permukaan lensa <span>-&gt;</span> aquous humor yang diproduksi oleh corpus
                  siliaris akan menumpuk di belakang dari iris <span>-&gt;</span>
                  tekanannya akan semakin tinggi di belakang iris <span>-&gt;</span> iris perifer akan menggembung ke arah depan <span>-&gt;</span> (Iris bombans) <span>-&gt;</span> menutup trabecular meshwork <span>-&gt;</span> penumpukan
                  aquous humor <span>-&gt;</span> peningkatan tekanan TIO secara akut dan tiba-tiba <span>-&gt;</span>
                  menekan ke posterior (retina) <span>-&gt;</span> Nyeri pada mata, blurred vision
                </p>
              </li>
              <li>
                <span>Terapi :</span>
                <p>- Iridektomi/laser : 48 – 72 jam</p>
                <p>- Trabekulektomi : 48-72 jam</p>
              </li>
            </ul>
          </li>
          <hr />
          <li>
            <span>Normo Tension Glaukoma (NTG)</span>
            <ul>
              <li>
                <span>Definisi: Glaukoma dengan sudut terbuka yang memiliki TIO dalam kisaran yang normal</span>
              </li>
              <li>
                <span>&lt;= mmgHg (tekanan normal)</span>
              </li>
              <li>
                <span>Etiologi : Iskemia papil saraf optic</span>,gangguan metabolic,neurodegenerative,stress oksidatif, biomekanik abnormal pada lamina cribrosa
              </li>
              <li>
                <span>Gejala klinis : Penyempitan pada lapangan pandang</span>
              </li>
              <li>
                Patofiologi : Insufisiensi aliran darah ke retina <span>-&gt;</span> kematian dari sel ganglion retinal dan defek pada nervus optik <span>-&gt;</span> defek lapang pandang (masih kurang diketahui, bersifat multifactorial,
                dan lebih sering dikaitkan dengan insufisiensi aliran darah ke retina)
              </li>
              <li>
                <span>Tatalaksana :</span> Evaluasi pasien, apabila terdapat tanda-tanda peningkatan TIO maka dapat diberikan obat penurun TIO atau dipertimbangkan untuk dilakukan tindakan.
              </li>
            </ul>
          </li>
          <hr />
          <li>
            <span>Glaukoma Sekunder</span>
            <ul>
              <li>
                <span>Definisi : Glaukoma yang disebabkan karena penyakit mata lainnya, antara lain sebagai berikut :</span>
              </li>
              <p>
                <span>- Katarak</span> Terdapat dua mekanisme yang dapat menyebabkan glaukoma
              </p>
              <ol>
                <li>
                  <span>Katarak pada stadium mature</span> yang ditandai dengan lensa yang membesar yang berisi cairan, lensa yang membesar ini akan bersentuhan dengan iris di depannya dan menutup celah antara pupil dan iris sehingga dapat
                  <span>menyebabkan glaucoma sudut tertutup sekunder.</span>
                  <img className="img" src={glukoma3} />
                  <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src: https://images.app.goo.gl/rdNCUZcfmiYzxUUP8</p>
                </li>
                <li>
                  <span> Katarak pada stadium hipermature</span> yang ditandai dengan lensa yang mencair dan protein-protein lensa terlepas akan menutup trabecular meshwork, sehingga dapat
                  <span>menyebabkan glaucoma sudut terbuka sekunder.</span>
                  <img className="img" src={glukoma4} />
                  <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src: https://images.app.goo.gl/qdx72rK6xbopTuxe8</p>
                </li>
              </ol>
              <p>
                <span>- Hifema :</span> Terdapatnya darah yang menyumbat Trabekular Meshwork, sehingga dapat menyebabkan glaucoma sudut terbuka sekunder.
                <img className="img" src={glukoma5} />
                <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src: https://images.app.goo.gl/rDSnXiJ62YdbwBDeA</p>
              </p>
              <p>
                <span>- Uveitis : </span> Terdapat dua mekanisme yang dapat menyebabkan glaukoma
                <img className="img" src={glukoma6} />
                <p style={{ fontStyle: "italic", marginBottom: "20px", textAlign: "center" }}>src: https://images.app.goo.gl/VqZ6msZXnpPrMMCy5</p>
              </p>
              <ol>
                <li>
                  <span>
                    Seklusi pupil oleh sel-sel radang <span>-&gt;</span> Glaukoma sudut tertutup sekunder
                  </span>
                </li>
                <li>
                  <span>
                    Sel-sel inflamasi menyumbat trabecular meshwork <span>-&gt;</span> Glaukoma sudut terbuka sekunder
                  </span>
                </li>
              </ol>
              <p>
                <span>
                  - Penggunaan kortikosteroid jangka panjang : Dapat merusak Trabekular meshwork <span>-&gt;</span> Glaukoma sudut terbuka sekunder
                </span>
              </p>
              <p>
                <span>- Rubeoisis Iridis : Komplikasi dari DM, yaitu timbulnya jaringan fibrovaskular di sudut mata depan</span>
                <img className="img" src={glukoma7} />
                <p style={{ fontStyle: "italic", marginBottom: "20px" }}>src: https://images.app.goo.gl/FkdBEUuJEAbapjHX8</p>
              </p>
              <p>
                <span>
                  - Sublukasis lensa anterior : Posisi lensa yang lebih kearah anterior <span>-&gt;</span> Menutup celah iris dan lensa Glaukoma sudut tertutup sekunder
                </span>
                <img className="img" src={glukoma8} />
                <p style={{ fontStyle: "italic", marginBottom: "20px" }}>src: https://images.app.goo.gl/3M8umapJqi28DFk79</p>
              </p>

              <li>
                <span>Tatalaksana : Obati causanya</span>
              </li>
            </ul>
          </li>
        </ol>
      </div>

      <div className="related-post">
        <h2>Related Post</h2>
        <div className="article-list">
          <ul>
            <li>
              <a href="/blefaritis">Blefaritis | Kedokteran</a>
            </li>
            <li>
              <a href="/entropion">Entropion | Kedokteran</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Glaukoma;
