import Link from "next/link";
import React, { useState } from "react";

function Nav() {
  const [show, setShow] = useState(false);

  function NoAvailable() {
    alert("Not yet implement!");
  }

  return (
    <>
      <header className="flex justify-between items-center py-4 md:py-8 mb-4">
        <Link href="/" passHref>
          <a
            className="inline-flex items-center text-gray-800 text-xl font-bold gap-2.5"
            aria-label="logo"
          >
            🤞🏻 Among Us Only
          </a>
        </Link>

        <nav className="hidden lg:flex gap-12">
          <Link href="/" passHref>
            <a className="text-gray-800 hover:text-[#ED639E] text-lg font-semibold">
              Archive
            </a>
          </Link>
          <Link href="/about" passHref>
            <a className="text-gray-800 hover:text-[#ED639E] text-lg font-semibold transition duration-100">
              About
            </a>
          </Link>
          <Link href="/journey" passHref>
            <a className="text-gray-800 hover:text-[#ED639E] text-lg font-semibold transition duration-100">
              Journey 🚀
            </a>
          </Link>
        </nav>
        <Link href="/" passHref>
          <button
            type="button"
            className="hidden lg:inline-block bg-[#ED639E] hover:bg-[#e45190] focus-visible:ring ring-indigo-300 text-white active:text-gray-700 text-sm md:text-base font-semibold text-center rounded outline-none transition duration-100 px-8 py-3 shadow-md"
          >
            Submit
          </button>
        </Link>

        <div className="relative inline-block text-left">
          <div>
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="inline-flex items-center lg:hidden bg-gray-50 hover:bg-gray-100 text-gray-600 text-sm md:text-base font-semibold rounded-lg gap-2 px-2.5 py-2"
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
          </div>
          {show && (
            <>
              <div className="origin-top-right absolute right-0 mt-2 w-80 rounded-md shadow-lg bg-gray-100 ring-1 ring-black ring-opacity-5 text-center">
                <div
                  className="py-1 "
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link href="/archive" passHref>
                    <a
                      className="block px-4 py-2 text-md text-gray-900 hover:bg-gray-100 hover:text-gray-900 "
                      role="menuitem"
                    >
                      <span className="flex flex-col">
                        <span>Archive</span>
                      </span>
                    </a>
                  </Link>

                  <Link href="/about" passHref>
                    <a
                      className="block px-4 py-2 text-md text-gray-900 hover:bg-gray-100 hover:text-gray-900 "
                      role="menuitem"
                    >
                      <span className="flex flex-col">
                        <span>About</span>
                      </span>
                    </a>
                  </Link>

                  <Link href="/journey" passHref>
                    <a
                      className="block px-4 py-2 text-md text-gray-900 hover:bg-gray-100 hover:text-gray-900 "
                      role="menuitem"
                    >
                      <span className="flex flex-col">
                        <span>Journey 🚀</span>
                      </span>
                    </a>
                  </Link>

                  <Link href="/submit" passHref>
                    <a
                      className="block px-4 py-2 text-md text-white bg-[#ED639E] hover:bg-[#e45190] hover:text-gray-900 mx-4 rounded"
                      role="menuitem"
                    >
                      <span className="flex flex-col">
                        <span>Submit</span>
                      </span>
                    </a>
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>
      </header>
    </>
  );
}

export default Nav;
