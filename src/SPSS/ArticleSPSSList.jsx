import { Link } from "react-router-dom/cjs/react-router-dom";

const ArticleSPSSList = () => {
  return (
    <div className="blog-list">
      <h2 className="article">All Article!!</h2>
      <div className="blog-preview">
        <Link to="/spss/dot-plot-spss">
          <h2>Dot Plot | SPSS</h2>
          <p>Written by Andi Ardiansyah Nasir</p>
        </Link>
      </div>
      <div className="blog-preview">
        <Link to="/spss/steam-leaf-spss">
          <h2>Steam & Leaf | SPSS</h2>
          <p>Written by Andi Ardiansyah Nasir</p>
        </Link>
      </div>
      <div className="blog-preview">
        <Link to="/spss/boxplot-spss">
          <h2>Boxplot | SPSS</h2>
          <p>Written by Andi Ardiansyah Nasir</p>
        </Link>
      </div>
      <div className="blog-preview">
        <Link to="/spss/histogram-spss">
          <h2>Histogram | SPSS</h2>
          <p>Written by Andi Ardiansyah Nasir</p>
        </Link>
      </div>
      <div className="blog-preview">
        <Link to="/spss/pie-chart-spss">
          <h2>Pie Chart | SPSS</h2>
          <p>Written by Andi Ardiansyah Nasir</p>
        </Link>
      </div>
    </div>
  );
};

export default ArticleSPSSList;
