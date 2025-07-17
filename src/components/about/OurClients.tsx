import Image from "next/image";

export const OurClients = () => {
  return (
    <main className="">
      <h1 className="text-[#001A4B] text-3xl font-semibold mt-8">
        CLIENTS & <br/>PARTNERS
      </h1>
      <Image
        src="/partners.png"
        alt="Our Clients"
        width={1920}
        height={1080}
        className="w-full h-[23rem] sm:h-[60rem] object-contain"
      />
      <p className="text-lg text-gray-800">
        Over the past 15 years we managed to build a reputable company which is
        sustainable and delivers quality work and services, we managed to
        acquire industry leading technology and machinery and successfully
        completed a number of projects
      </p>

      <div className="mt-8 pb-16">
        <h1 className="text-3xl font-semibold text-[#001A4B]">WHY CHOOSE US</h1>
        <p className="pt-5 text-lg text-gray-800">
          Our services are offered by qualified personnel who have a vast
          experience in their respective fields and are highly professional. We
          continually develop and adapt our strategy in order to give us a
          competitive edge needed.
        </p>
      </div>
    </main>
  );
};
