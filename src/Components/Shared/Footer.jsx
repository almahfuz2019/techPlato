"use client";
import Image from "next/image";
import LinkedIn from "../../../public/assets/Images/Vector (18).png";
import Facebook from "../../../public/assets/Images/Vector (19).png";
import Behance from "../../../public/assets/Images/Vector (20).png";
import Dribbble from "../../../public/assets/Images/Group 1000003316 (1).png";
import Animation from "../../Components/Shared/Animation";
export default function Footer() {
  Animation();

  return (
    <div>
      <div
        id="anchor-name"
        className="py-12 max-w-screen-xl mx-auto px-4 bg-transparent"
      >
        <div className="flex items-center gap-5" data-aos="fade-up">
          <p className="hidden md:block LarkenDEMOFont text-neutral font-bold text-xl">
            Follow Us
          </p>
          <p className="font-poppins block md:hidden text-neutral text-[16px] sm:text-xl">
            Follow Us
          </p>
          <div className="w-11 h-0.5 bg-neutral"></div>
        </div>
        <div
          className="mt-5 sm:mt-6 flex gap-2 sm:gap-4 items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <a
            href="https://linkedin.com/"
            className="transition-transform transform hover:scale-110"
          >
            <Image
              height="auto"
              width="auto"
              className="sm:h-auto sm:w-auto h-6 w-6"
              src={LinkedIn}
              alt="LinkedIn"
            />
          </a>
          <a
            href="https://m.facebook.com"
            className="transition-transform transform hover:scale-110"
          >
            <Image
              height="auto"
              width="auto"
              className="sm:h-auto sm:w-auto h-6 w-6"
              src={Facebook}
              alt="Facebook"
            />
          </a>
          <a
            href="https://www.behance.net/"
            className="transition-transform transform hover:scale-110"
          >
            <Image
              height="auto"
              width="auto"
              className="sm:h-auto sm:w-auto h-6 w-6"
              src={Behance}
              alt="Behance"
            />
          </a>
          <a
            href="https://dribbble.com/"
            className="transition-transform transform hover:scale-110"
          >
            <Image
              height="auto"
              width="auto"
              className="sm:h-auto sm:w-auto h-6 w-6"
              src={Dribbble}
              alt="Dribbble"
            />
          </a>
        </div>
        <div className="flex items-center md:gap-10 gap-5 mt-10">
          <p className="leading-5 sm:text-xl text-neutral">
            © 2021 - 2024 TechPlato, Inc.
          </p>
          <div>
            <a
              className="leading-5 sm:text-xl text-neutral hover:text-[#1177ba] hover:underline transition-colors duration-300"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
