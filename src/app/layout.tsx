import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "../assets/fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "../assets/fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "HuuTai | Personal Portfolio",
  description: "HuuTai is a website developer ...",
  applicationName: "Portfolio",
  keywords: ["HUUTAI", "Portfolio", "Developer", "MOBILE DEV"],
  icons: "./assets/imgs/avatar.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/manager-project-3bc13.appspot.com/o/Screenshot_20240505_233108_Gallery-removebg-preview%201.png?alt=media&token=d20cb350-f89a-4b0e-876e-983db0ef7620"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
