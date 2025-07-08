export declare interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string[];
}

export const ProjectsStatic: Project[] = [
  {
    id: 1,
    title: "R54 ROADWORK",
    description: "PORTHOLE PATCHING & ROADWORKS",
    imageUrl: ["/projects/roadwork.png", '/projects/roadwork.png'],
  },
  {
    id: 2,
    title: "STORMWATER DRAINAGE",
    description: "STORMWATER & BRIDGE CONSTRUCTION",
    imageUrl: ["/projects/drainage.png",],
  },
  {
    id: 3,
    title: "HIGH PRESSURE PUMPS INSTALLATION",
    description: "INDUSTRIAL PRESSURE-PUMP INSTALLATION",
    imageUrl: ["/projects/pressure_pump.png",],
  }
];
