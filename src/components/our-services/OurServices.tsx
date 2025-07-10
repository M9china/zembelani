import { ServiceStatic } from "./ServiceStatic";
import Image from "next/image";

export const OurServices = () => {
  return (
    <main className="bg-gray-50 min-h-screen pt-[7rem]">
      <h1 className="text-4xl gap-2 px-4 font-bold text-[#001A4B] mb-12">
        Our <br />
        Services
      </h1>
      <div className="px-4 space-y-4 pb-16">
        {ServiceStatic.map((item, index) => (
          <div key={index} className="mt-12">
            <Image
              className="object-cover rounded w-full h-[14rem]"
              width={1080}
              height={1920}
              src={item.imageUrl || "/default"}
              alt={"our-machinery"}
            />
            <h1 className="text-2xl font-bold text-[#001A4B] mt-10">{item.title}</h1>
            <p className="text-gray-800 text-lg mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};
