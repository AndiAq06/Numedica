import { useState } from "react";
import DynamicPagination from "../Pagination/DynamicPagination";

const ArticleStatistikaList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articles = [
    {
      id: 1,
      title: "Statistika",
      author: "Andi Ardiansyah Nasir",
      link: "statistik",
    },
    {
      id: 2,
      title: "Pengertian Statistika Parametrik dan Nonparametrik",
      author: "Andi Ardiansyah Nasir",
      link: "/statistika/parametrik-nonparametrik",
    },
    {
      id: 3,
      title: "Pengertian Statistika Deskriptif dan Inferensia",
      author: "Andi Ardiansyah Nasir",
      link: "/statistika/descriptive-inferensia",
    },
    {
      id: 4,
      title: "Sampling Error",
      author: "Andi Ardiansyah Nasir",
      link: "/statistika/sampling-error",
    },
    {
      id: 5,
      title: "Non-Sampling Error",
      author: "Andi Ardiansyah Nasir",
      link: "/statistika/non-sampling-error",
    },
    {
      id: 6,
      title: "Jenis-Jenis Tipe Data Dalam Statistika",
      author: "Andi Ardiansyah Nasir",
      link: "/statistika/tipe-data",
    },
  ];

  const itemsPerPageConfig = {
    1: 20,

    // Tambahkan konfigurasi jumlah konten per halaman lainnya di sini
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return <DynamicPagination articles={articles} itemsPerPageConfig={itemsPerPageConfig} currentPage={currentPage} onPageChange={handlePageChange} />;
};

export default ArticleStatistikaList;
