import Image from "next/image";
import { OurClients } from "./OurClients";

export const AboutCompany = () => {
  return (
    <main className="bg-gray-50 min-h-screen">
      <Image
        src="/office.jpg"
        alt="About Us"
        width={1920}
        height={1080}
        className="w-full brightness-65 h-[40rem] sm:h-[60rem] object-cover"
      />
      <div className="absolute top-[10rem]">
        <h2 className="text-white leading-[5rem] font-semibold space-y-8 text-4xl px-8 sm:px-16 mt-4">
          ESTABLISHED
          <br /> 2005
          <br /> B-BBEE STATUS
          <br />
          LEVEL 1<br />
        </h2>
      </div>
      <div className="px-4 mt-[3rem]">
        <div>
            <h1 className="text-3xl text-[#001A4B] font-bold">OUR MISSION</h1>
        <ul className="list-disc list-inside text-lg text-gray-800 mt-5 px-2">
          <li>
            To be the leading transport and construction company of the 21st
            century and beyond.
          </li>
          <li>To be recognized for innovation and excellence.</li>
          <li>To demonstrate unwavering commitment to quality.</li>
          <li>To ensure sustainability in every project we undertake.</li>
        </ul>
        </div>
        <div>
            <h1 className="text-3xl text-[#001A4B] font-bold mt-8">OUR VISSION</h1>
            <ul className="list-disc list-inside text-lg text-gray-800 mt-5 px-2">
                <li>To deliver effective, efficient, and high-quality services that exceed client expectations.</li>
                <li>To foster sustainable growth while upholding social and environmental responsibility in all our operations.</li>
                <li>To continuously innovate and adopt industry-leading practices in transportation and construction to 
                    provide unmatched value to our clients and stakeholders.</li>
            </ul>

        </div>
        <OurClients/>
      </div>
    </main>
  );
};
