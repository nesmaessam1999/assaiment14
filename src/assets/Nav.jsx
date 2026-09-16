import "bootstrap/dist/css/bootstrap.min.css";
import "./Nav.css";
import { Link, useLocation } from 'react-router-dom';
import Logo from "./images/logo.png";

export function Nav() {
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark custom-navbar" dir="rtl">
      <div className="container px-4">
        
        <Link className="navbar-brand d-flex align-items-center gap-2" to="/">
          <div className="logo-text text-end">
            <h5 className="m-0 fw-bold">عدسة</h5>
            <span className="logo-subtitle">عالم التصوير الفوتوغرافي</span>
          </div>
          <div className="logo-icon">
            <img className="logo-img" src={Logo} alt="logo" />
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 nav-pill-container">
            <li className="nav-item">
              <Link 
                to="/" 
                className={`nav-link ${location.pathname === '/' ? 'active-pill' : ''}`}
              >
                الرئيسية
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/blog" 
                className={`nav-link ${location.pathname === '/blog' ? 'active-pill' : ''}`}
              >
                المدونة
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                to="/about" 
                className={`nav-link ${location.pathname === '/about' ? 'active-pill' : ''}`}
              >
                من نحن
              </Link>
            </li>
          </ul>

          <div className="d-flex align-items-center gap-3 left-actions">
            <button className="btn btn-search">
              <i className="fa-solid fa-magnifying-glass"></i>
            </button>
            <button className="btn btn-read-more">ابدأ القراءة</button>
          </div>
        </div>
      </div>
    </nav>
  );
}