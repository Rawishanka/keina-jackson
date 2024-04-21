'use client'
import Link from "next/link";
import React from "react";
import { CiMenuBurger } from "react-icons/ci";
import { cinzel } from "@/app/fonts";
import { usePathname } from "next/navigation";
import clsx from "clsx";
const Navbar = () => {
  const currentPath = usePathname();
  console.log(currentPath);
  return (
    <>
      <nav>
        <ul
          className={`hidden md:flex gap-16 text-white text-lg subpixel-antialiased font-semibold justify-center ${cinzel.className}`}
        >
          <li className={clsx({
                "hover:text-blue-700 drop-shadow-2xl ": true,
                "text-light-primary": currentPath === '/',
              })}>
            <Link href={"/"}>Home</Link>
          </li>
          <li className={clsx({
                "hover:text-blue-700 drop-shadow-2xl ": true,
                "text-light-primary": currentPath === '/hindu',
              })}>
            <Link href={"/hindu"}>Hindu</Link>
          </li>
          <li className={clsx({
                "hover:text-blue-700 drop-shadow-2xl ": true,
                "text-light-primary": currentPath === '/christian',
              })}>
            <Link href={"/christian"}>Christian</Link>
          </li>
          <li className={clsx({
                "hover:text-blue-700 drop-shadow-2xl ": true,
                "text-light-primary": currentPath === '/gallery',
              })}>
            <Link href={"/gallery"}>Gallery</Link>
          </li>
          <li className={clsx({
                "hover:text-blue-700 drop-shadow-2xl ": true,
                "text-light-primary": currentPath === '/contacts',
              })}>
            <Link href={"/contacts"}>Contacts</Link>
          </li>
          <li className={clsx({
                "hover:text-blue-700 drop-shadow-2xl ": true,
                "text-light-primary": currentPath === '/r-s-v-p',
              })}>
            <Link href={"/r-s-v-p"}>RSVP</Link>
          </li>
        </ul>
      </nav>
      <div className="drawer md:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content ml-3 ">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn btn-primary bg-light-primary border-none drawer-button text-white"
          >
            <CiMenuBurger size={20} />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-60 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li className="hover:text-blue-700 drop-shadow-2xl ">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-blue-700 drop-shadow-2xl ">
              <Link href={"/hindu"}>Hindu</Link>
            </li>
            <li className="hover:text-blue-700 drop-shadow-2xl ">
              <Link href={"christian"}>Christian</Link>
            </li>
            <li className="hover:text-blue-700 drop-shadow-2xl ">
              <Link href={"/gallery"}>Gallery</Link>
            </li>
            <li className="hover:text-blue-700 drop-shadow-2xl ">
              <Link href={"/contacts"}>Contacts</Link>
            </li>
            <li className="hover:text-blue-700 drop-shadow-2xl ">
              <Link href={"/r-s-v-p"}>RSVP</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
