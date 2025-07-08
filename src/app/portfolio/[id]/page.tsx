import { ProjectsStatic } from "@/components";

interface Props {
    params: {
        id: string;
    };
}

export default function DetailsPage({ params }: Props) {
    const projectId = parseInt(params.id);
    const project = ProjectsStatic.find((proj) => proj.id === projectId);
    return (
        <main className="container mx-auto p-4 pt-[5rem] bg-white text-black">
            <h1>Project Details</h1>
            <p>This is the details page for a specific project.</p>
            { project ? (
                <div>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                </div>
            ) : (
                <p>Project not found.</p>
            )}
        </main>
    );
}
