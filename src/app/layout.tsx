import { Inter } from "next/font/google";
import "../styles/index.css";
import MainLayout from "./MainLayout";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={`bg-[#FCFCFC] ${inter.className}`}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}

