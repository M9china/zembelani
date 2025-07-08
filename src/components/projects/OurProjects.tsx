"use client";

import Image from "next/image";
import { useState } from "react";
import { ProjectsStatic } from "./ProjectsStatic";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export const ProjectsComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalSlides = ProjectsStatic.length;

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const project = ProjectsStatic[currentIndex];

  return (
    <main className="">
      <div className="relative">
        <Image
          className=" w-full brightness-50 object-cover h-auto"
          alt={project.title}
          width={1920}
          height={1080}
          src={project.imageUrl}
        />
        <div className="absolute top-28 p-4 rounded w-1/2">
          <h1 className="text-white leading-16 font-bold text-5xl">
            {project.description}
          </h1>
          
        </div>
        <div className="absolute px-4 bottom-8">
            <Link
              href={`portfolio/${project.id}`}
              className="text-white font-semibold text-lg"
            >
              VIEW PROJECT
            </Link>
            <div className="w-full mt-10 flex space-x-4">
              <button
                aria-label="Previous Project"
                onClick={goToPrevious}
                className="rounded-full p-2 border border-white hover:bg-black/70"
              >
                <ChevronLeftIcon className="h-6 w-6" />
              </button>
              <button
                aria-label="Next Project"
                onClick={goToNext}
                className="p-2 border border-white rounded-full text-white hover:bg-black/70"
              >
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
      </div>
    </main>
  );
};
