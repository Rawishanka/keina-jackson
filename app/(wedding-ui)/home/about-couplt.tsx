import React from "react";
import { cinzel, halant } from "@/app/fonts";
const AboutCouple = () => {
  return (
    <section
      style={{ backgroundImage: `url(/photo5.png)` }}
      className=" bg-primary flex flex-wrap md:flex-nowrap justify-evenly "
    >
      {/* left side  */}
      <div className="text-center text-balance bg-white md:w-100 mt-20 mb-20">
        <h1 className={`${cinzel.className} text-3xl pt-14`}>Thomas MCNROO</h1>
        <h2 className={`${cinzel.className} text-xl mt-4`}>The Groom</h2>
        <p className={`${halant.className} mt-10 px-10`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          feugiat purus sed tempus ornare. Sed convallis eu orci ut sodales. Nam
          rhoncus laoreet elit, a condimentum augue tempor vitae in faucibus
          cura sit amet consect. 
        </p>
        <p className={`${halant.className} mt-14 px-10 mb-20`}>Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus feugiat purus sed tempus ornare. Sed
          convallis eu orci ut sodales. Nam rhoncus laoreet elit, a condimentum
          augue tempor vitae in faucibus cura sit amet consect.</p>
      </div>
      {/* right side */}
      <div className="text-center text-balance bg-white md:w-100 mt-20 mb-20">
        <h1 className={`${cinzel.className} text-3xl pt-14`}>Thomas MCNROO</h1>
        <h2 className={`${cinzel.className} text-xl mt-4`}>The Groom</h2>
        <p className={`${halant.className} mt-10 px-10`}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          feugiat purus sed tempus ornare. Sed convallis eu orci ut sodales. Nam
          rhoncus laoreet elit, a condimentum augue tempor vitae in faucibus
          cura sit amet consect. 
        </p>
        <p className={`${halant.className} mt-14 px-10 mb-20`}>Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Vivamus feugiat purus sed tempus ornare. Sed
          convallis eu orci ut sodales. Nam rhoncus laoreet elit, a condimentum
          augue tempor vitae in faucibus cura sit amet consect.</p>
      </div>
    </section>
  );
};

export default AboutCouple;
