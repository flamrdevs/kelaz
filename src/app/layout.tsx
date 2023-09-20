import "~/app/globals.css";

import type { Metadata } from "next";

import clsx from "clsx";

import * as fonts from "[config]/fonts";

export const metadata: Metadata = {
  title: "Kelaz",
  description: "Kelaz",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={clsx(fonts.inter.variable, fonts.roboto_mono.variable, "font-sans")}>{children}</body>
    </html>
  );
}
