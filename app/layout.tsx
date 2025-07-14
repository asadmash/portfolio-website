import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "./provider";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
const jetbrainsMono = localFont({
  src: "./fonts/JetBrainsMono-Bold.ttf",
  variable: "--font-jetbrains-mono",
  weight: "900",
})
const nunitoBold = localFont({
  src: "./fonts/Nunito-Bold.ttf",
  variable: "--nunito-Bold",
  weight: "900",
})
const nunitoRegular = localFont({
  src: "./fonts/Nunito-Regular.ttf",
  variable: "--nunito-regular",
  weight: "200",
})
const loraRegular = localFont({
  src: "./fonts/Lora-Regular.ttf",
  variable: "--lora-regular",
  weight: "400",
})

export const metadata: Metadata = {
  title: "asadMash's portfolio",
  description: "Modern and Minimalist portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body
        className={`${nunitoBold.variable}
        ${nunitoRegular.variable}
        ${loraRegular.variable}
         antialiased`}
      >
      
       <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}
