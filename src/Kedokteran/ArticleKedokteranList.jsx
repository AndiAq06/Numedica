import { Link } from "react-router-dom/cjs/react-router-dom";

const ArticleList = () => {
  return (
    <div className="blog-list">
      <h2 className="article">All Article!!</h2>
      <div className="blog-preview">
        <Link to="glaukoma">
          <h2>Glaukoma</h2>
          <p>Written by Aqilah Nahdah</p>
        </Link>
      </div>
      <div className="blog-preview">
        <Link to="blefaritis">
          <h2>Blefaritis</h2>
          <p>Written by Aqilah Nahdah</p>
        </Link>
      </div>

      <div className="blog-preview">
        <Link to="entropion">
          <h2>Entropion</h2>
          <p>Written by Aqilah Nahdah</p>
        </Link>
      </div>
      <div className="blog-preview"></div>
    </div>
  );
};

export default ArticleList;
