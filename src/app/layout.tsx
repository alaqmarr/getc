
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter } from "next/font/google";
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import { Metadata } from "next";
const inter = Inter({ subsets: ["latin"] });
import logo from "@/app/logo.jpg";

export const metadata: Metadata = ({
  title: "General Engineering and Tools Centre",
  description: "This is Home for General Engineering and Tools Centre",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="shortcut icon" href={logo.src} type="image/x-icon" />
        <link rel="icon" href={logo.src} type="image/x-icon" />
        <meta charSet="utf-8" />
      </head>

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className}`}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}

import { Providers } from "./providers";
