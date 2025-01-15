/* eslint-disable @next/next/no-img-element */
export default function Navbar() {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="logo" href="#">
            <img src="Logo.svg" alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sellers tool
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Sold Properties
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Add Listing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Enquiry
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <button className="primary-button" type="submit">
                Login
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
