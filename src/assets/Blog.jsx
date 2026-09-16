import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './Footer';
import { fetchPosts } from '../data/api';
import './Blog.css';

const POSTS_PER_PAGE = 6;

export function Blog() {
  const [posts, setPosts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const [activeCategory, setActiveCategory] = useState('الكل');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [viewMode, setViewMode] = useState('grid'); 

  useEffect(() => {
    fetchPosts()
      .then(data => {
        setPosts(data.posts);
        setCategories(data.categories);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const filteredPosts = posts.filter(p => {
    const matchesCategory = activeCategory === 'الكل' || p.category === activeCategory;
    const matchesSearch = p.title.includes(searchQuery) || p.excerpt.includes(searchQuery);
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  function handleCategoryChange(cat) {
    setActiveCategory(cat);
    setCurrentPage(1);
  }

  function handleSearch(e) {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  }

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

  return (
    <>
      <Nav />

      <section className="blog-hero">
        <div className="container text-center">
          <div className="blog-badge d-inline-flex align-items-center gap-2 px-3 py-2 mb-3">
            <span className="badge-dot"></span>
            <i className="bi bi-journal-text"></i>
            مدونتنا
          </div>

          <h1 className="blog-title mb-3">
            استكشف <span className="text-orange">مقالاتنا</span>
          </h1>

          <p className="blog-desc mb-0">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>
        </div>
      </section>

      <section className="blog-filters">
        <div className="container">
          <div className="d-flex flex-column flex-lg-row align-items-stretch align-items-lg-center justify-content-between gap-3">

            <div className="d-flex flex-wrap gap-2">
              <button
                className={`filter-btn ${activeCategory === 'الكل' ? 'active' : ''}`}
                onClick={() => handleCategoryChange('الكل')}
              >
                جميع المقالات
              </button>

              {categories.map((cat, i) => (
                <button
                  key={i}
                  className={`filter-btn ${activeCategory === cat.name ? 'active' : ''}`}
                  onClick={() => handleCategoryChange(cat.name)}
                >
                  {cat.name}
                </button>
              ))}
            </div>

            <div className="search-box">
              <i className="bi bi-search"></i>
              <input
                type="text"
                placeholder="ابحث في المقالات..."
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="blog-list">
        <div className="container">

          <div className="d-flex align-items-center justify-content-between mb-4">
            <p className="text-secondary mb-0">
              عرض <strong className="text-orange">{filteredPosts.length}</strong> مقالة
            </p>

            <div className="view-toggle">
              <button
                className={viewMode === 'list' ? 'active' : ''}
                onClick={() => setViewMode('list')}
              >
                <i className="bi bi-list"></i>
              </button>
              <button
                className={viewMode === 'grid' ? 'active' : ''}
                onClick={() => setViewMode('grid')}
              >
                <i className="bi bi-grid-3x3-gap-fill"></i>
              </button>
            </div>
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-5">
              <i className="bi bi-search text-secondary" style={{ fontSize: '3rem' }}></i>
              <p className="text-secondary mt-3">لا توجد مقالات مطابقة لبحثك</p>
            </div>
          )}

          <div className={viewMode === 'grid' ? 'blog-grid' : 'blog-stack'}>
            {currentPosts.map(article => (
              <BlogCard key={article.id} article={article} viewMode={viewMode} />
            ))}
          </div>

          {totalPages > 1 && (
            <div className="pagination-wrap">
              <button
                className="page-btn"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                <i className="bi bi-chevron-right"></i>
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map(num => (
                <button
                  key={num}
                  className={`page-btn ${currentPage === num ? 'active' : ''}`}
                  onClick={() => setCurrentPage(num)}
                >
                  {num}
                </button>
              ))}

              <button
                className="page-btn"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                <i className="bi bi-chevron-left"></i>
              </button>
            </div>
          )}

          {totalPages > 1 && (
            <p className="text-center text-secondary small mt-3">
              صفحة {currentPage} من {totalPages}
            </p>
          )}

        </div>
      </section>

      <Footer />
    </>
  );
}

function BlogCard({ article, viewMode }) {
  return (
    <Link
      to={`/post/${article.slug}`}
      className={`blog-card text-decoration-none ${viewMode === 'list' ? 'blog-card-list' : ''}`}
    >
      <div className="blog-card-img">
        <span className="blog-card-cat">{article.category}</span>
        <img src={article.image} alt={article.title} />
      </div>

      <div className="blog-card-body">
        <div className="blog-card-meta">
          <span><i className="bi bi-clock"></i> {article.readTime}</span>
          <span>•</span>
          <span><i className="bi bi-calendar"></i> {article.date}</span>
        </div>

        <h3 className="blog-card-title">{article.title}</h3>
        <p className="blog-card-desc">{article.excerpt}</p>

        <div className="blog-card-footer">
          <div className="d-flex align-items-center gap-2">
            <img src={article.author.avatar} alt={article.author.name} className="blog-card-avatar" />
            <div>
              <p className="blog-card-author mb-0">{article.author.name}</p>
              <p className="blog-card-role mb-0">{article.author.role}</p>
            </div>
          </div>
          <div className="blog-card-btn">
            <i className="bi bi-arrow-left"></i>
          </div>
        </div>
      </div>
    </Link>
  );
}