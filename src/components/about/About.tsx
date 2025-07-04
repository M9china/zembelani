import { IAU } from "./AboutDto";
import { AboutUs } from "./AboutStactic";
import Image from "next/image";

export const About = () => {
  return (
    <main
      aria-labelledby="about-us-section"
      className="bg-white min-h-screen block sm:hidden"
    >
      <p className="text-gray-600 px-4 font-sans text-md justify-items-center">
        {AboutUs.wwa}
      </p>
      <h1 className="text-[#001A4B] px-4 font-semibold text-3xl mt-8">
        WHAT WE DO
      </h1>
      <section className=" flex space-x-4 px-4 items-center mt-5">
        <div className="bg-[#9b0000] w-4 border border-[#9b0000] h-[7.5rem]"></div>
        <p className="text-gray-600 font-sans text-lg justify-items-center">
          {AboutUs.wwd}
        </p>
      </section>
     <div className="relative mt-8">
       <Image
        className="rounded-xs px-4 w-full object-cover h-auto mt-4"
        alt="machinery"
        width={1920}
        height={1080}
        src="/projects/tar.jpg"
      />
      <div className="absolute bottom-4 px-4 ">
        <h1 className="text-white font-semibold text-3xl px-4">
          ROADS & EARTHWORKS
        </h1>
      </div>
     </div>
      <div className="bg-[#001A4B] mt-[10rem]">
        {AboutUs.display.map((items: IAU) => (
          <div
            key={items.description}
            className="relative py-2 -top-[9.5rem] px-4"
          >
            <Image
              className="rounded-xs w-full object-cover h-auto brightness-90"
              alt="machinery"
              width={1920}
              height={1080}
              src={items.image}
            />
            <p className="text-white font-semibold px-4 break-words whitespace-normal text-3xl absolute bottom-10">
              {items.description}
            </p>
          </div>
        ))}
      </div>
    </main>
  );
};
