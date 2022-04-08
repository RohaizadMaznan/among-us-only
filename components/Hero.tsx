import Link from "next/link";
import React from "react";

export const Hero = () => (
  <section className="flex flex-col items-center">
    <div className="flex items-center dark:bg-transparent dark:text-white bg-gray-50 text-gray-500 dark:border-[#343b48] border rounded gap-2 p-2">
      <span className="bg-[#ffdbeb] text-[#ED639E] text-xs font-semibold leading-none rounded-full px-2 py-1 mt-0.5">
        New
      </span>

      <span className="text-sm">
        🚀 Our team is still developing and improving the current website
      </span>

      <Link href="/journey" passHref>
        <a className="text-[#ED639E] hover:text-[#ca4c83] active:text-indigo-700 text-sm font-bold transition duration-100">
          More
        </a>
      </Link>
    </div>

    <div className="max-w-screen flex flex-col items-center text-center pt-8 lg:pt-20">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 md:mb-12">
        Let the secret stay unknown among us
      </h1>

      <p className="dark:text-white text-gray-500 xl:text-lg leading-relaxed mb-8 md:mb-12">
        A collection of secrets only shared among us. Express your messages to
        loved one or first loves.
      </p>

      {/* <div className="w-full flex flex-col sm:flex-row sm:justify-center gap-2.5">
          <a
            href="#"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
          >
            Start now
          </a>

          <a
            href="#"
            className="inline-block bg-white hover:bg-gray-100 active:bg-gray-200 focus-visible:ring ring-indigo-300 border text-gray-500 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3"
          >
            Take tour
          </a>
        </div> */}
    </div>
  </section>
);
