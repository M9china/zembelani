import { StaticEquip } from "./StaticEquip";
import Image from "next/image";

export const Equipment = () => {
  return (
    <main
      aria-label="catalogue"
      className="min-h-screen pt-[7rem] bg-white px-4"
    >
      <h1 className="text-[#001A4B] text-3xl font-semibold">
        RELIABLE EQUIPMENT RENTALS FOR EVERY PROJECT
      </h1>

      <p className="text-lg text-gray-800 mt-8">
        We offer reliable, well-maintained heavy machinery for construction,
        industrial and even DIY projects. With <strong>competitive rates </strong> and excellent
        services, <strong>Zembelani Transport & Projects</strong> ensures you have the right
        equipmentfor the job.
      </p>

      <div className="mt-[3rem] sm:grid grid-cols-4 gap-4">
        {StaticEquip.map((item) => (
          <div key={item.title} className="relative ">
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
