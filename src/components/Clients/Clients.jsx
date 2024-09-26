"use client";
import wallStreet from "../../assets/icons/wall-street.svg";
import ncss from "../../assets/icons/ncss.svg";
import arcus from "../../assets/icons/arcus.svg";
import saint from "../../assets/icons/saint-james.svg";
import Marquee from "react-fast-marquee";

export default function Clients() {
  const logos = [
    {
      name: "NCSS",
      src: ncss,
    },
    {
      name: "WallStreet",
      src: wallStreet,
    },
    {
      name: "Saint-James",
      src: saint,
    },
    {
      name: "ARcus",
      src: arcus,
    },
    {
      name: "NCSS",
      src: ncss,
    },
    {
      name: "WallStreet",
      src: wallStreet,
    },
    {
      name: "Saint-James",
      src: saint,
    },
    {
      name: "Arcus",
      src: arcus,
    },
  ];

  return (
    <div className="relative z-20 py-10 md:py-40 px-4 md:px-8">
      <h2 className="text-center text-2xl md:text-5xl font-bold font-sans  bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-600">
        Brands We Work
      </h2>
      <p className="text-center text-base text-neutral-700 font-sans dark:text-neutral-300 mt-4">
        Over 27 revenue authorities and companies are growing with us.
      </p>
      <div className="flex gap-10 flex-wrap justify-center  relative h-full w-full mt-20 max-w-7xl mx-auto [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <Marquee pauseOnHover direction="right">
          {logos.map((logo, idx) => (
            <img
              key={`${logo.name}-${idx}`}
              src={logo.src}
              alt={logo.name}
              width="100"
              height="100"
              className=" md:w-40 w-32 object-contain filter mx-0 md:mx-10 dark:invert"
            />
          ))}
        </Marquee>
      </div>
      <div className="flex gap-10 flex-wrap justify-center md:gap-40 relative h-full w-full mt-4 md:mt-20 max-w-7xl mx-auto [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <Marquee pauseOnHover direction="left" speed={30}>
          {logos.map((logo, idx) => (
            <img
              key={`${logo.name}-second-${idx}`}
              src={logo.src}
              alt={logo.name}
              width="100"
              height="100"
              className=" md:w-40 w-32 object-contain filter mx-0 md:mx-10 dark:invert"
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
}
