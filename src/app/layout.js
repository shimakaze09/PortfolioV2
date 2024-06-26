import { Inter } from "next/font/google";
import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "J Yang Portfolio",
  description: "My personal portfolio showcasing my journey in coding and 3D modeling.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
