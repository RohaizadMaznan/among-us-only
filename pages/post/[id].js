import axios from "axios";
import React, { useState, useEffect } from "react";
import moment from "moment";
import { server } from "../../config";

const API = `${server}/posts`;

export async function getServerSideProps({ params }) {
  const message = await axios.get(`${API}?id=${params.id}`); // Fetch from MongoDB
  const result = message.data;

  return {
    props: {
      message: result,
    },
  };
}

function PostID({ message }) {
  const [loading, isLoading] = useState(true);
  const createdAt = message[0].createdAt;

  useEffect(() => {
    if (loading) {
      isLoading(false);
    }
  });

  if (loading) return "Loading";
  if (!loading) {
    return (
      <>
        <div className="max-w-3xl m-auto grid grid-cols-1 justify-items-center">
          <div
            className={`w-[390px] h-[500px] md:w-[672px] md:h-[758px] m-2 bg-gray-50 border-4 border-gray-800 cursor-pointer`}
          >
            <div className="md:h-[36px] px-3 pt-1 ">
              <p className="text-xl md:text-4xl font-semibold">
                To: {message[0].sendToName}
              </p>
            </div>
            <div className="px-3 md:py-2">
              <div
                className={`h-[420px] md:h-[648px] p-4 border-4 border-gray-800`}
                style={{ backgroundColor: `${message[0].cardColor}` }}
              >
                <p className="filter invert text-xl md:text-6xl font-semibold">
                  {message[0].message}
                </p>
              </div>
            </div>
            <div className="flex justify-between items-center px-3">
              <p className="text-2xl md:text-3xl font-semibold">#amongusonly</p>
              <p className="text-lg md:text-xl font-semibold">Download card</p>
            </div>
          </div>
        </div>
        <div className="max-w-3xl m-auto mt-10 space-y-4">
          <div>
            <p className="text-xl md:text-3xl font-bold">
              {message[0].sendToName}
            </p>
            <p className="opacity-50">
              Posted on {moment(createdAt).format("LL")}
            </p>
          </div>
          <div><p className="text-xl md:text-xl font-bold">{message[0].message}</p></div>
        </div>
      </>
    );
  }
}

PostID.layout = "PUBLIC";
export default PostID;
