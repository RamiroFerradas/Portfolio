import { LanguageProvider } from "./context/LanguajeContext";
import { ThemeProvider } from "./context/ThemeContext";
import Image from "next/image";
import appBg from "../public/images/background/fondito-min.jpg";
import "./tailwind.globals.css";
import { Josefin_Sans } from "next/font/google";

import localFont from "@next/font/local";
import Head from "next/head";
import Script from "next/script";

const josefinSans = localFont({
  src: [
    {
      path: "../public/fonts/JosefinSans-Italic-VariableFont_wght.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/JosefinSans-VariableFont_wght.ttf",
      weight: "700",
    },
  ],
  variable: "--font-josefin_sans",
});

const inter = Josefin_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Ramiro Ferradas",
  description: "Portafolio Ramiro Ferradas",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Caveat&family=Josefin+Sans:wght@500&display=swap"
          // rel="stylesheet"
        />
        <meta
          name="google-site-verification"
          content="lxRS46NXhq36gW0O8UDN2O_srvTL5d_Fd74kynCd6A0"
        />
        <Script
          strategy="lazyOnload"
          src={`https://www.googletagmanager.com/gtm.js?id=GTM-M7TK9HN`}
        />
      </Head>
      <body className={inter.className}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M7TK9HN"
            height="0"
            width="0"
            style="display:none;visibility:hidden"
          ></iframe>
        </noscript>
        <Image
          alt="background"
          src={appBg}
          className="fixed h-screen object-cover w-screen"
          priority
        />
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
