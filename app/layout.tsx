import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://osh-hassan.com"),
  title: { default:"الحسن للصناعات الهندسية & أسامة هيكل للتجارة والتوريدات", template:"%s | الحسن وأسامة هيكل" },
  description:"شراكة متكاملة تجمع تصنيع الآلات والمعدات الزراعية والصناعية لدى الحسن للصناعات الهندسية مع المبيعات والتوريد عبر أسامة هيكل للتجارة والتوريدات في سوريا.",
  keywords:["آلات زراعية في سوريا","معدات زراعية","تصنيع آلات زراعية","الحسن للصناعات الهندسية","أسامة هيكل للتجارة والتوريدات","معدات أعلاف","بذارات","مكابس","معدات صناعية"],
  alternates:{ canonical:"/" },
  openGraph:{ type:"website",locale:"ar_SY",siteName:"الحسن للصناعات الهندسية & أسامة هيكل للتجارة والتوريدات",title:"حلول متكاملة من التصنيع إلى التوريد",description:"تصنيع هندسي متخصص لدى الحسن، ومبيعات وتوريد عبر أسامة هيكل للتجارة والتوريدات.",url:"https://osh-hassan.com",images:[{url:"/og.jpg",width:1792,height:928,alt:"الحسن للصناعات الهندسية وأسامة هيكل للتجارة والتوريدات"}] },
  robots:{index:true,follow:true},
  icons:{icon:"/al-hasan-logo.jpg",shortcut:"/al-hasan-logo.jpg"}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ar" dir="rtl"><body>{children}</body></html>}
