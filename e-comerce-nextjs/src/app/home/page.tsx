"use client";
import React from "react";
import Header from "@/app/Shared-components/Header";
import Footer from "@/app/Shared-components/Footer";
import HomePageContent from "./components/Content";

const HomePage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow px-4 py-6">
        <HomePageContent />
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;
