import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link href="/">
          <span className="navbar-brand" role="button">Next Portfolio</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" role="button"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link aria-current="page" href="/">
                <span className="nav-link active" role="button">Home</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog">
                <span className="nav-link" role="button">Blog</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/github">
                <span className="nav-link" role="button">Github</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
