import Image from "next/image";
import React from "react";

// Import images using relative paths from the public directory
import facebook from "../../../public/assets/Images/facebook.png";
import Behance from "../../../public/assets/Images/Be.png";
import Dribbble from "../../../public/assets/Images/Vs.png";
import Linkdin from "../../../public/assets/Images/In.png";
import VerticleLine from "../../../public/assets/Images/Verticle Line.png";
import MouseIcon from "../../../public/assets/Images/Mouse Icon.png";
import localFont from "next/font/local";

const LarkenDEMOFont = localFont({
  src: [
    {
      path: "../../../public/assets/LarkenDEMO-Bold.otf",
    },
  ],
});
export default function HeroHome() {
  return (
    <section className="main h-screen ">
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source
          src="/assets/Videos/hero_section_background.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Content overlay */}
      <div className="  px-4 overflow-hidden">
        <div className="xl:mt-20 2xl:mt-40 mt-80">
          <header data-aos="fade-up">
            <div className={LarkenDEMOFont.className}>
              <h1 className="HeroSectionHeading uppercase md:text-center font-bold text-transparent text-white text-[43px] leading-[56px] md:leading-[72px] sm:text-6xl sm:leading-[64px] md:text-7xl 2xl:text-[96px] 2xl:leading-[100px] mb-10 ">
                <span className="md:mr-48">Consulting</span> <br />
                <span className="gradient-text-style-1-style-2">
                  For Innovation
                </span>{" "}
                <div></div>
                <span className="ml-16">Products</span> <br />{" "}
                <span className="gradient-text-style-1-style-2 ml-16 md:mr-48">
                  for Growth
                </span>
              </h1>
            </div>
            <p className="md:block hidden mt-3 sm:mt-10 text-2xl 2xl:text-[32px] 2xl:leading-[40px] font-poppins text-white text-center">
              Helping businesses go online and grow bigger <br /> with high-tech
              web technologies
            </p>
            <p className="md:hidden block mt-3 sm:mt-10 text-[16px] leading-[24px] font-poppins text-white text-center">
              Helping businesses go online and grow <br /> bigger with high-tech
              web technologies
            </p>
          </header>
          {/* Social icons */}
          <aside
            data-aos="fade-left"
            className="hidden lg:flex flex-col items-center justify-center absolute right-8 lg:top-32 2xl:top-96 p-4 2xl:mr-32"
          >
            <a href="https://ca.linkedin.com/company/techplato?trk=public_profile_topcard-current-company">
              <Image
                src={Linkdin}
                className="w-6 h-6 mb-3 transform transition duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg"
                alt="LinkedIn"
              />
            </a>
            <a href="https://www.facebook.com/techplato">
              <Image
                src={facebook}
                className="w-6 h-6 mb-3 transform transition duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg"
                alt="Facebook"
              />
            </a>
            <a href="https://dribbble.com/">
              <Image
                src={Dribbble}
                className="w-6 h-6 mb-3 transform transition duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg"
                alt="Dribbble"
              />
            </a>
            <a href="https://www.behance.net/">
              <Image
                src={Behance}
                className="w-6 h-6 mb-3 transform transition duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg"
                alt="Behance"
              />
            </a>
            <Image src={VerticleLine} className="mb-3" alt="Verticle Line" />
            <a href="#">
              <p className="text-white font-semibold mt-4 flex flex-col">
                <span className="transform rotate-90">Follow Us</span>
              </p>
            </a>
            <a href="#anchor-name">
              <Image
                src={MouseIcon}
                className="mt-32 2xl:mt-50 transform transition duration-300 hover:scale-110  hover:shadow-lg"
                alt="Mouse Icon"
              />
            </a>
          </aside>
        </div>

        {/* For Mobile */}
        <div className="flex w-full flex-col justify-end mt-10 lg:hidden">
          <div className="flex items-center justify-end lg:hidden">
            <p className="text-white font-semibold">
              <span>Follow Us</span>
            </p>
            <Image
              src={VerticleLine}
              className="mx-8 rotate-90"
              alt="Verticle Line"
            />
          </div>
          <div className="lg:hidden flex gap-3 justify-end">
            <a href="https://ca.linkedin.com/company/techplato?trk=public_profile_topcard-current-company">
              <Image
                src={Linkdin}
                className="w-6 h-6 transform transition duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg"
                alt="LinkedIn"
              />
            </a>
            <a href="https://www.facebook.com/techplato">
              <Image
                src={facebook}
                className="w-6 h-6 transform transition duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg"
                alt="Facebook"
              />
            </a>
            <a href="https://dribbble.com/">
              <Image
                src={Dribbble}
                className="w-6 h-6 transform transition duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg"
                alt="Dribbble"
              />
            </a>
            <a href="https://www.behance.net/">
              <Image
                src={Behance}
                className="w-6 h-6 transform transition duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg"
                alt="Behance"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
