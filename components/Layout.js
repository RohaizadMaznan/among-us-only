import React from "react";
import Nav from "./Nav";

export default function PublicLayout({ children }) {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
        <Nav />

        {children}
      </div>
    </div>
  );
}
