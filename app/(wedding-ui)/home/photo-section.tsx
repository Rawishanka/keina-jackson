import React from "react";
import Image from "next/image";
import { cinzel } from "@/app/fonts";
const PhotoSectioin = () => {
  return (
    <section className="w-full">
      <div className="grid grid-cols-3">
        <div className="overflow-hidden relative group bg-light-secondary items-center justify-center flex ">
          <div className="flex flex-col justify-center items-center">
            <h1
              className={`${cinzel.className} text-white group-hover:hidden text-3xl`}
            >
              Our  Gallery
            </h1>
            <h2
              className={`${cinzel.className} text-white group-hover:hidden text-xl`}
            >
              Wedding
            </h2>
          </div>

          <Image
            className="hidden group-hover:block hover:rotate-2 duration-1000 hover:scale-110 hover:brightness-50 "
            width={2000}
            height={1400}
            src={"/photo5.png"}
            alt={"photo5"}
            quality={100}
          />
          <span
            className={`${cinzel.className} text-lg absolute top-1/2 left-1/2 text-white text-center -translate-x-1/2 -translate-y-1/2 hidden group-hover:block`}
          >
            Wedding
          </span>
        </div>
        <div className="overflow-hidden relative group">
          <Image
            className="hover:rotate-2 duration-1000 hover:scale-110 hover:brightness-50 "
            width={2000}
            height={1400}
            src={"/photo5.png"}
            alt={"photo5"}
            quality={100}
          />
          <span
            className={`${cinzel.className} text-lg absolute top-1/2 left-1/2 text-white text-center -translate-x-1/2 -translate-y-1/2 hidden group-hover:block`}
          >
            Wedding
          </span>
        </div>
        <div className="overflow-hidden relative group">
          <Image
            className="hover:rotate-2 duration-1000 hover:scale-110 hover:brightness-50 "
            width={2000}
            height={1400}
            src={"/photo4.png"}
            alt={"photo4"}
            quality={100}
          />
          <span
            className={`${cinzel.className} text-lg absolute top-1/2 left-1/2 text-white text-center -translate-x-1/2 -translate-y-1/2 hidden group-hover:block`}
          >
            Wedding
          </span>
        </div>
        <div className="overflow-hidden relative group">
          <Image
            className="hover:rotate-2 duration-1000 hover:scale-110 hover:brightness-50 "
            width={2000}
            height={1400}
            src={"/photo3.png"}
            alt={"photo3"}
            quality={100}
          />
          <span
            className={`${cinzel.className} text-lg absolute top-1/2 left-1/2 text-white text-center -translate-x-1/2 -translate-y-1/2 hidden group-hover:block`}
          >
            Wedding
          </span>
        </div>
        <div className="overflow-hidden relative group">
          <Image
            className="hover:rotate-2 duration-1000 hover:scale-110 hover:brightness-50 "
            width={2000}
            height={1400}
            src={"/photo1.png"}
            alt={"photo1"}
            quality={100}
          />
          <span
            className={`${cinzel.className} text-lg absolute top-1/2 left-1/2 text-white text-center -translate-x-1/2 -translate-y-1/2 hidden group-hover:block`}
          >
            Wedding
          </span>
        </div>
        <div className="overflow-hidden relative group">
          <Image
            className="hover:rotate-2 duration-1000 hover:scale-110 hover:brightness-50 "
            width={2000}
            height={1400}
            src={"/photo2.png"}
            alt={"photo2"}
            quality={100}
          />
          <span
            className={`${cinzel.className} text-lg absolute top-1/2 left-1/2 text-white text-center -translate-x-1/2 -translate-y-1/2 hidden group-hover:block`}
          >
            Wedding
          </span>
        </div>
      </div>
    </section>
  );
};

export default PhotoSectioin;
