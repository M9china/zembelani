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
    imageUrl: ['/projects/patch.jpg',"/projects/roadwork.png", '/projects/road.jpg', '/projects/road2.jpg','/projects/road3.jpg','/projects/road4.jpg', '/projects/road5.jpg'],
  },
  {
    id: 2,
    title: "STORMWATER DRAINAGE",
    description: "STORMWATER & BRIDGE CONSTRUCTION",
    imageUrl: ['/projects/stormwater.jpg', "/projects/drainage.png", ],
  },
  {
    id: 3,
    title: "HIGH PRESSURE PUMPS INSTALLATION",
    description: "INDUSTRIAL PRESSURE-PUMP INSTALLATION",
    imageUrl: ['/projects/pump.jpg', "/projects/pressure_pump.png" ],
  }
];
