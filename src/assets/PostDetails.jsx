import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { fetchPosts } from '../data/api';
import './PostDetails.css';

export function PostDetails() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [related, setRelated] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchPosts()
      .then(data => {
        const found = data.posts.find(p => p.slug === slug);
        if (found) {
          setPost(found);
          const rel = data.posts
            .filter(p => p.category === found.category && p.id !== found.id)
            .slice(0, 3);
          setRelated(rel);
        } else {
          setError('المقال غير موجود');
        }
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('حدث خطأ في جلب المقال');
        setLoading(false);
      });
  }, [slug]);

  if (loading) {
    return (
      <>
        <Nav />
        <div className="text-center text-white py-5">
          <div className="spinner-border text-warning"></div>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Nav />
        <div className="container text-center text-white py-5">
          <h2>😕 {error}</h2>
          <Link to="/" className="btn-orange mt-3 d-inline-block">العودة للرئيسية</Link>
        </div>
        <Footer />
      </>
    );
  }

  const headings = post.content
    .split('\n\n')
    .filter(line => line.startsWith('## '))
    .map(line => line.replace('## ', ''));

  const contentParts = post.content.split('\n\n');

  return (
    <>
      <Nav />

      <section className="post-hero">
        <img src={post.image} alt={post.title} className="post-hero-bg" />
        <div className="post-hero-overlay"></div>

        <div className="container post-hero-content">
          <div className="post-breadcrumb">
            <Link to="/"><i className="bi bi-house-door-fill"></i></Link>
            <i className="bi bi-chevron-left"></i>
            <Link to="/blog">المدونة</Link>
            <i className="bi bi-chevron-left"></i>
            <span>{post.category}</span>
          </div>

          <div className="post-hero-meta">
            <span className="hero-category">{post.category}</span>
            <span><i className="bi bi-calendar"></i> {post.date}</span>
            <span><i className="bi bi-clock"></i> {post.readTime}</span>
          </div>

          <h1 className="post-hero-title">{post.title}</h1>

          <div className="post-hero-author">
            <img src={post.author.avatar} alt={post.author.name} />
            <div>
              <p className="hero-author-name mb-0">{post.author.name}</p>
              <p className="hero-author-role mb-0">{post.author.role}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="post-body">
        <div className="container">
          <div className="row g-4">

            <aside className="col-lg-3 order-2 order-lg-2">
              <div className="sidebar-sticky">

                {headings.length > 0 && (
                  <div className="sidebar-card">
                    <div className="sidebar-head">
                      <i className="bi bi-list-ul"></i>
                      <h4 className="mb-0">محتويات المقال</h4>
                    </div>
                    <ol className="toc-list">
                      {headings.map((h, i) => (
                        <li key={i}>
                          <span className="toc-num">{i + 1}</span>
                          <span className="toc-text">{h}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                )}

                <div className="sidebar-card sidebar-info-row">
                  <div className="sidebar-info-box">
                    <i className="bi bi-calendar"></i>
                    <p className="mb-1 fw-bold">{post.date}</p>
                    <p className="mb-0 small">تاريخ النشر</p>
                  </div>
                  <div className="sidebar-info-box">
                    <i className="bi bi-clock"></i>
                    <p className="mb-1 fw-bold">{post.readTime}</p>
                    <p className="mb-0 small">وقت القراءة</p>
                  </div>
                </div>

                <div className="sidebar-card sidebar-subscribe">
                  <div className="sidebar-sub-icon">
                    <i className="bi bi-envelope-fill"></i>
                  </div>
                  <h4 className="mb-2">لا تفوّت جديدنا</h4>
                  <p className="small mb-3">اشترك للحصول على أحدث المقالات</p>
                  <button className="btn-orange w-100">تصفح المزيد</button>
                </div>

              </div>
            </aside>

            <main className="col-lg-9 order-1 order-lg-1">

              <div className="post-intro">
                <i className="bi bi-quote"></i>
                <p className="mb-0">{post.excerpt}</p>
              </div>

              <div className="post-content">
                {contentParts.map((part, index) => {
                  if (part.startsWith('## ')) {
                    return (
                      <h2 key={index} className="post-heading">
                        <i className="bi bi-camera-fill"></i>
                        {part.replace('## ', '')}
                      </h2>
                    );
                  }
                  return <p key={index} className="post-paragraph">{part}</p>;
                })}
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="post-tags-box">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <div className="box-icon"><i className="bi bi-tags-fill"></i></div>
                    <h5 className="mb-0">الوسوم</h5>
                  </div>
                  <div className="d-flex flex-wrap gap-2">
                    {post.tags.map((tag, i) => (
                      <span key={i} className="tag-pill">#{tag}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="post-share-box">
                <div className="d-flex align-items-center gap-2">
                  <div className="box-icon"><i className="bi bi-share-fill"></i></div>
                  <h5 className="mb-0">شارك المقال</h5>
                </div>
                <div className="d-flex gap-2">
                  <a href="#" className="share-btn"><i className="bi bi-twitter-x"></i></a>
                  <a href="#" className="share-btn"><i className="bi bi-linkedin"></i></a>
                  <a href="#" className="share-btn"><i className="bi bi-whatsapp"></i></a>
                  <a href="#" className="share-btn"><i className="bi bi-link-45deg"></i></a>
                </div>
              </div>

              <div className="post-author-box">
                <div className="d-flex align-items-center gap-2 mb-3">
                  <div className="box-icon"><i className="bi bi-person-fill"></i></div>
                  <h5 className="mb-0">كاتب المقال</h5>
                </div>
                <div className="d-flex align-items-center gap-3 flex-wrap">
                  <img src={post.author.avatar} alt={post.author.name} className="author-big-avatar" />
                  <div className="flex-grow-1">
                    <h4 className="mb-1 text-white">{post.author.name}</h4>
                    <p className="text-secondary mb-2">{post.author.role}</p>
                    <p className="text-secondary small mb-0">
                      مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.
                    </p>
                  </div>
                </div>
              </div>

            </main>
          </div>

          {related.length > 0 && (
            <div className="related-section">
              <div className="related-head">
                <div>
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <div className="box-icon"><i className="bi bi-image-fill"></i></div>
                    <h3 className="mb-0 text-white">مقالات قد تعجبك</h3>
                  </div>
                  <p className="text-secondary mb-0">استكشف المزيد من المحتوى المميز</p>
                </div>
                <Link to="/blog" className="view-all-related">
                  <i className="bi bi-arrow-left"></i>
                  عرض الكل
                </Link>
              </div>

              <div className="row g-4">
                {related.map(rel => (
                  <div key={rel.id} className="col-md-4">
                    <Link to={`/post/${rel.slug}`} className="related-card">
                      <div className="related-img">
                        <span className="related-cat">{rel.category}</span>
                        <img src={rel.image} alt={rel.title} />
                      </div>
                      <div className="related-body">
                        <h5 className="text-white">{rel.title}</h5>
                        <div className="d-flex align-items-center justify-content-between mt-3">
                          <div className="d-flex align-items-center gap-2">
                            <img src={rel.author.avatar} alt={rel.author.name} className="related-avatar" />
                            <span className="text-secondary small">{rel.author.name}</span>
                          </div>
                          <span className="text-secondary small">{rel.readTime}</span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}