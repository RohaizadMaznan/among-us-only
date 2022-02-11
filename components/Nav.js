import React from "react";

function Nav() {
  return (
    <>
      <header className="flex justify-between items-center py-4 md:py-8 mb-4">
        <a
          href="/"
          className="inline-flex items-center text-black-800 text-xl font-bold gap-2.5"
          aria-label="logo"
        >
           🤞🏻 Among Us Only
        </a>
        <nav className="hidden lg:flex gap-12">
          <a href="#" className="text-[#ED639E] text-lg font-semibold">
            Archive
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-[#ED639E] text-lg font-semibold transition duration-100"
          >
            About
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-[#ED639E] text-lg font-semibold transition duration-100"
          >
            Journey 🚀
          </a>
        </nav>
        <a
          href="#"
          className="hidden lg:inline-block bg-[#4535AA] hover:bg-[#372994] focus-visible:ring ring-indigo-300 text-white active:text-gray-700 text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-3 shadow-md"
        >
          Submit
        </a>

        <button
          type="button"
          className="inline-flex items-center lg:hidden bg-gray-200 hover:bg-gray-300 focus-visible:ring ring-indigo-300 text-gray-500 active:text-gray-700 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
          Menu
        </button>
      </header>
    </>
  );
}

export default Nav;
