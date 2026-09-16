import './JoinUs.css';
import Avatar1 from "./images/avatar1.jfif";
import Avatar2 from "./images/avatar2.jfif";
import Avatar3 from "./images/avatar3.jfif";

export function JoinUs() {
  return (
    <section className="py-5 joinus" id="joinus">
      <div className="container">
        <div className="joinus-card text-center mx-auto">

          <div className="joinus-icon d-inline-flex align-items-center justify-content-center rounded-3 mb-4">
            <i className="bi bi-envelope-fill fs-2"></i>
          </div>

          <h2 className="fw-bold text-white mb-3">
            اشترك في <span className="text-orange">نشرتنا الإخبارية</span>
          </h2>

          <p className="text-secondary mb-4">
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
          </p>

          <form
            className="d-flex flex-column flex-sm-row gap-2 justify-content-center mx-auto mb-4"
            style={{ maxWidth: '520px' }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              className="form-control joinus-input flex-grow-1"
              placeholder="أدخل بريدك الإلكتروني"
            />
            <button type="submit" className="btn btn-orange fw-bold px-4 text-nowrap">
              اشترك الآن
            </button>
          </form>

          <div className="d-flex justify-content-center align-items-center flex-wrap gap-2 text-secondary small">
            <div className="d-flex">
              <img src={Avatar1} alt="avatar1" className="joinus-avatar" />
              <img src={Avatar2} alt="avatar2" className="joinus-avatar" />
              <img src={Avatar3} alt="avatar3" className="joinus-avatar" />
            </div>
            <p className="mb-0">
              انضم لـ <strong className="text-orange">10,000+</strong> مصور
            </p>
            <span className="text-secondary">•</span>
            <p className="mb-0">بدون إزعاج</p>
            <span className="text-secondary">•</span>
            <p className="mb-0">إلغاء الاشتراك في أي وقت</p>
          </div>

        </div>
      </div>
    </section>
  );
}