import { SiteShell, ContactBand } from "./site-shell";
import { products } from "./site-data";

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="hero">
          <img className="hero-media" src="/assets/products/field-residue-processor-hero-hero.webp" alt="آلة لمعالجة المخلفات الزراعية أثناء العمل في الحقل" />
          <div className="hero-overlay" />
          <div className="container hero-content">
            <span className="eyebrow light">مؤسسة أسامة هيكل التجارية</span>
            <h1>حلول هندسية متطورة<br />لخدمة الزراعة</h1>
            <p>نوفر معدات وآلات زراعية عملية تجمع بين متانة التصنيع، كفاءة الأداء، وسهولة التشغيل — بصفتنا وكيلاً لمنتجات الحسن للصناعات الهندسية.</p>
            <div className="hero-actions">
              <a className="button primary" href="/products">استكشف منتجاتنا <span>←</span></a>
              <a className="button glass" href="https://wa.me/963943990777">تحدث معنا عبر واتساب</a>
            </div>
          </div>
          <div className="hero-stat"><b>9</b><span>حلول ومعدات موثقة</span></div>
        </section>

        <section className="section intro-section">
          <div className="container split-intro">
            <div>
              <span className="eyebrow">حلول من واقع العمل</span>
              <h2>معدات تلائم احتياجات المزارع وظروف التشغيل المحلية</h2>
            </div>
            <div className="intro-copy">
              <p>نساعد المزارعين والمؤسسات والمشاريع الزراعية على رفع كفاءة العمليات وتقليل الجهد والاستفادة الأفضل من الموارد، عبر حلول تغطي البذار وتجهيز الأعلاف ومعالجة المخلفات والنقل الزراعي.</p>
              <a className="text-link" href="/about">تعرّف إلى المؤسسة <span>←</span></a>
            </div>
          </div>
        </section>

        <section className="section products-preview">
          <div className="container">
            <div className="section-heading">
              <div><span className="eyebrow">منتجات مختارة</span><h2>حلول للزراعة والتجهيز</h2></div>
              <a className="button outline" href="/products">عرض جميع المنتجات</a>
            </div>
            <div className="featured-grid">
              {products.slice(0, 4).map((p, i) => (
                <article className={`product-tile ${i === 0 ? "wide" : ""}`} key={p.code}>
                  <img src={p.image} alt={p.name} />
                  <div className="tile-content"><small>{p.code}</small><h3>{p.name}</h3><p>{p.tagline}</p><a href={`/products#p-${p.code}`} aria-label={`تفاصيل ${p.name}`}>التفاصيل <span>←</span></a></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section why-us">
          <div className="container why-grid">
            <div className="why-title"><span className="eyebrow light">لماذا نحن؟</span><h2>شريك يفهم تحديات العمل الزراعي</h2><p>حلول موثوقة تبدأ من الحاجة الفعلية، وتستمر بالدعم الفني وخدمة ما بعد البيع.</p></div>
            <div className="benefits-grid">
              {[
                ["01", "خبرة متخصصة", "خبرة عملية في تصنيع وتطوير وتوريد الآلات الزراعية."],
                ["02", "تصنيع متين", "هياكل ومكونات مصممة لتحمل ظروف التشغيل الزراعي."],
                ["03", "حلول حسب الحاجة", "إمكانية تكييف بعض المعدات وفق متطلبات المشروع."],
                ["04", "دعم ما بعد البيع", "اهتمام بالتركيب والتشغيل والصيانة والدعم الفني."],
              ].map(([n,t,d]) => <article className="benefit" key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}
            </div>
          </div>
        </section>

        <section className="section services-strip">
          <div className="container section-heading"><div><span className="eyebrow">خدماتنا</span><h2>من التوريد إلى التشغيل</h2></div><a className="text-link" href="/services">كل الخدمات والخبرات <span>←</span></a></div>
          <div className="container service-cards">
            {["تصميم وتصنيع المعدات حسب الطلب", "التركيب والتشغيل والتدريب", "الصيانة والدعم الفني"].map((s,i)=><article key={s}><b>0{i+1}</b><h3>{s}</h3></article>)}
          </div>
        </section>
        <ContactBand />
      </main>
    </SiteShell>
  );
}
