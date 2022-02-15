import Link from "next/link";
import React from "react";
import Image from "next/image";
import Head from "next/head";

function About() {
  return (
    <div>
      <Head>
        <title>
          About | Among Us Only | Secret Message for Loved One Stay Secret
        </title>
        <meta
          name="description"
          content="About | Among Us Only | Secret Message for Loved One Stay Secret"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="w-full sm:w-96 h-96 flex justify-center items-center bg-gray-100 shadow-lg rounded-lg overflow-hidden relative mx-auto">
            <div className="w-full h-full object-cover object-center absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
                alt="Maintenance picture"
                layout="responsive"
                width={700}
                height={700}
              />
            </div>
            <div className="flex flex-col justify-center items-center relative p-8 md:p-16">
              <h1 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-2">
                503
              </h1>

              <p className="text-white md:text-lg text-center mb-8">
                The page is under construction or maintenance
              </p>

              <Link href="/" passHref>
                <a className="inline-block bg-white hover:bg-gray-100 focus-visible:ring ring-indigo-300 text-gray-900 active:text-gray-700 text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                  Go home
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

About.layout = "PUBLIC";
export default About;
