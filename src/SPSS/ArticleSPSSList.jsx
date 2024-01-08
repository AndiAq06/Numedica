import { useState } from "react";
import DynamicPagination from "../Pagination/DynamicPagination";

const ArticleSPSSList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const articles = [
    {
      id: 1,
      title: "Dot Plot | SPSS",
      author: "Andi Ardiansyah Nasir",
      link: "/spss/dot-plot-spss",
    },
    {
      id: 2,
      title: "Steam & Leaf | SPSS",
      author: "Andi Ardiansyah Nasir",
      link: "/spss/steam-leaf-spss",
    },
    {
      id: 3,
      title: "Boxplot | SPSS",
      author: "Andi Ardiansyah Nasir",
      link: "/spss/boxplot-spss",
    },
    {
      id: 4,
      title: "Histogram | SPSS",
      author: "Andi Ardiansyah Nasir",
      link: "/spss/histogram-spss",
    },
    {
      id: 5,
      title: "Pie Chart | SPSS",
      author: "Andi Ardiansyah Nasir",
      link: "/spss/pie-chart-spss",
    },
    {
      id: 6,
      title: "Scatter Plot | SPSS",
      author: "Andi Ardiansyah Nasir",
      link: "/spss/scatter-plot-spss",
    },
  ];

  const itemsPerPageConfig = {
    1: 20,
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return <DynamicPagination articles={articles} itemsPerPageConfig={itemsPerPageConfig} currentPage={currentPage} onPageChange={handlePageChange} defaultPageTitle="Data Vizualitation" />;
};

export default ArticleSPSSList;
