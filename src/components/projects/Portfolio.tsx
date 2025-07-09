import Link from "next/link";
import Image from "next/image";
import { ProjectsStatic } from "./ProjectsStatic";

export const Portfolio = () => {

    return (
        <main className="bg-white min-h-screen py-[7rem]">
      <h1 className="text-4xl gap-2 px-4 font-bold text-[#001A4B] mb-8">
        Our <br/>Projects
      </h1>
      <div className="px-8 space-y-4">
        <p className="text-gray-900 text-xl font-sans">
          Below is a selection of projects we have worked on:
        </p>
        <Link
          className="text-white bg-blue-900 text-xs font-bold py-3 px-4 rounded"
          href="/contact-us"
        >
          CONTACT US NOW
        </Link>
      </div>
      <div className="mt-16 ">
        {ProjectsStatic.map((project, id) => (
          <div className="mx-4 mb-12 rounded-lg shadow-lg shadow-[#001A4B]" key={id}>
            <Link
              href={`/portfolio/${project.id}`}
              className="shadow-2xl shadow-gray-300  "
            >
              <Image
                className=" h-[11rem] rounded-t-lg object-cover w-full brightness-50"
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
