import { StaticEquip } from "./StaticEquip";
import Image from "next/image";

export const Equipment = () => {
  return (
    <main
      aria-label="catalogue"
      className="min-h-screen pt-[7rem] bg-white px-4"
    >
      <h1 className="text-[#001A4B] text-2xl font-bold">
        RELIABLE EQUIPMENT RENTALS FOR EVERY PROJECT
      </h1>

      <p className="text-lg text-gray-800 mt-8">
        We offer reliable, well-maintained heavy machinery for construction,
        industrial and even DIY projects. With competitive rates and excellent
        services, Zembelani Transport & Projects ensures you have the right
        Equipmentfor the job.
      </p>

      <div className="mt-[3rem]">
        {StaticEquip.map((item) => (
          <div key={item.title} className="relative">
            <Image src={item.image} alt={"product image"}
             width={500} height={500}
             className=" pb-10 object-cover brightness-70 h-[20rem] rounded" />
            <div className="absolute top-1/2">
                <p className="text-2xl text-center px-8 text-white font-bold font-sans">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
