import React from "react";
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

      <div class="py-6 sm:py-8 lg:py-12">
        <div class="max-w-screen-xl px-4 md:px-8 mx-auto">
          <div class="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div class="h-64 md:h-auto bg-gray-100 overflow-hidden rounded-lg shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1610465299996-30f240ac2b1c?auto=format&q=75&fit=crop&w=600&h=750"
                  loading="lazy"
                  alt="Photo by Martin Sanchez"
                  class="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            <div class="md:pt-8">
              <p class="text-[#ed639e] font-bold text-center md:text-left">
                Who we are
              </p>

              <h1 class="text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">
                Our competitive advantage
              </h1>

              <p class="sm:text-lg mb-6 md:mb-8">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
                <br />
                <br />
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is{" "}
                <a
                  href="#"
                  class=" text-indigo-500 hover:text-indigo-600 active:text-indigo-700 underline transition duration-100"
                >
                  random
                </a>{" "}
                or otherwise generated. It may be used to display a sample of
                fonts or generate text for testing. Filler text is dummy text
                which has no meaning however looks very similar to real text.
              </p>

              <h2 class="text-[#ed639e] text-xl sm:text-2xl font-semibold text-center md:text-left mb-2 md:mb-4">
                About us
              </h2>

              <p class="sm:text-lg mb-6 md:mb-8">
                This is a section of some simple filler text, also known as
                placeholder text. It shares some characteristics of a real
                written text but is random or otherwise generated. It may be
                used to display a sample of fonts or generate text for testing.
                Filler text is dummy text which has no meaning however looks
                very similar to real text.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

About.layout = "PUBLIC";
export default About;
