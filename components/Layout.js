import React from "react";
import Footer from "./Footer";
import Nav from "./Nav";

export const PublicLayout = ({ children }) => {
  return (
    <div className="pb-6 sm:pb-8 lg:pb-12">
      <div className="h-screen justify-between max-w-screen-2xl px-4 md:px-8 mx-auto">
        <Nav />

        {children}

        <Footer />
        
      </div>
    </div>
  );
}

export const Blank = ({ children }) => {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="h-screen justify-between max-w-screen-2xl px-4 md:px-8 mx-auto">
        {children}        
      </div>
    </div>
  );
}
