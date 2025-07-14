import { useState, useEffect } from "react";

const Header = () => {
  const [active, setActive] = useState("/");
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const currentPath = window.location.pathname;
    setActive(currentPath);
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg w-100 navbar-dark bg-success bg-gradient">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold text-light" href="/">
            Gatak II
          </a>

          <button
            className={`navbar-toggler ${isOpen ? "" : "collapsed"}`}
            type="button"
            aria-controls="navbarNav"
            aria-expanded={isOpen}
            aria-label="Toggle navigation"
            onClick={handleToggle}
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            {isOpen ? (
              <span className="fs-1 fw-bold text-light"><i class="bi bi-x-lg"></i></span>
            ) : (
              <span className="navbar-toggler-icon"></span>
            )}
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav w-100 d-flex justify-content-center text-center">
              <li className="nav-item">
                <a
                  className={`nav-link text-light ${active === "/" ? "fw-bold" : ""}`}
                  aria-current="page"
                  href="/"
                >
                  Beranda
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link text-light ${active === "/article" || active.includes("/detail-artikel") ? "fw-bold" : ""}`}
                  href="/article"
                >
                  Artikel
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link text-light ${active === "/gallery" ? "fw-bold" : ""}`}
                  href="/gallery"
                >
                  Galeri
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link text-light ${active === "/umkm" ? "fw-bold" : ""}`}
                  href="/umkm"
                >
                  UMKM
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link text-light ${active === "/aboutus" ? "fw-bold" : ""}`}
                  href="/aboutus"
                >
                  Tentang Kami
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
