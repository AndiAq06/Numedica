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
    {
      id: 2,
      title: "AI vs. Machine Learning vs. Deep Learning vs. Neural Networks",
      author: "Andi Ardiansyah Nasir",
      link: "/ai/ai-ml-dl",
    },
    {
      id: 3,
      title: "Supervised vs. Unsupervised Learning: What's the Difference?",
      author: "Andi Ardiansyah Nasir",
      link: "/ai/supervised-vs-unsupervised-learning",
    },
    {
      id: 4,
      title: "Uninformed Search Algorithms",
      author: "Andi Ardiansyah Nasir",
      link: "/ai/uninformed-search-algorithms",
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
