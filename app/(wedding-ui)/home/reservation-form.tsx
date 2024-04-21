import React from "react";
import Image from "next/image";
import { cinzel } from "@/app/fonts";
import { createProduct } from "@/app/lib/action";
const ReservationForm = () => {
  return (
    <section
      style={{
        backgroundImage: `url(/photo2.png)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
      }}
      className=" flex justify-center items-center h-150"
    >
      <div
        className={`${cinzel.className} bg-white flex flex-col items-center rounded md:w-130`}
      >
        <h1 className={`${cinzel.className} mt-5 sm:text-3xl text-2xl`}>
          Confimation{" "}
        </h1>
        <h2 className={`${cinzel.className}`}>R.S.V.P.</h2>
        <form className="py-8 px-10" action={createProduct}>
          <div>
            <span className="flex text-sm sm:text-md">Name </span>
            <input
              type="text"
              name="name"
              required
              placeholder="John Smith"
              className="mt-1 px-2 focus:outline-none h-10 rounded sm:w-80 bg-slate-200 focus:border-none border-none active:border-none"
            />
          </div>
          <div className="mt-4">
            <span className="flex text-sm sm:text-md">Email </span>
            <input
              type="email"
              required
              name="email"
              placeholder="Johnsmith@gmail.com"
              className="mt-1 px-2 focus:outline-none h-10 rounded sm:w-80 bg-slate-200 focus:border-none border-none active:border-none"
            />
          </div>
          <div className="mt-4">
            <span className="flex text-sm sm:text-md">Select Your Function </span>
            <select required name="ceremony" className="select w-full max-w-xs bg-slate-200 focus:outline-none focus:border-none">
              <option selected value={'Hindu'}>Hindu</option>
              <option value={'Christian'}>Christian</option>
              <option value={'HinduChristian'}>Hindu & Christian</option>
              <option value={'No'}>No</option>
            </select>
          </div>
          <div className="mt-4">
            <span className="flex text-sm sm:text-md">Message</span>
            <textarea
              name="message"
              className="textarea textarea-bordered mt-1 px-2 focus:outline-none rounded sm:w-80 w-60 bg-slate-200 focus:border-none border-none active:border-none"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white hover:bg-light-secondary hover:text-white duration-100 mt-2 bg-light-primary px-6 py-2 rounded"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ReservationForm;
