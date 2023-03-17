import juniper from "../images/juniper.png";
import backtothemovies from "../images/backtothemovies.png";
import nttdataproject from "../images/nttdataproject.png";

const projects = [
  {
    name: "Juniper",
    desc:
      "Juniper is created for informing children in the MENA region about environmental issues and climate change with games and resources.",
    tech: "React, Ant Design, Firebase, i18next, Jest",
    github: "https://github.com/ssinikoglu/capstone-istanbul-juniper",
    picture: juniper,
    demo: "https://capstone-project-juniper.netlify.app/",
  },
  {
    name: "Back to the Movies",
    desc:
      "Back to the Movies offers movie recommendations to cinema lovers via searching for the latest movies, future movies as well as movie genre, popularity.",
    tech: "JavaScript, OOP, HTML, CSS",
    github:
      "https://github.com/ibrahimaljarad/bootcamp-istanbul-jul2020/tree/master/movieproject/ibrahim-sule",
    picture: backtothemovies,
    demo: "https://backtothemovies.netlify.app/",
  },
  {
    name: "NTT DATA Project",
    desc: "This project is an implementation of e-commerce web site design. Includes product list, add to favourites, filter, and responsive design.",
    tech: "React, Material Design, Tailwind CSS, Redux",
    github:
      "https://github.com/ssinikoglu/ntt-data-project",
    picture: nttdataproject,
    demo: "https://ntt-data-project.netlify.app/"
  },
];

export default projects;
