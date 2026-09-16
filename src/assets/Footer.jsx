import "./Footer.css";
export function Footer(){
    return(
         <footer className="custom-footer" dir="rtl">
      <div className="container px-5">
        <div className="row g-4 py-5">
          
          <div className="col-lg-4 col-md-6">
            <div className="d-flex align-items-center gap-2 mb-3">
              <div className="footer-logo-icon">ع</div>
              <h4 className="m-0 fw-bold text-white">عدسة</h4>
            </div>
            <p className="footer-desc">
              مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
            </p>
            
            <div className="social-icons d-flex gap-2 mt-4">
              <a href="#" className="social-btn"><i class="fa-brands fa-x-twitter"></i></a>
              <a href="#" className="social-btn"><i class="fa-brands fa-github"></i></a>
              <a href="#" className="social-btn"><i class="fa-brands fa-linkedin"></i></a>
              <a href="#" className="social-btn"><i class="fa-brands fa-youtube"></i></a>
            </div>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title">استكشف</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#home">الرئيسية</a></li>
              <li><a href="#blog">المدونة</a></li>
              <li><a href="#about">من نحن</a></li>
            </ul>
          </div>

          <div className="col-lg-2 col-md-6">
            <h5 className="footer-title">التصنيفات</h5>
            <ul className="footer-links list-unstyled">
              <li><a href="#lighting">إضاءة</a></li>
              <li><a href="#portrait">بورتريه</a></li>
              <li><a href="#nature">مناظر طبيعية</a></li>
              <li><a href="#techniques">تقنيات</a></li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6">
            <h5 className="footer-title">ابقى على اطلاع</h5>
            <p className="footer-desc mb-3">اشترك للحصول على أحدث المقالات والتحديثات</p>
            <input 
              type="email" 
              className="form-control footer-input mb-3" 
              placeholder="أدخل بريدك الإلكتروني" 
            />
            <button className="btn btn-subscribe w-100">اشترك</button>
          </div>

        </div>

        <div className="footer-bottom d-flex justify-content-between align-items-center py-3">
          <p className="m-0">© 2026 عدسة. صنع بكل ❤️ جميع الحقوق محفوظة.</p>
          <div className="d-flex gap-4">
            <a href="#" className="footer-bottom-link">سياسة الخصوصية</a>
            <a href="#" className="footer-bottom-link">شروط الخدمة</a>
          </div>
        </div>
      </div>
    </footer>
    )
}