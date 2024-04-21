'use client'
import React, { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Log = () => {

  const adminPasscode = 'madduma-bandara';
  const guestPasscode = 'im-no-one'
  const [passcode, setPasscode] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();
  const handleChange = (event:any) => {
    setPasscode(event.target.value);
  };
  const checkData = (event: FormEvent)=>{
    event.preventDefault();
    if(passcode === adminPasscode){
      localStorage.setItem('data', JSON.stringify({name:'admin'}));
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
        router.push('/home');
    }, 1000);
    }else if(passcode === guestPasscode){
      localStorage.setItem('data', JSON.stringify({name:'guest'}));
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
        router.push('/home');
    }, 1000);
    }else{
      toast.error("Invalid User name or Password!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
      });
      setError(true);
    }
  }
  return (
    <div className="h-screen flex flex-col w-full items-center justify-center">
      <div className="flex flex-col justify-center items-center w-100 bg-white">
        <div className="bg-light-primary w-full h-28 text-white flex justify-center items-center text-3xl">
          Enter Secret Code
        </div>
        <div>
          <form
            className="pt-10 flex flex-col justify-center items-center"
            action=""
            onSubmit={checkData}
          >
            <div>
              <label className="text-xl" htmlFor="label">
                Passcode{" "}
              </label>
              <input
                required
                name="passcord"
                className=" bg-slate-200 w-80 h-12 pl-2"
                type="text"
                value={passcode}
                onChange={handleChange}
              />
            </div>
            {error && <span className="text-red-500 text-lg"> Passcord wrong</span>}
            <div>
              <button className="mt-10 px-8 py-4 bg-light-primary rounded text-white w-32" type="submit">Log</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Log;
