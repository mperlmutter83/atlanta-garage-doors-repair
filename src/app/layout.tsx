import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Atlanta Garage Doors Repair | We Fix and Replace Garage Doors",
  description: "Experience seamless garage door solutions with our expert team, dedicated to providing top-notch repair and replacement services in Atlanta and surrounding areas.",
  keywords: "garage door repair, garage door replacement, Atlanta, Buckhead, Midtown, Sandy Springs, garage door service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Atlanta Garage Doors Repair",
              "description": "Expert garage door repair and replacement services in Atlanta and surrounding areas.",
              "url": "https://atlantagaragedoorsrepair.com",
              "telephone": "(470) 865-7616",
              "areaServed": [
                "Downtown Atlanta", "Midtown", "Buckhead", "Decatur", "Sandy Springs",
                "Marietta", "Roswell", "Alpharetta", "Dunwoody", "Brookhaven",
                "East Point", "Peachtree City", "Smyrna", "Norcross", "Lawrenceville",
                "Duluth", "Johns Creek", "Kennesaw"
              ],
              "serviceType": ["Garage Door Repair", "Garage Door Replacement"],
              "priceRange": "$$"
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
