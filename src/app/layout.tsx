import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./glob.css";
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from 'sonner';
import { VisualEditsMessenger } from "orchids-visual-edits";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Umit Barlas - Marketing & Content Manager",
  description: "Portfolio de Umit Barlas - Marketing & Content Manager | AI-Augmented Enthusiast",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
        <VisualEditsMessenger />
      </body>
    </html>
  );
}
