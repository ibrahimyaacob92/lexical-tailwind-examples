import clsx from "clsx";
import { Inter } from "next/font/google";
import Sidebar from "~/components/Sidebar";
import "~/styles/globals.css";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={clsx(inter.className, "flex")}>
        <Sidebar />
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  );
}
