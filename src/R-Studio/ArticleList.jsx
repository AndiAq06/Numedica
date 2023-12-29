import { useState } from "react";
import { Link } from "react-router-dom";

const ArticleList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [contentPerPage] = useState(10); // Ubah jumlah konten per halaman sesuai kebutuhan
  const articles = [
    {
      id: 1,
      title: "Barplot | R Studio",
      author: "Andi Ardiansyah Nasir",
      link: "barplot-r-studio",
    },
    {
      id: 2,
      title: "Boxplot | R Studio",
      author: "Andi Ardiansyah Nasir",
      link: "boxplot-r-studio",
    },
    {
      id: 3,
      title: "Quantile-Quantile-Plot | R Studio",
      author: "Andi Ardiansyah Nasir",
      link: "quantile-quantile-plot-r-studio",
    },
    {
      id: 4,
      title: "Pie Chart | R Studio",
      author: "Andi Ardiansyah Nasir",
      link: "pie-chart-r-studio",
    },
    // Tambahkan data artikel lainnya di sini
  ];

  // Hitung indeks konten yang akan ditampilkan berdasarkan halaman saat ini
  const indexOfLastContent = currentPage * contentPerPage;
  const indexOfFirstContent = indexOfLastContent - contentPerPage;
  const currentContents = articles.slice(indexOfFirstContent, indexOfLastContent);

  // Fungsi untuk mengubah halaman
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="blog-list">
      <h2 className="article">All Article!!</h2>
      <p>Data Visualization</p>
      {/* Tampilkan konten untuk halaman saat ini */}
      {currentContents.map((article) => (
        <div className="blog-preview" key={article.id}>
          <Link to={article.link}>
            <h2>{article.title}</h2>
            <p>Written by {article.author}</p>
          </Link>
        </div>
      ))}

      {/* Tampilkan tombol navigasi */}
      <div className="pagination">
        {[...Array(Math.ceil(articles.length / contentPerPage))].map((_, index) => (
          <button key={index + 1} onClick={() => paginate(index + 1)} style={{ margin: "5px", width: "30px", height: "30px" }}>
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;
