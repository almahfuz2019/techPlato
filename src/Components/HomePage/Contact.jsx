import Image from "next/image";
import React from "react";
import Arrow from "../../../public/assets/Images/ph_arrow-up-thin.png";

export default function Contact() {
  return (
    <section className="overflow-hidden">
      <div
        id="contact"
        className="md:pt-44 pt-28 pb-7 max-w-screen-xl md:mx-auto px-4 "
      >
        <div className="flex md:flex-row flex-col md:justify-between md:mx-0 md:items-center gap-10 md:gap-20">
          <div>
            <h1
              className="md:leading-[156px] LarkenDEMOFont text-6xl md:text-9xl font-bold gradient-text-style-1"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              Want to
              <br />
              talk to us?
            </h1>
            <h2
              className="md:mb-9 mb-3 text-neutral text-2xl md:text-[64px] md:leading-[72px] LarkenDEMOFont font-bold mt-6 md:mt-10 transition-transform duration-300 hover:scale-105"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <a href="mailto:hello@techplato.com" className="hover:underline">
                hello@techplato.com
              </a>
            </h2>
            <p
              className="text-neutral font-bold text-2xl md:text-[64px] md:leading-[72px] LarkenDEMOFont transition-transform duration-300 hover:scale-105 hover:underline"
              data-aos="fade-up"
              data-aos-duration="1400"
            >
              <a href="tel:+16473331934">+1 (647) 333-1934</a>
            </p>
          </div>
          <div
            className="flex justify-end"
            data-aos="fade-left"
            data-aos-duration="1600"
          >
            <div className="flex border-2 h-40 w-40 bg-white shadow-lg justify-center items-center cursor-pointer border-black py-6 px-5 rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:rotate-3">
              <a
                href="tel:+16473331934"
                className="flex-col flex justify-center items-center "
              >
                <p className="text-xl font-semibold ">Book a Call</p>
                <Image width="28.5" src={Arrow} alt="arrow" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
