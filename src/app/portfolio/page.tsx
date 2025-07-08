import { ProjectsStatic } from "@/components";
import Link from "next/dist/client/link";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <main className="bg-gray-50 min-h-screen py-[5rem]">
      <h1 className="text-4xl gap-2 px-4 font-bold text-[#001A4B] mb-8">
        Our <br/>Projects
      </h1>
      <div className="px-8 space-y-4">
        <p className="text-gray-900 text-lg">
          Below is a selection of projects we have worked on:
        </p>
        <Link
          className="text-white bg-blue-900 text-xs font-bold py-2 px-4 rounded"
          href="/contact-us"
        >
          CONTACT US NOW
        </Link>
      </div>
      <div className="mt-16">
        {ProjectsStatic.map((project, id) => (
          <div className="mx-8 mb-12 shadow-2xl shadow-[#001A4B]" key={id}>
            <Link
              href={`/projects/${id}`}
              className="shadow-2xl shadow-gray-300 "
            >
              <Image
                className="w-full h-[11rem] rounded-t-2xl object-cover"
                alt={project.title}
                width={1920}
                height={1080}
                src={project.imageUrl}
              />
              <p className="text-white bg-[#001A4B] font-bold py-6 px-4 text-2xl">
                {" "}
                {project.description}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
