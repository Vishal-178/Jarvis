"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { RequiredDataProvider } from "@/provider/MainDataProvider";
import "../styles/index.css";
import WhatsAppButton from "@/components/WhatsAppPop";


export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  console.log("MainLayout");
  return (
    <>
      <RequiredDataProvider>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton/>
      </RequiredDataProvider>
      </>
  );
}


