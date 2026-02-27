
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// Remove the import completely

export const metadata = {
  title: "NZ Moving Services | Affordable Christchurch Movers",
  description: "Your locally owned moving company in Christchurch...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}