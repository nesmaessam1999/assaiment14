import { Link } from 'react-router-dom';
import './LatestArticles.css';

export function LatestArticles({ posts }) {
  if (!posts || posts.length === 0) return null;

  return (
    <section className="latest-section py-5" id="blog">
      <div className="container">

        <div className="latest-grid">

          {posts.map(function (article) {

            return (
              <Link
                key={article.id}
                to={`/post/${article.slug}`}
                className="latest-card text-decoration-none"
              >

                <div className="latest-image position-relative">

                  <span className="latest-category">
                    {article.category}
                  </span>

                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-100 h-100 object-fit-cover"
                  />

                </div>

                <div className="latest-content d-flex flex-column">

                  <div className="latest-meta d-flex align-items-center gap-2 mb-3">

                    <span>
                      <i className="bi bi-clock"></i> {article.readTime}
                    </span>

                    <span className="dot-separator">•</span>

                    <span>{article.date}</span>

                  </div>

                  <h3 className="latest-title mb-3">
                    {article.title}
                  </h3>

                  <p className="latest-desc mb-4 flex-grow-1">
                    {article.excerpt}
                  </p>

                  <div className="latest-footer d-flex align-items-center justify-content-between pt-3">

                    <div className="d-flex align-items-center gap-2">

                      <img
                        src={article.author.avatar}
                        alt={article.author.name}
                        className="author-avatar-sm-img"
                      />

                      <div>

                        <p className="author-name mb-0">
                          {article.author.name}
                        </p>

                        <p className="author-role mb-0">
                          {article.author.role}
                        </p>

                      </div>

                    </div>

                    <div className="arrow-btn d-flex align-items-center justify-content-center">
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