import './Discover.css';

export function Discover({ categories }) {
  if (!categories || categories.length === 0) return null;

  return (
    <section className="py-5 discover" id="discover">
      <div className="container">

        <div className="text-center mb-5">
          <div className="section-badge d-inline-flex align-items-center gap-2 px-3 py-2 mb-3">
            <span className="badge-dot"></span>
            التصنيفات
          </div>

          <h2 className="section-title mb-2">استكشف حسب الموضوع</h2>
          <p className="section-subtitle mb-0">اعثر على محتوى مصمم حسب اهتماماتك</p>
        </div>

        <div className="discover-grid">
          {categories.map(function (cat, index) {
            return (
              <div key={index} className="discover-item">
                <div className="discover-icon-box d-inline-flex align-items-center justify-content-center rounded-3 mb-3">
                  <i className={`bi ${getIcon(cat.name)} fs-4`}></i>
                </div>
                <h5 className="discover-item-title mb-1">{cat.name}</h5>
                <p className="discover-item-count mb-0">{cat.count} مقالة</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function getIcon(name) {
  const icons = {
    'إضاءة': 'bi-lightbulb-fill',
    'بورتريه': 'bi-person-fill',
    'مناظر طبيعية': 'bi-tree-fill',
    'تقنيات': 'bi-sliders',
    'معدات': 'bi-camera-fill',
  };
  return icons[name] || 'bi-tag-fill';
}