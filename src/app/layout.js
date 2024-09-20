
import Header from "../../components/header";
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <title>فروشگاه فایل</title>
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
