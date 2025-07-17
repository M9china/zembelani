import Image from "next/image";

export const OurClients = () => {
  return (
    <main className="px-4">
      <div className="sm:grid sm:mt-[5rem] grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-[#001A4B] sm:text-5xl text-3xl font-semibold mt-8">
            CLIENTS & <br />
            PARTNERS
          </h1>
          <p className="text-lg text-gray-800 mt-6 sm:mt-[3rem] sm:text-2xl">
            Over the past 15 years we managed to build a reputable company which
            is sustainable and delivers quality work and services, we managed to
            acquire industry leading technology and machinery and successfully
            completed a number of projects
          </p>
        </div>
        <Image
          src="/partners.png"
          alt="Our Clients"
          width={1920}
          height={1080}
          className="w-full h-[23rem] sm:h-[24rem] object-contain"
        />
      </div>

      <div className="mt-8 sm:mt-[5rem] pb-16">
        <h1 className="text-3xl font-semibold text-[#001A4B] sm:text-5xl">
          WHY CHOOSE US
        </h1>
        <p className="pt-5 text-lg text-gray-800 sm:w-1/2  sm:text-2xl">
          Our services are offered by qualified personnel who have a vast
          experience in their respective fields and are highly professional. We
          continually develop and adapt our strategy in order to give us a
          competitive edge needed.
        </p>
      </div>
    </main>
  );
};
