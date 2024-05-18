"use client";
import React from "react";
import QrCode from "@/components/commons/QrCode";
import Header from "@/components/commons/Header";
import Footer from "@/components/commons/Footer";

export function Layout() {
  return (
    <div>
      <Header />
      <QrCode />
      <Footer />
    </div>
  );
}
