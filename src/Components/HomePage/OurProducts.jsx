import Image from "next/image";
import React from "react";
import Arrow from "../../../public/assets/Images/Arrow.png";

export default function OurProducts() {
  return (
    <section className="">
      <div className="bg-gradient-style-1-style-2 mx-auto background-image px-4">
        <div className="background-">
          <div className="max-w-screen-xl mx-auto py-28 md:py-44 overflow-hidden">
            <header>
              <p className="font-poppins text-white md:text-[16px] text-[12px] leading-[24px] font-semibold text-xs">
                O U R <span className="ml-3"> P R O D U C T S</span>
              </p>
              <h1
                className="font-bold mt-3 md:mt-6 mb-7 dm:mb-14 gradient-text-style-1-style-3 font-poppins text-[24px] leading-[32px] md:text-[64px] md:leading-[72px] LarkenDEMOFont"
                data-aos="fade-up"
              >
                Beyond Platforms,
                <br /> Beyond Limits
              </h1>
            </header>
            <section
              className="flex items-center gap-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p className="text-white mt-auto font-bold text-[32px] leading-[40px] md:block hidden">
                01
              </p>
              <h2 className="custom-text text-7xl md:text-[148px] md:leading-[156px] font-extrabold uppercase">
                WebLOO
              </h2>
              <a
                className="mt-5 hover:rotate-12 duration-300"
                href="https://webloo.webflow.io/"
              >
                <Image src={Arrow} alt="Arrow" effect="blur" />
              </a>
            </section>
            <section
              className="flex items-center gap-4 md:mt-8 mt-5"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p className="text-white mt-auto font-bold text-[32px] leading-[40px] md:block hidden">
                02
              </p>
              <h2 className="custom-text text-7xl md:text-[148px] md:leading-[156px] font-extrabold uppercase">
                HostAir
              </h2>
              <a
                className="mt-5 hover:rotate-12 duration-300"
                href="https://host-air.netlify.app/"
              >
                <Image className="" src={Arrow} alt="Arrow" effect="blur" />
              </a>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
