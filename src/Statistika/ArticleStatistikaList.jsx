import { Link } from "react-router-dom/cjs/react-router-dom";

const ArticleStatistikaList = () => {
  return (
    <div className="blog-list">
      <h2 className="article">All Article!!</h2>
      <div className="blog-preview">
        <Link to="statistik">
          <h2>Statistika</h2>
          <p>Written by Andi Ardiansyah Nasir</p>
        </Link>
      </div>
      <div className="blog-preview">
        <Link to="parametrik-nonparametrik">
          <h2>Pengertian Statistika Parametrik dan Nonparametrik</h2>
          <p>Written by Andi Ardiansyah Nasir</p>
        </Link>
      </div>
      <div className="blog-preview">
        <Link to="/statistika/descriptive-inferensia">
          <h2>Pengertian Statistika Parametrik dan Nonparametrik</h2>
          <p>Written by Andi Ardiansyah Nasir</p>
        </Link>
      </div>
    </div>
  );
};

export default ArticleStatistikaList;
