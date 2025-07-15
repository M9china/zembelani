import Link from "next/link";
import Image from "next/image";
import { ProjectsStatic } from "./ProjectsStatic";

export const Portfolio = () => {

    return (
        <main className="bg-white min-h-screen py-[7rem]">
      <h1 className="text-4xl gap-2 px-4 font-bold text-[#001A4B] mb-8">
        Our <br/>Projects
      </h1>
      <div className="px-8 ml-4 border-l-4 border-[#9b0000] space-y-4">
        <p className="text-gray-900 text-xl font-sans">
          Below is a selection of projects we have worked on:<br/>click on the project to view portfolio
        </p>
        <Link
          className="text-white bg-[#001A4B] text-xs font-bold py-3 px-4 rounded"
          href="/contact-us"
        >
          CONTACT US NOW
        </Link>
      </div>
      <div className="mt-16 sm:grid grid-cols-3 ">
        {ProjectsStatic.map((project, id) => (
          <div className="mx-4 mb-12 rounded-lg shadow-sm shadow-[#001A4B]" key={id}>
            <Link
              href={`/portfolio/${project.id}`}
              className="shadow-2xl shadow-gray-300  "
            >
              <Image
                className=" h-[11rem] rounded-t-lg object-cover hover:brightness-60 w-full brightness-50"
                alt={project.title}
                width={1920}
                height={1080}
                src={project.imageUrl[0]}
              />
              <p className="text-white bg-[#001A4B] rounded-b-lg font-bold py-6 px-4 text-2xl">
                {" "}
                {project.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </main>
    )
}
