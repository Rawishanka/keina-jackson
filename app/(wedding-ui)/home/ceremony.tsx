import React from "react";
import Image from "next/image";
import { cinzel, greatVibes, halant } from "@/app/fonts";
import Link from "next/link";
import { HiExternalLink } from "react-icons/hi";
const Ceremony = () => {
  return (
    <section className="flex flex-wrap md:flex-nowrap w-full justify-between">
      {/* left side */}
      <div className="flex flex-col bg-light-primary">
        <div className="relative group overflow-hidden">
          <Image
            className="hover:blur-sm hover:scale-125 hover:-rotate-6 duration-1000 delay-300"
            src={"/photo1.png"}
            width={2000}
            height={1400}
            alt={"photo 1"}
          />
          <div className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2">
            <span
              className={`${greatVibes.className} text-white text-3xl group-hover:text-5xl  hidden group-hover:block group-hover:duration-1000 delay-300`}
            >
              The Church
            </span>
            <Link
              className={`${halant.className} text-white text-xl hidden group-hover:block group-hover:duration-1000 delay-300`}
              href={"/hindu"}
            >
              -View Map-
            </Link>
          </div>
        </div>
        <div className="bg-light-primary text-white px-20">
          <h1 className={`${cinzel.className} text-3xl mt-11`}>
            Hindu Ceremonyny
          </h1>
          <h2 className={`${cinzel.className} text-xl mt-4`}>
            September 6 2024
          </h2>
          <p
            className={`${halant.className} mt-8 text-base tracking-wide line-clamp-6 leading-loose mb-8`}
          >
            Mandair :Shri Radha Krishna Mandir 126-04 133rd Ave, South Ozone
            Park, NY 11420
            <br />
            Time: 2:00pm
            <br />
            Dress Code: Traditional Indian Clothing
          </p>
          <div className="mb-2 sm:mb-0 flex items-center">
            <Link
              href={"https://maps.app.goo.gl/3nBpmBr9rYsKxyLE8"}
              className="text-xl flex items-center"
            >
              <span className={`${cinzel.className} text-sm`}>location</span>
              <HiExternalLink className="ml-1" />{" "}
              {/* Adjust the margin as needed */}
            </Link>
          </div>
        </div>
      </div>
      {/* right side */}
      <div className="flex flex-col bg-light-secondary">
        <div className="bg-light-secondary">
          <div className=" text-white px-20">
            <h1 className={`${cinzel.className} text-3xl mt-11`}>
              Christian Ceremonyny
            </h1>
            <h2 className={`${cinzel.className} text-xl mt-4`}>
              September 7 2024
            </h2>
            <p
              className={`${halant.className} mt-8 text-base tracking-wide line-clamp-6 leading-loose mb-8`}
            >
              Global christian ministry 8615 114th St, Jamaica, NY 11418 <br />
              Time:3:00pm
              <br />
              Dress Code: Formal Clothing
            </p>
            <div className="pb-2 flex items-center">
              <Link
                href={"https://maps.app.goo.gl/1gpZs3j1Q3J22K779"}
                className="text-xl mb-2 flex items-center"
              >
                <span className={`${cinzel.className} text-sm`}>location</span>
                <HiExternalLink className="ml-1" />{" "}
                {/* Adjust the margin as needed */}
              </Link>
            </div>
          </div>
        </div>
        <div className="relative group overflow-hidden">
          <Image
            className="hover:blur-sm hover:scale-125 hover:rotate-6 duration-1000 delay-300"
            src={"/photo4.png"}
            width={2000}
            height={1400}
            alt={"photo 1"}
          />
          <div className="absolute top-1/2 left-1/2 text-center -translate-x-1/2 -translate-y-1/2">
            <span
              className={`${greatVibes.className} text-white text-3xl group-hover:text-5xl  hidden group-hover:block group-hover:duration-1000 delay-300`}
            >
              The Church
            </span>
            <Link
              className={`${halant.className} text-white text-xl hidden group-hover:block group-hover:duration-1000 delay-300`}
              href={"/christian"}
            >
              -View Map-
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ceremony;
