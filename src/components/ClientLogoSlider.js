import React from "react";
import Image from "next/image";

const ClientLogoSlider = () => {
  const logos = [
    { id: 1, src: "/images/logo/matrimandir.svg", alt: "matrimandir" },
    { id: 2, src: "/images/logo/shraddha-yoga.svg", alt: "shraddha-yoga" },
    { id: 3, src: "/images/logo/solitude-farm.svg", alt: "solitudefarm" },
    { id: 4, src: "/images/logo/av-marathon.svg", alt: "av marathon" },
    { id: 5, src: "/images/logo/tvam.svg", alt: "tvam" },
    { id: 6, src: "/images/logo/kittykat.svg", alt: "kittykat" },
    { id: 7, src: "/images/logo/bevolve-ai.svg", alt: "bevolve" },
    {
      id: 8,
      src: "/images/logo/general-aeronautics.svg",
      alt: "General Aeronautics",
    },
    { id: 9, src: "/images/logo/prakriti-sattva.svg", alt: "Prakriti Sattva" },
    { id: 10, src: "/images/logo/rangsutra.svg", alt: "rangsutra" },
    { id: 11, src: "/images/logo/maatram.svg", alt: "maatram" },
    { id: 12, src: "/images/logo/ageshift.svg", alt: "ageshift" },
    { id: 13, src: "/images/logo/quilt.ai.svg", alt: "quilt.ai" },
    { id: 14, src: "/images/logo/startup-o.svg", alt: "startup-o" },
    { id: 15, src: "/images/logo/cat.svg", alt: "agroecological" },
    { id: 16, src: "/images/logo/buglerock.svg", alt: "buglerock" },
    { id: 17, src: "/images/logo/indic.svg", alt: "Indic-ai" },
    { id: 18, src: "/images/logo/nsf.svg", alt: "North South Foundation" },
    { id: 19, src: "/images/logo/bmh.svg", alt: "Bmh Equipment Info" },
    { id: 20, src: "/images/logo/hemplanet.svg", alt: "hemplanet" },
  ];

  return (
    <div className="relative overflow-hidden h-[320px] md:h-[260px] bg-white py-8 ">
      <h2 className="text-center text-1xl font-primary font-semibold mb-2">
        <span className="text-violet-500">Clients</span> We&apos;re Proud to
        Work With
      </h2>
      <p
        className="text-center text-md font-secondary mb-2 px-2"
      >
        We collaborate with mission-driven organisations, tech innovators,
        nonprofits, sustainability leaders, and forward-thinking businesses
        across India and beyond
      </p>
      <div className="w-full flex overflow-hidden relative mt-6">
        {/* Animation container */}
        <div className="flex animate-marquee space-x-[70px] justify-center">
          {logos.map((logo) => (
            <Image
              key={logo.id}
              src={logo.src}
              alt={logo.alt}
              className="object-contain"
              width={250}
              height={250}
            />
          ))}
          {/* Duplicate the logos for seamless scroll */}
          {logos.map((logo) => (
            <Image
              key={`duplicate-${logo.id}`}
              src={logo.src}
              alt={logo.alt}
              className="object-contain"
              width={250}
              height={250}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientLogoSlider;
