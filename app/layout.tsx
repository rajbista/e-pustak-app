import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "./providers/ThemeProvider";
import NavBar from "./NavBar";

import "./globals.css";
import { Grid } from "@radix-ui/themes";

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
          <NavBar />
          <Grid columns={{ md: "12" }} gap="1">
            <aside className="md:col-span-2">Aside</aside>
            <main className="md:col-span-10">{children}</main>
          </Grid>
        </ThemeProvider>
      </body>
    </html>
  );
}
