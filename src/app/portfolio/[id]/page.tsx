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
            className={`${index > 0 && 'px-4 h-[18rem] aspect-[4/3] object-contain brightness-90'} w-full brightness-50 mb-8 object-cover`}
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
      <p className="text-gray-900 px-4 pb-[4rem] text-lg">{project?.longDescription}</p>
    </main>
  );
}
