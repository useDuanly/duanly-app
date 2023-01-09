import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
      <div className="container">
        <Link href={"/"} legacyBehavior>
          <a className="navbar-brand">Duanly DV Portafolio</a>
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
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav text-center ms-auto">
            <li className="nav-item"></li>
            <li className="nav-item">
              <Link href={"/blog"} className="nav-link">
                Blog
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/github"} className="nav-link">
                Github
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/contacto"} className="nav-link">
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
