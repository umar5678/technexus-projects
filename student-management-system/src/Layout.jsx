import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
  
      <main className="flex-grow">
        <Outlet />
        <ScrollRestoration/>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
