import React from "react";
import { Header, Footer } from "./components";
import { Outlet, ScrollRestoration } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1 bg-white dark:bg-slate-900">
        <Outlet />
        <ScrollRestoration/>
      </div>
      <Footer />
    </div>
  );
};

export default App;
