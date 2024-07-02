/* eslint-disable react/no-unescaped-entities */
import React from "react";

export default function ContactUs() {
  return (
    <section>
      <div className="bg-gradient-style-1">
        <div className="py-28 md:py-44 px-4 background-image-for-our-products">
          <div className="max-w-screen-xl overflow-hidden mx-auto grid grid-cols-1 md:grid-cols-2 justify-between items-center gap-10 md:gap-32">
            <h1
              className="md:text-[64px] md:leading-[72px] text-[32px] leading-[40px] LarkenDEMOFont font-bold gradient-text-style-1-style-3"
              data-aos="fade-up"
            >
              Unlock the Potential
              <br /> of Your Business
            </h1>
            <div data-aos="fade-up" data-aos-delay="200">
              <p className="text-white text-[16px] leading-[24px] md:text-[20px] font-poppins">
                Unlock the full potential of your business with Techplato's
                customer-centric solutions and watch your revenue soar
              </p>
              <div className="mt-10">
                <a
                  className="text-2xl text-white border-transparent border md:border-none px-4 leading-none py-2 pt-1 font-extrabold transition-transform duration-500 hover:underline underline-offset-4"
                  href="#contact"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
