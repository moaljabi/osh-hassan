const nav = [["/","الرئيسية"],["/about","من نحن"],["/products","المنتجات والحلول"],["/services","خدماتنا وخبراتنا"],["/contact","تواصل معنا"]];

export const salesWhatsApp = "https://wa.me/963943990777?text=" + encodeURIComponent("مرحباً، أود الاستفسار عن أحد المنتجات وطلب عرض سعر.");
export const engineeringWhatsApp = "https://wa.me/963937171347?text=" + encodeURIComponent("مرحباً، لدي استفسار هندسي أو فني بخصوص إحدى الآلات.");

function BrandLockup({footer=false}:{footer?:boolean}) {
  return <div className={`brand-lockup${footer ? " footer-lockup" : ""}`}>
    <img className="logo-primary" src="/al-hasan-logo.jpg" alt="شعار شركة الحسن للصناعات الهندسية" />
    <span className="brand-partner-separator" aria-hidden="true">&amp;</span>
    <img className="logo-partner" src="/osh-logo.jpg" alt="شعار أسامة هيكل للتجارة والتوريدات" />
    <span className="brand-copy"><strong>الحسن للصناعات الهندسية</strong><small>&amp; أسامة هيكل للتجارة والتوريدات</small></span>
  </div>;
}

export function SiteShell({children}:{children:React.ReactNode}) {
  return <>
    <div className="topbar"><div className="container topbar-inner"><span>شراكة متكاملة في التصنيع والتوريد الزراعي والصناعي</span><span><a href="mailto:engineering@osh-hassan.com">الهندسة والتصنيع</a><i /><a href="mailto:sales@osh-hassan.com">المبيعات والتوريد</a><i /><span>دمشق — سوريا</span></span></div></div>
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="/" aria-label="الحسن للصناعات الهندسية وأسامة هيكل للتجارة والتوريدات — الرئيسية"><BrandLockup /></a>
        <nav className="desktop-nav" aria-label="التنقل الرئيسي">{nav.map(([href,label])=><a href={href} key={href}>{label}</a>)}</nav>
        <div className="header-actions"><a className="nav-contact" href={salesWhatsApp}>طلب عرض سعر</a><a className="nav-engineering" href={engineeringWhatsApp}>استفسار هندسي</a></div>
        <details className="mobile-menu"><summary aria-label="فتح القائمة"><span /><span /><span /></summary><nav>{nav.map(([href,label])=><a href={href} key={href}>{label}</a>)}<a className="mobile-sales" href={salesWhatsApp}>طلب عرض سعر</a><a className="mobile-engineering" href={engineeringWhatsApp}>استفسار هندسي فني</a></nav></details>
      </div>
    </header>
    {children}
    <footer className="footer">
      <div className="container footer-grid partnership-footer">
        <div><a className="brand brand-footer" href="/"><BrandLockup footer /></a><h3 className="footer-partnership-title">الحسن للصناعات الهندسية &amp; أسامة هيكل للتجارة والتوريدات</h3><p>شراكة متكاملة في التصنيع والتوريد الزراعي والصناعي، تجمع خبرة المصنع بكفاءة المبيعات وخدمة العملاء.</p></div>
        <div><h3>روابط سريعة</h3>{nav.slice(1).map(([href,label])=><a href={href} key={href}>{label}</a>)}</div>
        <div><h3>المبيعات والتوريد</h3><span>أسامة هيكل للتجارة والتوريدات</span><a href="tel:00963943990777" dir="ltr">00963 943 990 777</a><a href="mailto:sales@osh-hassan.com" dir="ltr">sales@osh-hassan.com</a></div>
        <div><h3>الهندسة والتصنيع</h3><span>شركة الحسن — إسماعيل حورية</span><a href="tel:00963937171347" dir="ltr">00963 937 171 347</a><a href="mailto:engineering@osh-hassan.com" dir="ltr">engineering@osh-hassan.com</a></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 الحسن للصناعات الهندسية &amp; أسامة هيكل للتجارة والتوريدات. جميع الحقوق محفوظة.</span><span>دمشق — سوريا · osh-hassan.com</span></div>
    </footer>
    <div className="floating-contacts"><a className="whatsapp-float sales-float" href={salesWhatsApp}><b>طلب عرض سعر</b><span>المبيعات والتوريد</span></a><a className="whatsapp-float engineering-float" href={engineeringWhatsApp}><b>استفسار هندسي</b><span>المصنع والدعم الفني</span></a></div>
  </>;
}

export function PageHero({eyebrow,title,copy}:{eyebrow:string,title:string,copy:string}) {
  return <section className="page-hero"><div className="container"><span className="eyebrow light">{eyebrow}</span><h1>{title}</h1><p>{copy}</p></div></section>;
}

export function ContactBand() {
  return <section className="contact-band"><div className="container"><div><span className="eyebrow light">مساران واضحان لخدمتكم</span><h2>من الاستشارة الهندسية إلى عرض السعر والتوريد</h2></div><div className="contact-band-actions"><a className="button white" href={salesWhatsApp}>طلب عرض سعر / توريد</a><a className="button glass" href={engineeringWhatsApp}>استفسار هندسي فني</a></div></div></section>;
}
