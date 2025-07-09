import { ProjectsStatic } from "@/components";
import { notFound } from "next/navigation";
import Image from "next/image";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const projectId = await params
    .then((p) => parseInt(p.id, 10))
    .catch(() => null);
  if (!projectId) return notFound();

  const project = ProjectsStatic.find((p) => p.id === projectId);

  return (
    <main className="min-h-screen pt-[4rem] bg-white">
      <div className="relative">
        {project?.imageUrl.slice(1).map((image, index) => (
          <Image
            key={index}
            className={`${
              index > 0 &&
              "px-4 h-[18rem] aspect-[4/3] object-contain brightness-90"
            } w-full brightness-50 mb-8 object-cover`}
            alt={project.title}
            width={1920}
            height={1080}
            src={image}
          />
        ))}
        <h1 className="text-5xl absolute top-[16rem] px-8 font-bold text-white mb-6">
          {project?.title}
        </h1>
      </div>
      <div className="px-4 pb-8">
        <h1 className="text-blue-900 text-2xl pb-2 border-b-1 border-gray-400 font-bold">
          {project?.longDescription?.portfolioTitle}
        </h1>
        <h3 className="text-blue-900 border-b-1 border-gray-400 pb-8 mt-2 text-md">
          {project?.longDescription?.portfolioSubtitle}
        </h3>
        <p className="text-gray-900 mt-8 font-sans">
          {project?.longDescription?.portfolioDescription}
        </p>
        <p className="text-gray-900 mt-6 font-sans">
          {project?.longDescription?.portfolioDescription1}
        </p>
      </div>
    </main>
  );
}
