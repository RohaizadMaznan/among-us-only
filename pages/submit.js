import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useToasts } from "react-toast-notifications";
import { server } from "../config";
import { CARD_COLORS } from "../constant";

function Submit() {
  const { addToast } = useToasts();
  const router = useRouter();

  const colors = CARD_COLORS;

  const [form, setForm] = useState({
    name: "",
    message: "",
    color: "",
    chars_left: 100,
  });

  console.log(form.chars_left);

  const handleChange = (e) => {
    e.preventDefault();
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(`${server}/posts`, {
        sendToName: form.name,
        message: form.message,
        cardColor: form.color,
      })
      .then(() => {
        addToast(`Successfully submitted!`, {
          appearance: "success",
          autoDismiss: true,
        });
        setForm({
          name: "",
          message: "",
          color: "",
        });
        router.push("/");
      })
      .catch((error) => {
        const message = error.message;
        addToast(message, { appearance: "error", autoDismiss: true });
      });
  };

  return (
    <>
      <Head>
        <title>Submit a Card | Among Us Only | Secret Message for Loved One Stay Secret</title>
        <meta name="description" content="Submit a Card | Among Us Only | Secret Message for Loved One Stay Secret" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="py-6 sm:py-8 lg:py-12">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              Express and submit
            </h2>

            <p className=" max-w-screen-md dark:text-gray-100 text-gray-600 md:text-lg text-center mx-auto">
              The Among Us Only will allow you to share your feeling and express
              it without noticing the person. Truely anonymous from people all
              over the world. This project was dedicated to display an emotion
              catching with their first love. The content of submission are wide
              ranging, encompassing just about every emotion.
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="max-w-screen-md grid sm:grid-cols-2 gap-4 mx-auto"
          >
            <div className="sm:col-span-2">
              <label
                htmlFor="name"
                className="inline-block text-sm sm:text-base mb-2"
              >
                Name you are sending to*
              </label>
              <input
                required
                name="name"
                value={form?.name}
                onChange={handleChange}
                className="w-full text-lg dark:text-gray-900 bg-gray-50 border rounded outline-none transition duration-100 px-3 py-2"
              />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="inline-block text-sm sm:text-base mb-2"
              >
                Message*
              </label>
              <textarea
                required
                name="message"
                value={form?.message}
                onChange={handleChange}
                className="w-full text-lg dark:text-gray-900 dark:bg-gray-50 bg-gray-50 border rounded outline-none transition duration-100 px-3 py-2"
                rows="3"
                maxLength={form.chars_left}
              ></textarea>
              <span className="flex justify-end">
                {form.chars_left - form.message.length}{" "}
                {form.message.length > form.chars_left - 2
                  ? "character"
                  : "characters"}{" "}
                left
              </span>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="color"
                className="inline-block text-sm sm:text-base mb-2"
              >
                Card Color*
              </label>
              <select
                required
                name="color"
                value={form?.color}
                onChange={handleChange}
                className="w-full bg-gray-50 dark:text-gray-900 dark:bg-gray-50 border rounded outline-none transition duration-100 px-3 py-2 capitalize text-lg"
              >
                {colors.map((color, key) => (
                  <React.Fragment key={key}>
                    <option value={color.value}>{color.name}</option>
                  </React.Fragment>
                ))}
              </select>
            </div>

            <div className="sm:col-span-2 flex justify-between items-center">
              <button className="inline-block bg-[#ED639E] hover:bg-[#e45190] text-white text-sm md:text-base font-semibold text-center rounded-lg outline-none transition duration-100 px-8 py-3">
                Send
              </button>
            </div>

            {/* <p className="text-gray-400 text-xs">
            By signing up to our newsletter you agree to our{" "}
            <a
              href="#"
              className="hover:text-indigo-500 active:text-indigo-600 underline transition duration-100"
            >
              Privacy Policy
            </a>
            .
          </p> */}
          </form>
        </div>
      </div>
    </>
  );
}

Submit.layout = "PUBLIC";
export default Submit;
