import { useState } from "react";
import { Link } from "react-router-dom";
import DynamicPagination from "./DynamicPagination";

const ArticleList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [contentPerPage] = useState(10); // Ubah jumlah konten per halaman sesuai kebutuhan
  const articles = [
    {
      id: 1,
      title: "Barplot | R Studio",
      author: "Andi Ardiansyah Nasir",
      link: "/r/barplot-r-studio",
    },
    {
      id: 2,
      title: "Boxplot | R Studio",
      author: "Andi Ardiansyah Nasir",
      link: "/r/boxplot-r-studio",
    },
    {
      id: 3,
      title: "Quantile-Quantile-Plot | R Studio",
      author: "Andi Ardiansyah Nasir",
      link: "/r/quantile-quantile-plot-r-studio",
    },
    {
      id: 4,
      title: "Pie Chart | R Studio",
      author: "Andi Ardiansyah Nasir",
      link: "/r/pie-chart-r-studio",
    },
    {
      id: 5,
      title: "Histogram | R Studio",
      author: "Andi Ardiansyah Nasir",
      link: "/r/histogram-r-studio",
    },
    {
      id: 6,
      title: "Scatter Plot | R Studio",
      author: "Andi Ardiansyah Nasir",
      link: "/r/scatter-plot-r-studio",
    },
  ];

  const itemsPerPageConfig = {
    1: 20,

    // Tambahkan konfigurasi jumlah konten per halaman lainnya di sini
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return <DynamicPagination articles={articles} itemsPerPageConfig={itemsPerPageConfig} defaultPageTitle="Data Vizualitation" currentPage={currentPage} onPageChange={handlePageChange} />;
};

export default ArticleList;
