import { Link } from "react-router-dom/cjs/react-router-dom";

const ArticleSPSSList = () => {
  return (
    <div className="blog-list">
      <h2 className="article">All Article!!</h2>
      <div className="blog-preview">
        <Link to="steam-leaf-spss">
          <h2>Steam & Leaf | SPSS</h2>
          <p>Written by Andi Ardiansyah Nasir</p>
        </Link>
      </div>
      <div className="blog-preview">
        <Link to="boxplot-spss">
          <h2>Boxplot | SPSS</h2>
          <p>Written by Andi Ardiansyah Nasir</p>
        </Link>
      </div>
    </div>
  );
};

export default ArticleSPSSList;
