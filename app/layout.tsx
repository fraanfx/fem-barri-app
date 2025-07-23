import type { Metadata } from "next";
import "@/styles/globals.css";


import Header from "@/components/Header";

import Footer from "@/components/Footer";
import { Montserrat } from 'next/font/google'


import { config } from "@fortawesome/fontawesome-svg-core";
// Tell Font Awesome to skip adding the CSS automatically 
// since it's already imported above
config.autoAddCss = false; 

const montserratFont = Montserrat({
  subsets:['latin'],
  weight: ['100','200','300','400','500','600','700','800',]
})


export const metadata: Metadata = {
  title: "FemBarri",
  description: "Descubre nuevos sitios en bcn",
  // description: "I built and deployed a full-stack Next.js 15 app with App Router and TypeScript. The /locals page uses Server Components, SSR, and internal API Routes. Data is fetched on the server using safe relative paths to avoid build-time issues on Vercel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${montserratFont.className}`}>
          <main className={`app`}>
            <Header />
          {children}
        </main>
            <Footer />
      </body>
    </html>
  );
}
