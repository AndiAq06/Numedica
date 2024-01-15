import { useState } from "react";
import { Link } from "react-router-dom";

const DynamicPagination = ({ articles, itemsPerPageConfig, defaultPageTitle, currentPage, onPageChange }) => {
  const paginate = (pageNumber) => {
    onPageChange(pageNumber);
  };

  // Menghitung indeks awal dan akhir untuk konten yang ditampilkan berdasarkan halaman saat ini
  const indexOfFirstContent = (currentPage - 1) * itemsPerPageConfig[currentPage];
  const indexOfLastContent = Math.min(indexOfFirstContent + itemsPerPageConfig[currentPage], articles.length);

  const currentContents = articles.slice(indexOfFirstContent, indexOfLastContent);

  const totalPages = Math.ceil(articles.length / itemsPerPageConfig[currentPage]);

  const pageTitles = {
    1: defaultPageTitle,
  };

  return (
    <div className="blog-list">
      <h2 className="article">All Article!!</h2>
      <p>{pageTitles[currentPage]}</p>
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
        {currentPage > 1 && (
          <button onClick={() => paginate(currentPage - 1)} style={{ margin: "5px", width: "30px", height: "30px" }}>
            {"<"}
          </button>
        )}
        {currentPage < totalPages && (
          <button onClick={() => paginate(currentPage + 1)} style={{ margin: "5px", width: "30px", height: "30px" }}>
            {">"}
          </button>
        )}
      </div>
    </div>
  );
};

export default DynamicPagination;
