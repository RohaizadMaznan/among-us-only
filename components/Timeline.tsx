import React from "react";

export const Timeline: React.FC = () => {
  return (
    <>
      <ol className="relative border-l border-gray-200 dark:border-gray-700">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none dark:text-[#ed639e]">
            Upcoming in 2022!
          </time>
          <h3 className="text-xl font-semibold">
            New Upcoming Planned Features
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 mt-2">
            <ol className="list-disc ml-4">
                <li>Improve search filters performance.</li>
                <li>Save card into image format to local storage.</li>
                <li>Store to print cards!</li>
            </ol>
          </p>
          <a
            href="https://github.com/RohaizadMaznan/among-us-only"
            className="inline-flex items-center py-2 px-4 text-sm font-bold bg-white rounded-lg border border-gray-200 hover:bg-white hover:text-[#ed639e] focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"
          >
            GitHub{" "}
            <svg
              className="ml-2 w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </li>
        <li className="ml-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
          <time className="mb-1 text-sm font-normal leading-none dark:text-[#ed639e]">
            11 February 2022
          </time>
          <h3 className="text-xl font-semibold">
            Project launch 🚀
          </h3>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-2">
            The Among Us Only is officially launch and live. The audience can interact with the website to generate card on their own.
          </p>
        </li>
      </ol>
    </>
  );
};
