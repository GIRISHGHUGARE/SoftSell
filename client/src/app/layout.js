import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: {
    template: "%s | SoftSell",
    default: "SoftSell",
  },
  description: "SoftSell – Buy and Sell Software with Ease",
  openGraph: {
    title: "SoftSell – Buy and Sell Software with Ease",
    description: "Discover a wide range of software solutions on SoftSell. Simplifying the buying and selling process.",
    url: "https://softsell.com",
    siteName: "SoftSell",
    images: [
      {
        url: "https://softsell.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SoftSell Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SoftSell – Buy and Sell Software with Ease",
    description: "Explore a variety of software solutions on SoftSell. Your go-to platform for software transactions.",
    image: "https://softsell.com/twitter-image.jpg",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

