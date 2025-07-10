import { ServiceStatic } from "./ServiceStatic";
import Image from "next/image";

export const OurServices = () => {
  return (
    <main className="bg-gray-50 min-h-screen pt-[6rem]">
      <h1 className="text-4xl gap-2 px-4 font-bold text-[#001A4B] mb-8">
        Our <br />
        Services
      </h1>
      <div className="px-8 space-y-4">
        {ServiceStatic.map((item, index) => (
          <div key={index} className="">
            <Image
              className=""
              width={1080}
              height={1920}
              src={item.imageUrl || "/default"}
              alt={"our-machinery"}
            />
            <h1 className="text-2xl font-bold text-[#001A4B]">{item.title}</h1>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
};
