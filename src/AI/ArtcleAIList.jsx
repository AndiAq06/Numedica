import { useState } from "react";
import { Link } from "react-router-dom";
import DynamicPagination from "../Pagination/DynamicPagination";

const ArticleAIList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [contentPerPage] = useState(10); // Ubah jumlah konten per halaman sesuai kebutuhan
  const articles = [
    {
      id: 1,
      title: "Artificial Intelligence",
      author: "Andi Ardiansyah Nasir",
      link: "/ai/artificial-intelligence",
    },
  ];

  const itemsPerPageConfig = {
    1: 20,

    // Tambahkan konfigurasi jumlah konten per halaman lainnya di sini
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return <DynamicPagination articles={articles} itemsPerPageConfig={itemsPerPageConfig} defaultPageTitle="Artificial Intelligence" currentPage={currentPage} onPageChange={handlePageChange} />;
};

export default ArticleAIList;
