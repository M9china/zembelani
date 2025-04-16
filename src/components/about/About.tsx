import { IAU } from "./AboutDto";
import { AboutUs } from "./AboutStactic";
import Image from "next/image";

export const About = () => {
  return (
    <main
      aria-labelledby="about-us-section"
      className="bg-white min-h-screen block sm:hidden"
    >
      <p className="text-gray-600 px-4 pt-5 font-sans text-md justify-items-center">
        {AboutUs.wwa}
      </p>
      <h1 className="text-[#001A4B] px-4 font-semibold text-3xl mt-6">WHAT WE DO</h1>
      <section className=" flex space-x-4 px-4 items-center mt-5">
        <div className="bg-[#9b0000] w-4 border border-[#9b0000] h-[8rem]"></div>
        <p className="text-gray-600 font-sans text-lg justify-items-center">
          {AboutUs.wwd}
        </p>
      </section>
      <div className="bg-[#001A4B] mt-5">
        {AboutUs.display.map((items: IAU) => (
          <div key={items.description} className="relative py-6 px-4">
            <Image
              className="rounded-xs w-full h-[20rem] brightness-90"
              alt="machinery"
              width={1920}
              height={1080}
              src={items.image}
            />
            <p className="text-white font-semibold px-4 text-2xl absolute bottom-10">{items.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};
