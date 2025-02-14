import type { Metadata } from "next";
import { manrope } from "@/utils";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={manrope.className}>
            <Header/>           
            <main>{children}</main>   
            {/* <Introduce></Introduce> */}
            <Footer/>
      </body>
    </html>
  );
}
