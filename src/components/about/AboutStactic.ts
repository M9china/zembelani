import { IAbout } from "./AboutDto";

export const AboutUs: IAbout = {
  wwa: `Zembelani Transport & Projects was established in 2005. The Company operates mainly in Transportation, 
    Plant Hire, Civil and Building Construction. 
    Currently we employ 150 employees across all our services sectors on a permanent basis.
    `,
  wwd: `We are a leading Transport and Construction Company, Over the past years our
     company has managed to build reputation in Transportation and Construction sector.`,
  display: [
      {
      image: "/projects/bridges.jpg",
      description: `STORMWATER DRAINAGE`,
    },
    {
      image: "/projects/tar.jpg",
      description: `ROADS & EARTHWORKS`,
    },
        {
      image: '/projects/sand.jpg',
      description: ` 14m3 & 10m3 TIPPER TRUCKS`,
    },
    {
      image: '/projects/pump03.jpg',
      description: `PRESSURE-PUMPS INSTALLATION`,
    }


  ],
};
