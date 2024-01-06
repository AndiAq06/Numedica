import { Link } from "react-router-dom/cjs/react-router-dom";

const ArticlePemprogramanList = () => {
  return (
    <div className="blog-list">
      <h2 className="article">All Article!!</h2>
      <div className="blog-preview">
        <Link to="/pemrograman/synchronous-asynchronous">
          <h2>Synchronous dan Asynchronous dalam Pemrograman</h2>
          <p>Written by Andi Ardiansyah Nasir</p>
        </Link>
      </div>
      <div className="blog-preview">
        <Link to="/pemrograman/javascript-typesript">
          <h2>TypeScript Vs JavaScript: Mana Lebih Sakti??</h2>
          <p>Written by Andi Ardiansyah Nasir</p>
        </Link>
      </div>
    </div>
  );
};

export default ArticlePemprogramanList;
