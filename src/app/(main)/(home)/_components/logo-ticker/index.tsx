"use client";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const logos = [
  { name: "BIWTC", logoImage: "/homepage/logo-ticker/BIWTC.jpeg" },
  // {
  //   name: "Everglory-Lines",
  //   logoImage: "/homepage/logo-ticker/everglory-lines-logo.jpg",
  // },
  { name: "IN-BD-7", logoImage: "/homepage/logo-ticker/IN-BD-7.jpeg" },
  { name: "Indo", logoImage: "/homepage/logo-ticker/Indo.jpeg" },
  { name: "River Edge", logoImage: "/homepage/logo-ticker/River-Edge.jpeg" },
  { name: "BIWTC", logoImage: "/homepage/logo-ticker/BIWTC.jpeg" },
  // {
  //   name: "Everglory-Lines",
  //   logoImage: "/homepage/logo-ticker/everglory-lines-logo.jpg",
  // },
  { name: "IN-BD-7", logoImage: "/homepage/logo-ticker/IN-BD-7.jpeg" },
  { name: "Indo", logoImage: "/homepage/logo-ticker/Indo.jpeg" },
  { name: "River Edge", logoImage: "/homepage/logo-ticker/River-Edge.jpeg" },
  { name: "BIWTC", logoImage: "/homepage/logo-ticker/BIWTC.jpeg" },
  // {
  //   name: "Everglory-Lines",
  //   logoImage: "/homepage/logo-ticker/everglory-lines-logo.jpg",
  // },
  { name: "IN-BD-7", logoImage: "/homepage/logo-ticker/IN-BD-7.jpeg" },
  { name: "Indo", logoImage: "/homepage/logo-ticker/Indo.jpeg" },
  { name: "River Edge", logoImage: "/homepage/logo-ticker/River-Edge.jpeg" },
];

export const LogoTicker = () => {
  return (
    <div className="w-full pb-4 sm:pb-0 md:pb-12 bg-white pr-14 mt-10">
      <div className="w-full">
        <h2 className="pl-14 text-center mb-8 text-[26px] md:text-[30px] 2xl:text-[36px] font-plus-jakarta-sans font-medium tracking-normal bg-gradient-to-b from-[#24479B] via-[#20408a] to-[#0C1835] bg-clip-text text-transparent leading-[1.4] my-2">
          Trusted by Industry Leaders
        </h2>
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <Marquee pauseOnHover speed={50} gradient={false} className="flex">
            {logos.map((logo, index) => (
              <div key={`${logo.name}-${index}`} className="h-16 w-auto mx-7">
                <Image
                  src={logo.logoImage}
                  width={400}
                  height={400}
                  alt={`${logo.name} Premium website redesign for real estate company in UAE`}
                  className="h-16 w-auto"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};
