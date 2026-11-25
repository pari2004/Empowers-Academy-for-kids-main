import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Empowers Academy — Get a Better Offer in 180 Days. Or Your Money Back. In Writing.",
  description:
    "Live, mentor-led AI programs for experienced professionals, career switchers, and non-tech backgrounds alike. Backed by a signed legal guarantee before you pay a rupee.",
  keywords: [
    "AI training",
    "machine learning course",
    "generative AI",
    "agentic AI",
    "job guarantee",
    "Empowers Academy",
    "Bangalore",
  ],
  openGraph: {
    title: "Empowers Academy — 180-Day Better-Offer Guarantee",
    description:
      "Live, mentor-led AI programs backed by a signed legal guarantee before you pay a rupee.",
    type: "website",
  },
};

// Runs before paint to apply the saved theme and avoid a flash of the wrong mode.
const themeScript = `
(function() {
  try {
    var stored = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (stored === 'dark' || (!stored && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${outfit.variable} ${jakarta.variable} ${inter.variable} ${jetbrains.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
