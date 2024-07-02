import Image from "next/image";
import React from "react";
import checkMark from "../../../public/assets/Images/check mark.png";

export default function About() {
  const values = [
    {
      title: "Innovation",
      description:
        "We constantly strive to push boundaries and develop groundbreaking solutions.",
    },
    {
      title: "Integrity",
      description:
        "We conduct business with honesty and transparency, building trust with our clients and partners.",
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and open communication.",
    },
    {
      title: "Excellence",
      description:
        "We are committed to delivering the highest quality products and services.",
    },
    {
      title: "Customer Focus",
      description:
        "We prioritize understanding and exceeding our clients' needs.",
    },
  ];

  const stats = [
    { number: "2", label: "Products" },
    { number: "10+", label: "Web Templates" },
    { number: "10+", label: "Web Templates" },
    { number: "12+", label: "Web Templates" },
  ];

  return (
    <section
      id="about"
      className="max-w-screen-xl mx-auto overflow-hidden"
      style={{ marginTop: "-80px" }}
    >
      <div
        className="pb-28 md:pb-44 pt-40 md:pt-72 our-client-text bg-no-repeat lg:bg-auto bg-contain mx-4"
        style={{
          backgroundImage: `url("https://i.ibb.co/RzCxRhs/ABOUT-US.png")`,
        }}
      >
        <div className="grid lg:grid-cols-2 z-50 items-end md:gap-24 gap-10">
          <div>
            <p data-aos="fade-right" className="font-poppins text-xl">
              A b o u t T e c h P l a t o
            </p>
            <h3
              data-aos="fade-right"
              className="font-bold mt-3 mb-3 md:mt-4 md:mb-6 md:text-[48px] md:leading-[56px] text-[24px] leading-[32px] text-neutral LarkenDEMOFont"
            >
              Talented individuals with big goals build amazing software
              together.
            </h3>
            <p
              data-aos="fade-right"
              className="font-poppins text-neutral text-base md:text-xl"
            >
              At Techplato, we have a mix of talented people with big goals and
              a go-getter attitude. We believe in working together to build
              amazing products. We empower everyone to own their work and drive
              their own success. Here, we create an environment where new ideas
              are always welcome and encouraged to flourish.
            </p>
            <div
              data-aos="fade-up"
              className="hidden lg:grid md:grid-cols-4 md:gap-30 mt-36"
            >
              {stats.map((stat, index) => (
                <div key={index} className="items-start">
                  <h2 className="font-bold text-neutral text-6xl LarkenDEMOFont">
                    {stat.number}
                  </h2>
                  <p className="font-poppins text-neutral text-base">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div data-aos="fade-up">
            <p className="font-bold text-xl mb-3 md:mb-5 LarkenDEMOFont">
              Our Values
            </p>
            {values.map((value, index) => (
              <div key={index} className="flex gap-2 md:mb-3">
                <Image src={checkMark} className="h-[20px] mt-1" alt="" />
                <p className="font-poppins text-neutral text-base md:text-xl">
                  <span className="font-semibold">{value.title}:</span>{" "}
                  {value.description}
                </p>
              </div>
            ))}
          </div>
          <div
            className="lg:hidden grid grid-cols-2 mx-10 md:mx-0 md:grid-cols-4 gap-y-8 md:gap-30"
            data-aos="fade-up"
          >
            {stats.map((stat, index) => (
              <div key={index} className="items-center md:items-start">
                <h2 className="font-bold text-neutral text-4xl md:text-[56px] md:leading-[64px] LarkenDEMOFont">
                  {stat.number}
                </h2>
                <p className="font-poppins text-neutral  md:text-xl text-base">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
