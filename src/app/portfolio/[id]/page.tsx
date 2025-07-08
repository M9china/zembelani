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
    <main className="min-h-screen pt-[5rem] p-8 bg-white">
      <h1 className="text-3xl font-bold text-[#001A4B] mb-6">
        {project?.title}
      </h1>
      <Image
      src={project?.imageUrl || "/projects/default.png"}
        alt={project?.title || "Project Image"}
        width={1200}
        height={600}
        className="w-full h-[20rem] object-cover rounded-2xl mb-4"
      />
      <p className="text-gray-800 text-lg">{project?.description}</p>
    </main>
  );
}
