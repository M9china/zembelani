export declare interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string[];
}

export const ProjectsStatic: Project[] = [
  {
    id: 1,
    title: "Project One",
    description: "This Is The First Project.",
    imageUrl: ["/projects/roadwork.png", '/projects/roadwork.png'],
  },
  {
    id: 2,
    title: "Project Two",
    description: "This is the second project.",
    imageUrl: ["/projects/drainage.png",],
  },
  {
    id: 3,
    title: "Project Three",
    description: "This is the third project.",
    imageUrl: ["/projects/pressure_pump.png",],
  }
];
