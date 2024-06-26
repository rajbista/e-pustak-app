import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./providers/ThemeProvider";
import ReactQueryProvider from "./providers/ReactQueryProvider";
import { Grid } from "@radix-ui/themes";

import NavBar from "./NavBar";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ePustak.org - Your Personal Books Haven",
  description:
    "Discover a world of endless books with ePustak.org - Access thousands of books, customize your reading experience, and sync seamlessly across devices. Dive into your next reading adventure today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ReactQueryProvider>
            <NavBar />
            <Grid columns={{ md: "12" }} gap="1">
              <aside className="md:col-span-2">{/* <CategoryList /> */}</aside>
              <main className="md:col-span-8"> {children}</main>
              <aside className="md:col-span-2">{/* <CategoryList /> */}</aside>
            </Grid>
          </ReactQueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
