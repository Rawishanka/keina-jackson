"use client";
import React, { useState } from "react";
import Image from "next/image";
import { cinzel } from "@/app/fonts";

const View = () => {
    const [url,setUrl] = useState('');
    const openModal = (url:string) => {
        setUrl(url);
        const modal = document.getElementById('my_modal_1') as HTMLDialogElement | null;
        if (modal) {
          modal.showModal();
        }
      };
  const images = [
    { id: 1, url: "/photo5.png" },
    { id: 2, url: "/photo4.png" },
    { id: 3, url: "/photo3.png" },
    { id: 4, url: "/photo1.png" },
    { id: 5, url: "/photo2.png" },
  ];
  return (
    <section className="w-full">
      <div className="hidden lg:grid grid-cols-3">
        <div className="overflow-hidden relative group bg-light-secondary items-center justify-center flex ">
          <div className="flex flex-col justify-center items-center">
            <h1
              className={`${cinzel.className} text-white text-3xl`}
            >
              Our Gallery
            </h1>
            <h2
              className={`${cinzel.className} text-white text-xl`}
            >
              Wedding
            </h2>
          </div>

          {/* <Image
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
          </span> */}
        </div>
        {images.map((item) => {
          return (
            <div
              className="overflow-hidden  relative group cursor-pointer"
              key={item.id}
              onClick={()=>openModal(item.url)}
            >
              <Image
              key={item.id}
                className="hover:rotate-2 duration-1000 hover:scale-110 hover:brightness-50 cursor-pointer"
                width={2000}
                height={1400}
                src={item.url}
                alt={`photoId${item.id}`}
                quality={100}
              />
              <div key={item.id} className="absolute top-1/2 left-1/2 text-white text-center -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">
              <span
              key={item.id}
                className={`${cinzel.className} text-lg `}
              >
                Wedding
              </span>
              <div key={item.id}><span className="text-sm">-View-</span></div>
              </div>
              <dialog key={item.id} id="my_modal_1" className="modal">
                <div key={item.id} className="modal-box w-150 h-150"  style={{ maxWidth: "600rem",maxHeight:'500rem' }}>
                  <Image key={item.id} className="rounded" quality={100} src={url} alt={""} width={2000} height={1400}/>
                  <div key={item.id} className="modal-action mt-3">
                    <form key={item.id} method="dialog">
                      {/* if there is a button in form, it will close the modal */}
                      <button key={item.id} className={`${cinzel.className} text-white mt-0 hover:bg-light-secondary btn border-none bg-light-primary`}>Close</button>
                    </form>
                  </div>
                </div>
              </dialog>
            </div>
          );
        })}
      </div>


      <div className="lg:hidden flex flex-wrap w-full justify-center">
        <div className="overflow-hidden relative group bg-light-secondary items-center justify-center flex w-full h-36">
          <div className="flex flex-col justify-center items-center w-full">
            <h1
              className={`${cinzel.className} text-white group-hover:hidden text-3xl`}
            >
              Our Gallery
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
        {images.map((item) => {
          return (
            <div
              className="overflow-hidden  relative group cursor-pointer"
              key={item.id}
            >
              <Image
                className="hover:rotate-2 duration-1000 hover:scale-110 hover:brightness-50 cursor-pointer"
                width={2000}
                height={1400}
                src={item.url}
                alt={`photoId${item.id}`}
                quality={100}
              />
              <div className="absolute top-1/2 left-1/2 text-white text-center -translate-x-1/2 -translate-y-1/2 hidden group-hover:block">
              <span
                className={`${cinzel.className} text-lg `}
              >
                Wedding
              </span>
              <div><span className="text-sm">-View-</span></div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default View;
