import React from "react";
import Head from "next/head";
import Image from "next/image";

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
        <div className="max-w-screen-xl px-4 md:px-8 mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div>
              <div className="h-64 md:h-auto overflow-hidden rounded-lg shadow-lg">
                <div className="w-full h-full object-cover object-center">
                  <Image
                    src="https://images.unsplash.com/photo-1503135935062-b7d1f5a0690f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Love & roses"
                    width={500}
                    height={600}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>

            <div className="md:pt-8">
              <p className="text-[#ed639e] font-bold text-center md:text-left">
                The Among Us Only
              </p>

              <h1 className="text-2xl sm:text-3xl font-bold text-center md:text-left mb-4 md:mb-6">
                A collection of unsent messages for your loved ones.
              </h1>

              <p className="sm:text-lg mb-6 md:mb-8">
                The Among Us Only project is an achive collection of text
                messages to first loves that have never been sent. Messages are
                anonymously submitted from all over the world. Let the inner
                feel be told as an annonymous.
                <br />
                <br />
                The submissions cover a wide range of topics, evoking nearly
                every feeling imaginable. Messages have been sent to lovers,
                best friends, exes, parents, siblings, and even pets, with the
                term &quot;first love&quot; being subject to interpretation. All texts are
                uploaded and preserved in a digital archive that may be searched
                by name and colour. The Unsent Project strives to create a safe
                haven for those who are experiencing mental health issues.
              </p>
              <div className="max-w-4xl p-4 rounded-lg shadow">
                <div className="mb-2">
                  <div className="h-3 text-6xl text-left">&ldquo;</div>
                  <p className="px-4 text-xl italic text-center">
                    Love is heavy and light, bright and dark, hot and cold, sick
                    and healthy, asleep and awake- its everything except what it
                    is! &mdash;
                    <span className="ml-2">William Shakespeare</span>
                  </p>
                  <div className="h-3 text-6xl text-right">&rdquo;</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

About.layout = "PUBLIC";
export default About;
