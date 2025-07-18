import Link from "next/link";
import { IAU } from "./AboutDto";
import { AboutUs } from "./AboutStactic";
import Image from "next/image";

export const About = () => {
  return (
    <main aria-labelledby="about-us-section" className="bg-white min-h-screen ">
      <div className="sm:grid grid-cols-2 sm:space-x-4 sm:my-[6rem]space-x-0 px-4 items-center">
        <div>
          <p className="text-gray-600 px-4 font-sans sm:text-2xl text-md justify-items-center">
            {AboutUs.wwa}
          </p>
        </div>
        <div>
          <h1 className="text-[#001A4B] px-4 font-semibold sm:text-5xl text-3xl sm:mt-0 mt-8">
            WHAT WE DO
          </h1>
          <section className=" flex px-4 items-center mt-5">
            <p className="text-gray-600 font-sans sm:text-2xl pl-8 border-l-4 border-[#9b0000] text-lg justify-items-center">
              {AboutUs.wwd}
            </p>
          </section>
        </div>
      </div>
      <div className="relative sm:grid-cols-3 mt-8">
        <Image
          className="rounded-xs px-4 w-full object-contain h-auto mt-4"
          alt="machinery"
          width={1920}
          height={1080}
          src="/projects/plant.jpg"
        />
        <div className="absolute sm:bottom-16 sm:px-16 bottom-8 px-4 ">
          <h1 className="text-white mb-8 font-semibold sm:text-5xl text-3xl px-4">
            PLANT HIRE SERVICES
          </h1>
          <Link href={'/catalogue'} className="mx-4 text-white font-bold border-b-2 border-[#001A4B] pt-8">VIEW ALL EQUIPMENT</Link>
        </div>
      </div>
      <div className="bg-[#001A4B] sm:grid grid-cols-3 gap-8 relative pt-[2rem] mt-[2rem]">
        {AboutUs.display.map((items: IAU) => (
          <div key={items.description} className="py-2 relative px-4">
            <Image
              className="w-full sm:h-[36rem]  object-cover brightness-75 h-[20.5rem]"
              alt="machinery"
              width={1920}
              height={1080}
              src={items.image}
            />
            <p className="text-white font-semibold px-4 text-3xl absolute sm:bottom-[8rem] bottom-10">
              {items.description}
            </p>
          </div>
        ))}
      </div>
      <div className="bg-[#001A4B] pt-8 sm:pb-[2rem] sm:items-center sm:grid grid-cols-2">
        <Image
          className="rounded-xs px-4 w-full object-contain sm:block hidden sm:h-[20rem]"
          alt="machinery"
          width={1920}
          height={1080}
          src="/projects/plant.jpg"
        />
        <div className="">
          <h1 className="text-white font-semibold sm:text-5xl text-3xl px-4">
            COMPANY VALUES
          </h1>
          <div className="text-white font-sans text-lg sm:text-2xl px-8 py-4">
            <p>- Professionalism</p>
            <p>- Integrity</p>
            <p>- Reliability</p>
            <p>- Quality Service</p>
            <p>- Credibility</p>
            <p>- Accountability</p>
            <p>- Compatitiveness</p>
            <p>- Efficiency</p>
          </div>
        </div>
      </div>
    </main>
  );
};
