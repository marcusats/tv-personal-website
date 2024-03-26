
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
    <html lang="en">
      <body>
        <Navbar />
        {children}
        </body>
    </html>
  );
}