import { LanguageProvider } from "./context/LanguajeContext";
import { ThemeProvider } from "./context/ThemeContext";
import Image from "next/image";
import appBg from "../public/images/background/fondito-min.jpg";
import "./tailwind.globals.css";
import { Josefin_Sans } from "next/font/google";

const inter = Josefin_Sans({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "Ramiro Ferradas",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
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
