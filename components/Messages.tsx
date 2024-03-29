import Link from "next/link";
import React from "react";

interface IState {
  messages: Array<Message>;
}

interface Message {
  _id: string;
  sendToName?: string;
  cardColor?: string;
  message?: string;
}

export const Messages: React.FC<IState> = ({ messages }) => (
  <div className="flex flex-wrap justify-center select-none">
    {messages.map((message: Message, index: number) => {
      return (
        <React.Fragment key={index}>
          <Link href={`/post/${message._id}`} passHref>
            <div
              className={`w-[390px] h-[500px] md:w-[440px] md:h-[496px] m-2 bg-gray-50 border-4 border-gray-800 cursor-pointer`}
            >
              <div className="md:h-[36px] px-3 pt-1 ">
                <p className="dark:text-gray-800 text-2xl font-semibold">
                  To: {message.sendToName}
                </p>
              </div>
              <div className="px-3 md:py-2">
                <div
                  className={`h-[420px] md:h-[390px] p-4 border-4 border-gray-800`}
                  style={{ backgroundColor: `${message.cardColor}` }}
                >
                  <p className="break-words leading-tight text-white text-4xl font-semibold">
                    {message.message}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center px-3">
                <p className="dark:text-gray-800 text-2xl md:text-3xl font-semibold">
                  #amongusonly
                </p>
                <p className="dark:text-gray-800 text-lg md:text-xl font-semibold">
                  Open card
                </p>
              </div>
            </div>
          </Link>
        </React.Fragment>
      );
    }).reverse()}
  </div>
);
