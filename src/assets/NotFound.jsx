import { Link } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './Footer';
import './NotFound.css';

export function NotFound() {
  return (
    <>
      <Nav />

      <section className="notfound-section">
        <div className="container text-center">

          <h1 className="notfound-code">404</h1>

          <div className="notfound-icon-wrap">
            <span className="dot dot-top"></span>
            <div className="notfound-icon">
              <i className="bi bi-emoji-frown"></i>
            </div>
            <span className="dot dot-bottom"></span>
          </div>

          <h2 className="notfound-title">عفوًا! الصفحة غير موجودة</h2>

          <p className="notfound-desc">
            الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.
          </p>

          <div className="notfound-actions">
            <Link to="/" className="btn-notfound-primary">
              <i className="bi bi-house-door-fill"></i>
              الذهاب للرئيسية
            </Link>

            <Link to="/blog" className="btn-notfound-secondary">
              <i className="bi bi-journal-text"></i>
              تصفح المقالات
            </Link>
          </div>

        </div>
      </section>

      <Footer />
    </>
  );
}