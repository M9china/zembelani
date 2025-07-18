export declare interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: PortfolioProps;
  imageUrl: string[];
}

interface PortfolioProps {
  portfolioTitle: string;
  portfolioSubtitle: string;
  portfolioDescription: string;
  portfolioDescription1: string;
}

export const ProjectsStatic: Project[] = [
  {
    id: 1,
    title: "R54 ROADWORK",
    description: "PORTHOLE PATCHING & ROADWORKS",
    longDescription:{
      portfolioTitle: "R54 ROADWORK",
      portfolioSubtitle: "PORTHOLE PATCHING & ROADWORKS",
      portfolioDescription: `The R54 roadwork project involved extensive porthole 
      patching and resurfacing to enhance road safety and durability. 
      High-quality asphalt was used to fill potholes, ensuring a smooth 
      driving surface. `,
      portfolioDescription1: `The project also included grading and compaction 
      to improve drainage and prevent future damage. Final inspections 
      confirmed compliance with engineering standards, ensuring the road 
      is now safer and more reliable for all users.`,
    } ,
    imageUrl: [
      "/projects/patch.jpg",
      "/projects/roadwork.png",
      "/projects/road.jpg",
      "/projects/road2.jpg",
      "/projects/road3.jpg",
      "/projects/road4.jpg",
      "/projects/road5.jpg",
    ],
  },
  {
    id: 2,
    title: "STORMWATER DRAINAGE",
    description: "STORMWATER & BRIDGE CONSTRUCTION",
    longDescription: {
      portfolioTitle: "STORMWATER DRAINAGE",
      portfolioSubtitle: "STORMWATER & BRIDGE CONSTRUCTION",
      portfolioDescription: `The stormwater drainage project involved the
      construction of a comprehensive system to manage surface water runoff.
      This included the installation of drainage pipes, catch basins, and
      retention ponds to prevent flooding and erosion. `,
      portfolioDescription1: `The project also ensured proper grading and landscaping to
      direct water flow efficiently. All components were designed to meet
      local regulations and environmental standards, enhancing the area's
      resilience against heavy rainfall and improving overall water management.`,
    },
    imageUrl: [
      "/projects/stormwater.jpg",
      "/projects/drainage.png",
      "/projects/bridges.jpg",
    ],
  },
  {
    id: 3,
    title: "HIGH PRESSURE PUMPS INSTALLATION",
    description: "INDUSTRIAL PRESSURE-PUMP INSTALLATION",
    longDescription: {
      portfolioTitle: "HIGH PRESSURE PUMPS INSTALLATION",
      portfolioSubtitle: "INDUSTRIAL PRESSURE-PUMP INSTALLATION",
      portfolioDescription: `The high pressure pumps installation project
      involved the setup of advanced pumping systems designed for industrial
      applications. This included the installation of high-capacity pumps,
      piping, and control systems to ensure efficient fluid transfer. `,
      portfolioDescription1: `The
      project required precise engineering to handle high pressures and
      flow rates, ensuring reliability and safety in operation. All systems
      were tested and calibrated to meet performance specifications, providing
      optimal functionality for the intended industrial processes.`,},
    imageUrl: [
      "/projects/pump.jpg",
      "/projects/pressure.png",
      "/projects/pump14.jpg",
      "/projects/pump12.jpg",
      "/projects/pump08.jpg",
      "/projects/pump06.jpg",
      "/projects/pump05.jpg",
      "/projects/pump03.jpg",
      "/projects/pump02.jpg",
      "/projects/pump01.jpg",
    ],
  },
];
