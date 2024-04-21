import React from "react";
import Image from "next/image";
import { cinzel, halant } from "@/app/fonts";
const ContactsUs = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center mt-14 mb-12">
      <div className="flex flex-col items-center">
        <h1 className={`${cinzel.className} text-4xl`}>
          CONTACT US
        </h1>
        <h2 className={`${cinzel.className} text-xl pt-5`}>
        Reach Out Now 
        </h2>
      </div>
      <div className=" flex lg:flex-nowrap flex-wrap justify-center items-center pt-10">
        {/* left-side */}
        {/* <div className="px-5 flex flex-col items-center">
          <div>
            <Image
              width={2000}
              height={1400}
              src={"/photo6.png"}
              alt={"photo8"}
              quality={100}
            />
          </div>
          <div className="mt-10 flex flex-col items-start md:justify-center sm:items-center md:px-20 px-14">
            <h1 className={`${cinzel.className} text-2xl pb-4  md:text-4xl`}>Samuel Neemsarran</h1>
            <p className={`${halant.className} sm:text-xl text-sm  text-left sm:text-center tracking-wide line-clamp-6 leading-loose`}>
            Mobile Number - (646) 361-9235<br/>
            Email - neemsarran@gmail.com <br/>
            Address - 109-48 131 St. South Ozone Park NY 11420
            </p>
          </div>
        </div> */}
        <div className="px-5 flex flex-col items-center mt-4 lg:mt-0">
          <div>
            <Image
              width={2000}
              height={1400}
              src={"/photo6.png"}
              alt={"photo6"}
              quality={100}
            />
          </div>
          <div className="mt-10 flex flex-col items-start md:justify-center  md:px-20 px-14">
            <h1 className={`${cinzel.className} text-2xl pb-4  md:text-4xl`}>Samuel Neemsarran</h1>
            <p className={`${halant.className} sm:text-xl text-sm  text-left  tracking-wide line-clamp-6 leading-loose`}>
            Mobile Number - (646) 361-9235<br/>
            Email - neemsarran@gmail.com <br/>
            Address - 109-48 131 St. South Ozone Park NY 11420
            </p>
          </div>
        </div>
        {/* right-side */}
        <div className="px-5 flex flex-col items-center mt-4 lg:mt-0">
          <div>
            <Image
              width={2000}
              height={1400}
              src={"/photo7.png"}
              alt={"photo7"}
              quality={100}
            />
          </div>
          <div className="mt-10 flex flex-col items-start md:justify-center  md:px-20 px-14">
            <h1 className={`${cinzel.className} text-2xl pb-4  md:text-4xl`}>Vidya Ramnarain</h1>
            <p className={`${halant.className} sm:text-xl text-sm  text-left  tracking-wide line-clamp-6 leading-loose`}>
            Mobile Number - (347) 886-4950 <br/>
            Email - Vidya.ramnarain93@gmail.com<br/>
            Address - 118-72 128 street South Ozone Park NY 11420
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactsUs;
