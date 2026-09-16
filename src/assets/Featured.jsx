import { Link } from 'react-router-dom';
import './Featured.css';

export function Featured({ posts }) {

  if (!posts || posts.length === 0) return null;

  return (
    <section className="featured-section py-5" id="featured" >

      <div className="container">

        <div className="section-header  mb-5 position-relative">

          <div className="section-badge d-inline-flex align-items-center gap-2 px-3 py-2 mb-3">
            <span className="badge-dot"></span>
            مميز
          </div>

          <h2 className="section-title mb-2">
            مقالات مختارة
          </h2>

          <p className="section-subtitle mb-0">
            محتوى منتقى لبدء رحلة تعلمك
          </p>

          <Link
            to="/blog"
            className="view-all-btn position-absolute start-0 top-50 translate-middle-y"
          >
            <i className="bi bi-arrow-left"></i>
            عرض الكل
          </Link>

        </div>


        <div className="d-flex flex-column gap-4">

         {posts.map(function (article) {

          return (

            <Link
              key={article.id}
              to={`/post/${article.slug}`}
              className="featured-card row g-0 overflow-hidden text-decoration-none"
            >

              <div className="featured-image col-lg-6">
                <span className="featured-badge">
                  <i className="bi bi-star-fill"></i>
                  مميز
                </span>

                <img
                  src={article.image}
                  alt={article.title}
                  className="w-100 h-100 object-fit-cover"
                />
              </div>


              <div className="featured-content col-lg-6 p-4">

                <div className="d-flex align-items-center gap-3 mb-3">

                  <span className="category-tag">
                    {article.category}
                  </span>

                  <span className="read-time">
                    <i className="bi bi-clock ms-2"></i>
                    {article.readTime}
                  </span>

                </div>


                <h3 className="featured-title mb-3">
                  {article.title}
                </h3>

                <p className="featured-desc mb-4">
                  {article.excerpt}
                </p>


                <div className="d-flex align-items-center justify-content-between">

                  <div className="d-flex align-items-center gap-2">

                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="author-avatar-img"
                    />

                    <div>
                      <p className="author-name mb-0">
                        {article.author.name}
                      </p>

                      <p className="author-date mb-0">
                        {article.date}
                      </p>
                    </div>

                  </div>


                  <div className="read-more-link">
                    اقرأ المقال
                    <i className="bi bi-arrow-left"></i>
                  </div>

                </div>

              </div>

            </Link>

          );

        })}

     </div>

  </div>

    </section>
  );
}