import "./Hero.css"
export function Hero(){
     const stats = [
    { icon: 'bi-file-earmark-text', number: '+50', label: 'مقالة' },
    { icon: 'bi-people-fill', number: '+10 ألف', label: 'قارئ' },
    { icon: 'bi-folder-fill', number: '4', label: 'تصنيفات' },
    { icon: 'bi-vector-pen', number: '6', label: 'كاتب' },
  ];
    return(<section className="hero-section" id="home">
      <div className="container text-center">
        
        <span className="badge rounded-pill hero-badge mb-4">
          مرحباً بك في عدسة
        </span>

        <h1 className="hero-title mb-4">
          اكتشف <span className="text-orange">فن</span>
          <br />
          التصوير الفوتوغرافي
        </h1>

        <p className="hero-desc mb-5">
          انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير
        </p>

        <div className="d-flex justify-content-center gap-3 flex-wrap mb-5">
          <a href="#featured" className="btn btn-orange px-4 py-3">
            استكشف المقالات
            <i className="bi bi-arrow-left ms-2"></i>
          </a>
          <a href="#about" className="btn btn-outline-light px-4 py-3 rounded-pill">
            <i className="bi bi-play-circle me-2"></i>
            اعرف المزيد
          </a>
        </div>
            <div className="d-flex justify-content-center flex-wrap gap-3 mt-5">
            {stats.map((stat, i) => (
                <div className="stat-card" key={i}>
                <i className={`bi ${stat.icon} text-orange fs-3`}></i>
                <h4 className="text-orange fw-bold mt-2 mb-1">{stat.number}</h4>
                <p className="text-secondary mb-0 small">{stat.label}</p>
                </div>
            ))}
        </div>

      </div>
    </section>)
}