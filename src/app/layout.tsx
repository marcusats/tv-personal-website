
import "./globals.css"
import Navbar from "./components/Navbar"
import React from "react"






export const metadata = {
  title: "Marcos Salazar",
  description: "Marcos Salazar's personal website",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href="/favicon.ico" />
        <html lang="en" /> 
      </head>
      <html lang="en">
        <body>
          <Navbar />
          {children}
          </body>
      </html>
    </>
  );
}