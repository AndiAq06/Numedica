import { Link } from "react-router-dom/cjs/react-router-dom";

const LinkClick = ({ links }) => {
  const handleLinkClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="related-post">
      <h2>Related Post</h2>
      <div className="article-list">
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link to={link.link} onClick={handleLinkClick}>
                {link.title}
              </Link>
            </li>
          ))}

          {/* <li>
            <Link to="/blefaritis" onClick={handleLinkClick}>
              Blefaritis | Kedokteran
            </Link>
          </li>
          <li>
            <Link to="/entropion" onClick={handleLinkClick}>
              Ektropion | Kedokteran
            </Link>
          </li> */}
        </ul>
      </div>
    </div>
  );
};

export default LinkClick;
