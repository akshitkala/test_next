import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});
export const metadata = {
  title: "Lovely Professional University | LPU",
  description: "Experience world-class education at Lovely Professional University. Explore programs, admissions, and campus life."
};
export default function RootLayout({
  children
}) {
  return <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>;
}