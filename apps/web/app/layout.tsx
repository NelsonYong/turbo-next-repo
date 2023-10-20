import "./globals.css";
import "./base.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Returns Tool",
  description: "Returns Tool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
