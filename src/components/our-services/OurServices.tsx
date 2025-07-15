import { ServiceStatic } from "./ServiceStatic";
import Image from "next/image";

export const OurServices = () => {
  return (
    <main className="bg-gray-50 min-h-screen pt-[7rem]">
      <h1 className="text-4xl gap-2 px-4 font-bold text-[#001A4B] mb-4">
        Our <br />
        Services
      </h1>
      <p className="text-gray-800 text-lg px-4">
        Our services include but not limited to the following:
      </p>
      <div className="px-4 space-y-4 ">
        {ServiceStatic.map((item, index) => (
          <div key={index} className="mt-12 pb-16 sm:grid grid-cols-2">
            <Image
              className="object-cover sm:mr-8 rounded w-full h-[14rem]"
              width={1080}
              height={1920}
              src={item.imageUrl || "/default"}
              alt={"our-machinery"}
            />
            <div className="sm:ml-16">
              <h1 className="text-2xl font-bold text-[#001A4B] mt-10">
                {item.title}
              </h1>
              <p className="text-gray-800 text-lg mt-2">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
