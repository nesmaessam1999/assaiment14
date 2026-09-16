import { Link } from 'react-router-dom';
import { Nav } from './Nav';
import { Footer } from './Footer';
import './About.css';

export function About() {
  const stats = [
    { number: '2+ مليون', label: 'قارئ شهريًا', icon: 'bi-people-fill' },
    { number: '500+', label: 'مقالة منشورة', icon: 'bi-file-earmark-text' },
    { number: '50+', label: 'كاتب خبير', icon: 'bi-pencil-fill' },
    { number: '15+', label: 'تصنيف', icon: 'bi-book' },
  ];

  const values = [
    {
      icon: 'bi-bullseye',
      title: 'الجودة أولاً',
      desc: 'محتوى مدروس ومكتوب بخبرة',
    },
    {
      icon: 'bi-lightning-charge-fill',
      title: 'تركيز عملي',
      desc: 'أمثلة واقعية يمكنك تطبيقها اليوم',
    },
    {
      icon: 'bi-people-fill',
      title: 'المجتمع',
      desc: 'تعلم مع آلاف المصورين',
    },
    {
      icon: 'bi-arrow-repeat',
      title: 'دائمًا محدث',
      desc: 'أحدث الاتجاهات وأفضل الممارسات',
    },
  ];

  const team = [
    { name: 'عمر الراشد', role: 'مصور حياة برية', avatar: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=200&h=200&fit=crop&crop=face' },
    { name: 'فارس العلي', role: 'فنان فوتوغرافي', avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&h=200&fit=crop&crop=face' },
    { name: 'سامي الحربي', role: 'خبير تعديل صور', avatar: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=200&h=200&fit=crop&crop=face' },
    { name: 'منصور الزهراني', role: 'مصور زفاف', avatar: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=200&h=200&fit=crop&crop=face' },
    { name: 'باسم المصري', role: 'مصور فني', avatar: 'https://images.unsplash.com/photo-1583195764036-6dc248ac07d9?w=200&h=200&fit=crop&crop=face' },
    { name: 'رامي الخطيب', role: 'مصور ماكرو', avatar: 'https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=200&h=200&fit=crop&crop=face' },
    { name: 'طارق النعيمي', role: 'مصور معماري', avatar: 'https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=200&h=200&fit=crop&crop=face' },
    { name: 'لؤي الصالح', role: 'مصور تجاري', avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=200&h=200&fit=crop&crop=face' },
    { name: 'فيصل الدوسري', role: 'مصور جوي', avatar: 'https://images.unsplash.com/photo-1618077360395-f3068be8e001?w=200&h=200&fit=crop&crop=face' },
    { name: 'ياسر العتيبي', role: 'مصور رحالة', avatar: 'https://images.unsplash.com/photo-1590086782957-93c06ef21604?w=200&h=200&fit=crop&crop=face' },
    { name: 'ماجد القحطاني', role: 'مصور استوديو', avatar: 'https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?w=200&h=200&fit=crop&crop=face' },
    { name: 'أحمد الشهري', role: 'مصور رياضي', avatar: 'https://images.unsplash.com/photo-1580518324671-c2f0833a3af3?w=200&h=200&fit=crop&crop=face' },
    { name: 'عبدالله الغامدي', role: 'مصور عقارات', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&h=200&fit=crop&crop=face' },
    { name: 'نايف المطيري', role: 'مصور مواليد', avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&crop=face' },
    { name: 'دحام الحسيني', role: 'فنان بصري', avatar: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=200&h=200&fit=crop&crop=face' },
    { name: 'فهد السبيعي', role: 'مراجع معدات', avatar: 'https://images.unsplash.com/photo-1531891437562-4301cf35b7e4?w=200&h=200&fit=crop&crop=face' },
    { name: 'سلطان الراجحي', role: 'فنان تصوير', avatar: 'https://images.unsplash.com/photo-1557862921-37829c790f19?w=200&h=200&fit=crop&crop=face' },
    { name: 'كريم الفهد', role: 'خبير تقني', avatar: 'https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=200&h=200&fit=crop&crop=face' },
  ];

  return (
    <>
      <Nav />

      <section className="about-hero">
        <div className="container text-center">
          <div className="about-badge d-inline-flex align-items-center gap-2 px-3 py-2 mb-4">
            <span className="badge-dot"></span>
            من نحن
          </div>

          <h1 className="about-title mb-4">
            مهمتنا هي <span className="text-orange">الإعلام والإلهام</span>
          </h1>

          <p className="about-desc mx-auto">
            مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين
            ونصائح عملية لتطوير مهاراتكم. نحن شغوفون بمشاركة المعرفة ومساعدة
            المصورين على تنمية مهاراتهم من خلال محتوى عالي الجودة.
          </p>
        </div>
      </section>

      <section className="about-stats">
        <div className="container">
          <div className="row g-4">
            {stats.map((stat, i) => (
              <div key={i} className="col-6 col-md-3">
                <div className="about-stat-card">
                  <i className={`bi ${stat.icon} about-stat-icon`}></i>
                  <h3 className="about-stat-number">{stat.number}</h3>
                  <p className="about-stat-label mb-0">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-values">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="about-section-title mb-3">
              <span className="title-bar"></span>
              قيمنا
              <span className="title-bar"></span>
            </h2>
            <p className="text-secondary mb-0">
              المبادئ التي توجه كل ما نقوم بإنشائه
            </p>
          </div>

          <div className="row g-4">
            {values.map((v, i) => (
              <div key={i} className="col-md-6 col-lg-3">
                <div className="about-value-card text-center">
                  <div className="about-value-icon">
                    <i className={`bi ${v.icon}`}></i>
                  </div>
                  <h4 className="about-value-title">{v.title}</h4>
                  <p className="about-value-desc mb-0">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <section className="about-team">
        <div className="container">

          <div className="text-center mb-5">
            <h2 className="about-section-title mb-3">
              <span className="title-bar"></span>
              فريقنا
              <span className="title-bar"></span>
            </h2>
            <p className="text-secondary mb-0">
              تعرف على الكتّاب والمصورين خلف المحتوى
            </p>
          </div>

          <div className="row g-4">
            {team.map((member, i) => (
              <div key={i} className="col-md-6 col-lg-4">
                <div className="team-card text-center">
                  <div className="team-avatar-wrap">
                    <img src={member.avatar} alt={member.name} className="team-avatar" />
                    <span className="team-verified">
                      <i className="bi bi-check-lg"></i>
                    </span>
                  </div>
                  <h4 className="team-name">{member.name}</h4>
                  <p className="team-role">{member.role}</p>

                  <div className="team-socials">
                    <a href="#" className="team-social"><i className="bi bi-linkedin"></i></a>
                    <a href="#" className="team-social"><i className="bi bi-github"></i></a>
                    <a href="#" className="team-social"><i className="bi bi-twitter-x"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="about-cta">
        <div className="container text-center">
          <h2 className="about-cta-title mb-3">
            لديك أسئلة؟ دعنا نتحدث!
          </h2>
          <p className="about-cta-desc mb-4">
            تحب أن نسمع منك. سواء كان لديك سؤال حول محتوانا، أو تريد المساهمة، أو تريد فقط إلقاء التحية. لا تتردد في التواصل.
          </p>

          <div className="d-flex justify-content-center gap-3 flex-wrap">
            <a href="mailto:hello@adasah.com" className="btn-cta-dark">
              <i className="bi bi-envelope-fill"></i>
              تواصل معنا
            </a>
            <Link to="/blog" className="btn-cta-outline">
              تصفح المقالات
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}