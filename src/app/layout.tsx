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
      <meta title="HuuTai | Personal Portfolio" />
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="title" content="HuuTai | Personal Portfolio" />
        <meta
          name="description"
          content="Welcome to HuuTai's personal portfolio. Explore my projects, skills, and experience in web development."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/" />
        <meta property="og:title" content="HuuTai | Personal Portfolio" />
        <meta
          property="og:description"
          content="Welcome to HuuTai's personal portfolio. Explore my projects, skills, and experience in web development."
        />
        <meta
          property="og:image"
          content="https://firebasestorage.googleapis.com/v0/b/manager-project-3bc13.appspot.com/o/Screenshot_20240505_233108_Gallery-removebg-preview%201.png?alt=media&token=d20cb350-f89a-4b0e-876e-983db0ef7620"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://yourwebsite.com/" />
        <meta property="twitter:title" content="HuuTai | Personal Portfolio" />
        <meta
          property="twitter:description"
          content="Welcome to HuuTai's personal portfolio. Explore my projects, skills, and experience in web development."
        />
        <meta
          property="twitter:image"
          content="https://firebasestorage.googleapis.com/v0/b/manager-project-3bc13.appspot.com/o/Screenshot_20240505_233108_Gallery-removebg-preview%201.png?alt=media&token=d20cb350-f89a-4b0e-876e-983db0ef7620"
        />

        <link
          rel="icon"
          href="https://firebasestorage.googleapis.com/v0/b/manager-project-3bc13.appspot.com/o/Screenshot_20240505_233108_Gallery-removebg-preview%201.png?alt=media&token=d20cb350-f89a-4b0e-876e-983db0ef7620"
        />
        <title>HuuTai | Personal Portfolio</title>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-primary text-primary`}
      >
        {children}
      </body>
    </html>
  );
}
