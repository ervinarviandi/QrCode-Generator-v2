import type { Metadata } from "next";
import { Caveat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/atoms/theme-provider";
import { Toaster } from "@/components/ui/toaster";
const caveat = Caveat({ subsets: ["latin"] });

// https://qrcode-ervin.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrands1.29797e4f.png&w=32&q=75

<head>
  <link
    rel="icon"
    href="https://qrcode-ervin.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbrands1.29797e4f.png&w=32&q=75"
    type="image/png"
    sizes="32x32"
  />
</head>;

export const metadata: Metadata = {
  title: "QrCode Generator Ervin",
  description: "QrCode Generator ervin arviandi",
  icons: {
    icon: "/images/brands1.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={caveat.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <link rel="icon" href="/images/brands1.png" sizes="any" />
          {children}
          <Toaster />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
