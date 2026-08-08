import { ContactBand, engineeringWhatsApp, salesWhatsApp, SiteShell } from "./site-shell";
import { products } from "./site-data";

export default function Home() {
  return <SiteShell><main>
    <section className="hero">
      <img className="hero-media" src="/assets/products/field-residue-processor-hero-hero.webp" alt="آلة لمعالجة المخلفات الزراعية أثناء العمل في الحقل" />
      <div className="hero-overlay" />
      <div className="container hero-content">
        <span className="eyebrow light">الحسن للصناعات الهندسية &amp; أسامة هيكل للتجارة والتوريدات</span>
        <h1>حلول متكاملة<br />من التصنيع إلى التوريد</h1>
        <p>نجمع بين خبرة شركة الحسن للصناعات الهندسية في تصميم وتصنيع الآلات والمعدات الزراعية والصناعية، وخبرة أسامة هيكل للتجارة والتوريدات في المبيعات والتوريد وخدمة العملاء، لنقدم حلولاً متكاملة تلبي احتياجات المزارعين والمؤسسات والمشاريع.</p>
        <div className="hero-actions"><a className="button primary" href="/products">استعرض المنتجات <span>←</span></a><a className="button glass" href={salesWhatsApp}>طلب عرض سعر</a><a className="button glass engineering-hero-action" href={engineeringWhatsApp}>استفسار هندسي فني</a></div>
      </div>
      <div className="hero-stat"><b>9</b><span>آلات ومعدات موثقة المواصفات</span></div>
    </section>

    <section className="section partnership-section"><div className="container"><div className="section-heading partnership-heading"><div><span className="eyebrow">تكامل أعمال واضح</span><h2>شراكة تجمع خبرة التصنيع بكفاءة التوريد</h2></div><p>علاقة شراكة تجارية وتشغيلية بين جهتين مستقلتين، لكل منهما دور محدد لخدمة العميل من المصنع حتى التسليم.</p></div><div className="partner-cards">
      <article className="partner-card manufacturer"><img src="/al-hasan-logo.jpg" alt="شعار شركة الحسن للصناعات الهندسية" /><span>التصنيع والهندسة</span><h3>شركة الحسن للصناعات الهندسية</h3><p>تصميم وتصنيع وتطوير الآلات والمعدات الزراعية والصناعية، وتقديم الحلول الهندسية والدعم الفني.</p><a href={engineeringWhatsApp}>استفسار هندسي فني ←</a></article>
      <article className="partner-card commercial"><img src="/osh-logo.jpg" alt="شعار أسامة هيكل للتجارة والتوريدات" /><span>المبيعات والتوريد</span><h3>أسامة هيكل للتجارة والتوريدات</h3><p>إدارة المبيعات والتوريد والعقود وطلبات الأسعار والتواصل التجاري مع العملاء والمنظمات.</p><a href={salesWhatsApp}>طلب عرض سعر / توريد ←</a></article>
    </div></div></section>

    <section className="section products-preview"><div className="container"><div className="section-heading"><div><span className="eyebrow">منتجات مختارة</span><h2>حلول زراعية وصناعية من المصنع</h2></div><a className="button outline" href="/products">عرض جميع المنتجات</a></div><div className="featured-grid">{products.slice(0,4).map((p,i)=><article className={`product-tile ${i===0?"wide":""}`} key={p.code}><img src={p.image} alt={p.name} /><div className="tile-content"><small>{p.code}</small><h3>{p.name}</h3><p>{p.tagline}</p><a href={`/products#p-${p.code}`}>التفاصيل <span>←</span></a></div></article>)}</div></div></section>

    <section className="section why-us"><div className="container why-grid"><div className="why-title"><span className="eyebrow light">قيمة التكامل</span><h2>مصنع متخصص ومسار تجاري واضح</h2><p>يتواصل العميل مع القسم المناسب مباشرة، مع بقاء الدعم الهندسي والتوريد ضمن تجربة متكاملة.</p></div><div className="benefits-grid">{[["01","تصنيع مباشر","الآلات والمعدات المعروضة مصنعة مباشرة لدى شركة الحسن للصناعات الهندسية."],["02","دعم فني متخصص","وصول مباشر إلى المصنع للاستفسارات الفنية وطلبات التصنيع الخاصة."],["03","توريد منظم","إدارة عروض الأسعار والعقود والتوريد عبر أسامة هيكل للتجارة والتوريدات."],["04","خدمة ممتدة","تنسيق للتركيب والتشغيل والصيانة وخدمة العملاء وفق نطاق العمل."]].map(([n,t,d])=><article className="benefit" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>

    <section className="section services-strip"><div className="container section-heading"><div><span className="eyebrow">خدماتنا</span><h2>من الفكرة الهندسية إلى التوريد</h2></div><a className="text-link" href="/services">كل الخدمات والخبرات <span>←</span></a></div><div className="container service-cards">{["التصميم والتصنيع والتطوير","التركيب والتشغيل والدعم الفني","المبيعات وعروض الأسعار والتوريد"].map((s,i)=><article key={s}><b>0{i+1}</b><h3>{s}</h3></article>)}</div></section>
    <ContactBand />
  </main></SiteShell>;
}
