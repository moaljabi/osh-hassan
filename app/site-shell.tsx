const nav = [["/","الرئيسية"],["/about","من نحن"],["/products","المنتجات والحلول"],["/services","خدماتنا وخبراتنا"],["/contact","تواصل معنا"]];

export function SiteShell({children}:{children:React.ReactNode}) {
  return <>
    <div className="topbar"><div className="container topbar-inner"><span>دمشق — سوريا</span><span><a href="mailto:info@osh-hassan.com">info@osh-hassan.com</a><i /> <a href="tel:00963943990777" dir="ltr">00963 943 990 777</a></span></div></div>
    <header className="site-header">
      <div className="container nav-wrap">
        <a className="brand" href="/" aria-label="مؤسسة أسامة هيكل التجارية — الرئيسية">
          <img className="brand-mark" src="/brand-logo.jpg" alt="" /><span><strong>أسامة هيكل</strong><small>للتجارة والحلول الهندسية</small></span>
        </a>
        <nav className="desktop-nav" aria-label="التنقل الرئيسي">{nav.map(([href,label])=><a href={href} key={href}>{label}</a>)}</nav>
        <a className="nav-contact" href="https://wa.me/963943990777">اطلب استشارة <span>←</span></a>
        <details className="mobile-menu"><summary aria-label="فتح القائمة"><span /><span /><span /></summary><nav>{nav.map(([href,label])=><a href={href} key={href}>{label}</a>)}</nav></details>
      </div>
    </header>
    {children}
    <footer className="footer">
      <div className="container footer-grid">
        <div><a className="brand brand-footer" href="/"><img className="brand-mark" src="/brand-logo.jpg" alt="" /><span><strong>أسامة هيكل</strong><small>للتجارة والحلول الهندسية</small></span></a><p>حلول ومعدات هندسية موثوقة لخدمة القطاع الزراعي، بصفتنا وكيلاً لمنتجات الحسن للصناعات الهندسية.</p></div>
        <div><h3>روابط سريعة</h3>{nav.slice(1).map(([href,label])=><a href={href} key={href}>{label}</a>)}</div>
        <div><h3>تواصل معنا</h3><a href="tel:00963943990777" dir="ltr">00963 943 990 777</a><a href="mailto:info@osh-hassan.com">info@osh-hassan.com</a><a href="mailto:sales@osh-hassan.com">sales@osh-hassan.com</a><span>دمشق — سوريا</span></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 مؤسسة أسامة هيكل التجارية. جميع الحقوق محفوظة.</span><span>osh-hassan.com</span></div>
    </footer>
    <a className="whatsapp-float" href="https://wa.me/963943990777" aria-label="تواصل عبر واتساب"><b>واتساب</b><span>رسالة مباشرة</span></a>
  </>;
}

export function PageHero({eyebrow,title,copy}:{eyebrow:string,title:string,copy:string}) {
  return <section className="page-hero"><div className="container"><span className="eyebrow light">{eyebrow}</span><h1>{title}</h1><p>{copy}</p></div></section>
}

export function ContactBand() {
  return <section className="contact-band"><div className="container"><div><span className="eyebrow light">لنتحدث عن احتياجكم</span><h2>حل هندسي يبدأ من فهم متطلبات العمل</h2></div><div className="contact-band-actions"><a className="button white" href="https://wa.me/963943990777">تواصل عبر واتساب</a><a className="button glass" href="/contact">بيانات التواصل</a></div></div></section>
}
