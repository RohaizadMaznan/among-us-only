import React from "react";
import Head from "next/head";
import Image from "next/image";
import { Timeline } from "../components/Timeline";

function Journey() {
  return (
    <div>
      <Head>
        <title>
          Journey of Among Us Only | Secret Message for Loved One Stay Secret
        </title>
        <meta
          name="description"
          content="Journey of Among Us Only | Secret Message for Loved One Stay Secret"
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
                    src="https://images.unsplash.com/photo-1533561797500-4fad4750814e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                    alt="Love & roses"
                    width={500}
                    height={600}
                    layout="responsive"
                  />
                </div>
              </div>
            </div>

            <Timeline />
          </div>
        </div>
      </div>

    </div>
  );
}

Journey.layout = "PUBLIC";
export default Journey;
