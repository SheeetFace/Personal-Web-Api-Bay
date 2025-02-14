import { Metadata, Viewport } from "next";
import { SpeedInsights } from '@vercel/speed-insights/next';

import clsx from "clsx";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BreadcrumbsMain } from "@/components/Breadcrumbs/Breadcrumbs";

import { Providers } from "./providers";

import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};


export default function RootLayout({children}:{children: React.ReactNode}){
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          "bg-image",
          fontSans.variable, 
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark"}}>
          <div className="relative flex flex-col h-screen max-w-7xl mx-auto">
            <Navbar />
            <BreadcrumbsMain />
            <main className="container pt-16 flex-grow px-6"> 
              {children}
              <SpeedInsights />
            </main>
            <Footer/>
          </div>
        </Providers> 
      </body>
    </html>
  );
}
