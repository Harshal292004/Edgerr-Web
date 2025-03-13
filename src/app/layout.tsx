import "./globals.css";
import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased  dark`} id= "root">
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
