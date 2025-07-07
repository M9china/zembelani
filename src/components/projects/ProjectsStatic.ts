export declare interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

export const ProjectsStatic: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "This Is The First Project.",
    imageUrl: "/projects/roadwork.png",
    projectUrl: "",
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is the second project.",
    imageUrl: "/images/project2.jpg",
    projectUrl: "",
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is the third project.",
    imageUrl: "/images/project3.jpg",
    projectUrl: "",
  }
];
