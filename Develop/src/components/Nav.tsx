import { Link, useLocation } from "react-router-dom";

const Nav = () => {
  // Get the current page
  const currentPage = useLocation().pathname;

  // Return the navigation links
  return (
    <div>
    <nav>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <Link to="/" className={currentPage === "/" ? "nav-link active" : "nav-link"}>
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/SavedCandidates" className={currentPage === "/SavedCandidates" ? "nav-link" : ""}>
            Potential Candidates
          </Link>
        </li>
      </ul>
      </nav>
      </div>
  )
};

export default Nav;
