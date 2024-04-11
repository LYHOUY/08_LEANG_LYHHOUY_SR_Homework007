import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "@/components/ui/NavbarComponent";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavbarComponent/>
        {children}</body>
    </html>
  );
}
