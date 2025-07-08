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
        {project?.imageUrl.map((image, index) => (
          <Image
            key={index}
            className="w-full h-auto brightness-40 mb-8 object-cover"
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
      <p className="text-gray-800 text-lg">{project?.description}</p>
    </main>
  );
}
