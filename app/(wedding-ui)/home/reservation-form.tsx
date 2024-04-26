"use client";
import React, { FormEvent, useState } from "react";
import { cinzel } from "@/app/fonts";
import { createProduct } from "@/app/lib/action";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { ReservationData } from "@/app/lib/definition";
import { Status } from "@/app/lib/definition";
import "react-toastify/dist/ReactToastify.css";

const ReservationForm = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [Status, setStatus] = useState<Status>(null);
  const [message, setMessage] = useState("");
  const handleNameChange = (event: any) => {
    setName(event.target.value);
  };
  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };
  const handleStatusChange = (event: any) => {
    setStatus(event.target.value);
  };
  const handleGuestChange = (event: any) => {
    setStatus(event.target.value);
  };
  const handleMessageChange = (event: any) => {
    setMessage(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data: ReservationData = {
      Name: name,
      Email: email,
      Status: Status,
      Message: message,
    };
    console.log(data);
    const store = await createProduct(data);
    console.log(store);
    if (store) {
      toast.success("Login Successful!", {
        position: "top-right",
        autoClose: 1500, // You can adjust the duration
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setTimeout(() => {
        router.push('/hindu');
    }, 1000);
    } else {
      toast.error("Somethig went wrong Try Again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      router.refresh();
    }
  };

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
          R.S.V.P{" "}
        </h1>
        <h2 className={`${cinzel.className}`}>Deadline to RSVP is July 22</h2>
        <form className="py-8 px-10" action="" onSubmit={handleSubmit}>
          <div>
            <span className="flex text-sm sm:text-md font-bold">Name </span>
            <input
              type="text"
              name="name"
              required
              placeholder="John Smith"
              onChange={handleNameChange}
              className="mt-1 px-2 focus:outline-none h-10 rounded sm:w-80 bg-slate-200 focus:border-none border-none active:border-none"
            />
          </div>
          <div className="mt-4">
            <span className="flex text-sm sm:text-md font-bold">Email </span>
            <input
              type="email"
              required
              name="email"
              onChange={handleEmailChange}
              placeholder="Johnsmith@gmail.com"
              className="mt-1 px-2 focus:outline-none h-10 rounded sm:w-80 bg-slate-200 focus:border-none border-none active:border-none"
            />
          </div>
          <div className="mt-4">
            <span className="flex text-sm sm:text-md font-bold">
              Select Your Function{" "}
            </span>
            <select
              onChange={handleStatusChange}
              required
              name="ceremony"
              className="select w-full max-w-xs bg-slate-200 focus:outline-none focus:border-none"
            >
              <option selected value={"Hindu"}>
                Hindu
              </option>
              <option value={"Christian"}>Christian</option>
              <option value={"HinduChristian"}>Hindu & Christian</option>
              <option value={"No"}>No</option>
            </select>
          </div>
          <div className="mt-4">
            <span className="flex text-sm sm:text-md font-bold">
              Guests{" "}
            </span>
            <select
              onChange={handleGuestChange}
              required
              name="ceremony"
              className="select w-full max-w-xs bg-slate-200 focus:outline-none focus:border-none"
            >
              <option selected value={"1"}>
                1
              </option>
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
              <option value={"4"}>4</option>
              <option value={"5"}>5</option>
            </select>
          </div>
          <div className="mt-4">
            <span className="flex text-sm sm:text-md font-bold">Message</span>
            <textarea
              name="message"
              onChange={handleMessageChange}
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
      <ToastContainer />
    </section>
  );
};

export default ReservationForm;
