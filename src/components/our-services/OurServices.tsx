import { ServiceStatic } from "./ServiceStatic";
import Image from "next/image";

export const OurServices = () => {
  return (
    <main className="bg-gray-50 min-h-screen pt-[7rem]">
      <h1 className="text-4xl sm:text-5xl gap-2 px-4 font-bold text-[#001A4B] mb-4">
        Our <br />
        Services
      </h1>
      <p className="text-gray-800 sm:text-2xl text-lg px-4 sm:pb-12">
        Our services include but not limited to the following:
      </p>
      <div className="px-4 space-y-4 sm:grid grid-cols-2 gap-x-32 items-center">
        {ServiceStatic.map((item, index) => (
          <div key={index} className="mt-12 sm:pb-16 sm:mt-0 pb-16 ">
            <Image
              className="object-cover sm:mr-8 rounded w-full sm:h-[18rem] h-[14rem]"
              width={1080}
              height={1920}
              src={item.imageUrl || "/default"}
              alt={"our-machinery"}
            />
            <div className="">
              <h1 className="text-2xl sm:text-4xl font-bold text-[#001A4B] mt-10">
                {item.title}
              </h1>
              <p className="text-gray-800 text-lg sm:text-2xl mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
