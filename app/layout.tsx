import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://osh-hassan.com"),
  title: { default:"مؤسسة أسامة هيكل التجارية | حلول ومعدات زراعية", template:"%s | مؤسسة أسامة هيكل التجارية" },
  description:"مؤسسة أسامة هيكل التجارية، وكيل منتجات الحسن للصناعات الهندسية. معدات وحلول للبذار وتجهيز الأعلاف ومعالجة المخلفات والنقل الزراعي.",
  alternates:{ canonical:"/" },
  openGraph:{ type:"website",locale:"ar_SY",siteName:"مؤسسة أسامة هيكل التجارية",title:"حلول هندسية متطورة لخدمة الزراعة",description:"معدات وآلات زراعية عملية تجمع بين متانة التصنيع وكفاءة الأداء.",url:"https://osh-hassan.com",images:[{url:"/og.jpg",width:1792,height:928,alt:"مؤسسة أسامة هيكل التجارية — حلول هندسية متطورة لخدمة الزراعة"}] },
  robots:{index:true,follow:true},
  icons:{icon:"/brand-logo.jpg",shortcut:"/brand-logo.jpg"}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl"><body>{children}</body></html>}
