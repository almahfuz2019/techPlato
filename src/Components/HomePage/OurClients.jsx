import React from "react";
import image1 from "../../../public/assets/Images/Group 1000003319.png";
import image2 from "../../../public/assets/Images/Vector.png";
import image3 from "../../../public/assets/Images/Group 1000003320.png";
import image4 from "../../../public/assets/Images/Vector (1).png";
import image5 from "../../../public/assets/Images/Group 1000003327.png";
import image6 from "../../../public/assets/Images/Group 1000003323.png";
import image7 from "../../../public/assets/Images/Group 1000003325.png";
import image8 from "../../../public/assets/Images/Group 1000003326.png";

import Image from "next/image";
import Animation from "../Shared/Animation";

export default function OurClients() {
  return (
    <section>
      {/* Initialize AOS */}
      <Animation />

      <div
        className="pb-28 md:pb-44 pt-40 md:pt-72 our-client-text bg-no-repeat lg:bg-auto bg-contain mx-4"
        style={{
          backgroundImage: `url("https://i.ibb.co/5kMtPVJ/OUR-CLIENTS.png")`,
        }}
      >
        <div className="max-w-screen-xl mx-auto overflow-hidden">
          <div className="md:grid hidden md:grid-cols-4 gap-10 justify-center flex-wrap mx-5 md:mx-0 md:gap-y-20 items-center justify-items-center">
            <figure data-aos="fade-up">
              <Image
                src={image1}
                height="auto"
                width="auto"
                alt="Clients Company"
              />
            </figure>
            <figure data-aos="fade-up" data-aos-delay="100">
              <Image
                src={image2}
                height="auto"
                width="auto"
                alt="Clients Company"
              />
            </figure>
            <figure data-aos="fade-up" data-aos-delay="200">
              <Image
                src={image3}
                height="auto"
                width="auto"
                alt="Clients Company"
              />
            </figure>
            <figure data-aos="fade-up" data-aos-delay="300">
              <Image
                src={image4}
                height="auto"
                width="auto"
                alt="Clients Company"
              />
            </figure>
            <figure data-aos="fade-up" data-aos-delay="400">
              <Image
                src={image5}
                height="auto"
                width="auto"
                alt="Clients Company"
              />
            </figure>
            <figure data-aos="fade-up" data-aos-delay="500">
              <Image
                src={image6}
                height="auto"
                width="auto"
                alt="Clients Company"
              />
            </figure>
            <figure data-aos="fade-up" data-aos-delay="600">
              <Image
                src={image7}
                height="auto"
                width="auto"
                alt="Clients Company"
              />
            </figure>
            <figure data-aos="fade-up" data-aos-delay="700">
              <Image
                src={image8}
                height="auto"
                width="auto"
                alt="Clients Company"
              />
            </figure>
          </div>

          {/* For mobile */}
          <div className="grid md:hidden grid-cols-3 md:grid-cols-4 gap-8 justify-center flex-wrap mx-5 md:mx-0 md:gap-y-20 items-center justify-items-center">
            <figure data-aos="fade-up">
              <Image
                src={image6}
                height="auto"
                width="auto"
                alt="Clients Company"
              />
            </figure>
            <figure data-aos="fade-up" data-aos-delay="100">
              <Image
                src={image1}
                height="auto"
                width="auto"
                alt="Clients Company"
              />
            </figure>
            <figure data-aos="fade-up" data-aos-delay="200">
              <Image
                src={image2}
                height="auto"
                width="auto"
                alt="Clients Company"
              />
            </figure>
            <figure data-aos="fade-up" data-aos-delay="300">
              <Image
                src={image4}
                height="auto"
                width="auto"
                alt="Clients Company"
              />
            </figure>
            <figure data-aos="fade-up" data-aos-delay="400">
              <Image
                src={image3}
                height="auto"
                width="auto"
                alt="Clients Company"
              />
            </figure>
            <figure data-aos="fade-up" data-aos-delay="500">
              <Image
                src={image7}
                height="auto"
                width="auto"
                alt="Clients Company"
              />
            </figure>
          </div>

          <div className="grid md:hidden grid-cols-2 mt-8 md:grid-cols-4 gap-8 justify-center flex-wrap mx-5 md:mx-0 md:gap-y-20 items-center justify-items-center">
            <figure data-aos="fade-up">
              <Image
                src={image5}
                height="auto"
                width="auto"
                alt="Clients Company"
              />
            </figure>
            <figure data-aos="fade-up" data-aos-delay="100">
              <Image
                src={image8}
                height="auto"
                width="auto"
                alt="Clients Company"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
