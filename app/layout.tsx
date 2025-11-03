import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navigation/Navbar";
import Footer from "@/components/footer/Footer";

const inter = localFont({
  src: "../public/fonts/InterVF.ttf",
  variable: "--font-body",
  weight: "100 200 300 400 500 700 800 900",
});

const montserrat = localFont({
  src: "../public/fonts/MontserratVF.ttf",
  variable: "--font-title",
  weight: "100 200 300 400 500 700 800 900",
});

export const metadata: Metadata = {
  title: "HB Prom | Promotion Immobilière",
  description: "Bâtisseur de père en fils",
  icons: {
    icon: "/logo/logo-hb-sm.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
