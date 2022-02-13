import React from "react";
import { MdOutlineFilterList } from "react-icons/md";

function Search({ messages, setFilters }) {

  return (
    <>
      <div className="pb-0 md:pb-10">
        <form
          className="max-w-screen grid sm:grid-cols-2 gap-4 mx-auto"
        >
          <div className="sm:col-span-2 space-y-2">
            <input
              name="q"
              className="w-full bg-gray-50 text-gray-800 border rounded outline-none transition duration-100 px-3 py-2 text-lg"
              placeholder="Search for a name..."
              onKeyUp={(e) => setFilters(e.target.value)}
            />
            <div className="flex justify-between items-starts">
              <button
                type="submit"
                className="flex justify-center items-center bg-gray-100 hover:bg-gray-300 active:bg-indigo-700 focus-visible:ring ring-indigo-300 text-gray-800 text-sm font-semibold text-center rounded outline-none transition duration-100 px-5 py-2 space-x-2"
              >
                <MdOutlineFilterList className="mr-2" />
                Filter
              </button>
              <p>{messages.length} Posts Found</p>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Search;
