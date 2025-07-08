export declare interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string[];
}

export const ProjectsStatic: Project[] = [
  {
    id: 1,
    title: "R54 ROADWORK",
    description: "PORTHOLE PATCHING & ROADWORKS",
    longDescription: `The road construction project was successfully 
    completed following all critical stages — from precise surveying and 
    thorough ground preparation to structured layering and bitumen application. 
    High-quality materials were used to ensure durability and a smooth driving experience. 
    The final asphalt surface was professionally compacted and cured. Clear road markings 
    were added, ensuring safety 
    and readiness for public use. The result is a strong, reliable, and well-engineered tar road.`,
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
    longDescription: `The stormwater infrastructure project was successfully 
    completed with a focus on efficient drainage and flood prevention. 
    High-quality culverts and pipelines were installed to ensure proper 
    water flow and long-term durability. Excavation and grading were done 
    with precision to direct runoff effectively. Final inspections confirmed 
    compliance with environmental and engineering standards, ensuring the system 
    is fully operational and ready for heavy rainfall conditions.`,
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
    longDescription: `
    The installation of high-pressure industrial pumps was 
    completed successfully, ensuring optimal performance and reliability. 
    Precision alignment, secure fittings, and rigorous testing were carried 
    out to meet safety and operational standards. All mechanical and electrical 
    systems were calibrated for efficiency and durability. The pumps are now fully 
    operational, ready to handle demanding industrial processes with consistent high 
    pressure and minimal downtime.`,
    imageUrl: [
      "/projects/pump.jpg",
      "/projects/pressure_pump.png",
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
