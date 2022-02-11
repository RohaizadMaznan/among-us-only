import Link from "next/link";
import React from "react";

export default function Messages({ messages }) {
  return (
    <div className="flex flex-wrap justify-center select-none">
      {messages.map((message, index) => {
        return (
          <Link href={`/posts/${message.id}`}>
            <div
              key={index}
              className={`w-[440px] h-[496px] m-2 bg-gray-50 border-4 border-gray-800 cursor-pointer`}
            >
              <div className="h-[36px] px-3 pt-1 ">
                <p className="text-2xl font-semibold">
                  To: {message.sendToName}
                </p>
              </div>
              <div className="px-3 py-2">
                <div
                  className={`h-[390px] p-4 border-4 border-gray-800`}
                  style={{ "background-color": `${message.cardColor}` }}
                >
                  <p className="filter invert text-4xl font-semibold">
                    {message.message}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center px-3">
                <p className="text-3xl font-semibold">#amongusonly</p>
                <p className="text-xl font-semibold">Open card</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
