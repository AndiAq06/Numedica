import { Link } from "react-router-dom/cjs/react-router-dom";

const ArticleList = () => {
  return (
    <div className="blog-list">
      <h2 className="article">All Article!!</h2>
      <div className="blog-preview">
        <Link to="/kedokteran/glaukoma">
          <h2>Glaukoma</h2>
          <p>Written by Aqilah Nahdah</p>
        </Link>
      </div>
      <div className="blog-preview">
        <Link to="/kedokteran/blefaritis">
          <h2>Blefaritis</h2>
          <p>Written by Aqilah Nahdah</p>
        </Link>
      </div>

      <div className="blog-preview">
        <Link to="/kedokteran/entropion">
          <h2>Entropion</h2>
          <p>Written by Aqilah Nahdah</p>
        </Link>
      </div>

      <div className="blog-preview">
        <Link to="/kedokteran/ektropion">
          <h2>Ektropion</h2>
          <p>Written by Aqilah Nahdah</p>
        </Link>
      </div>

      <div className="blog-preview">
        <Link to="/kedokteran/hordeolum">
          <h2>Hordeolum</h2>
          <p>Written by Aqilah Nahdah</p>
        </Link>
      </div>

      <div className="blog-preview">
        <Link to="/kedokteran/pterigium">
          <h2>Pterigium</h2>
          <p>Written by Aqilah Nahdah</p>
        </Link>
      </div>
      <div className="blog-preview">
        <Link to="/kedokteran/pinguekulitis">
          <h2>Pinguekulitis</h2>
          <p>Written by Aqilah Nahdah</p>
        </Link>
      </div>
    </div>
  );
};

export default ArticleList;
