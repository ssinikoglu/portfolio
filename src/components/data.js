import juniper from "../images/juniper.png";
import backtothemovies from "../images/backtothemovies.png";
import portfolio from "../images/portfolio.png";

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
    name: "Portfolio",
    desc: "Portfolio consists of my work experience and projects so far.",
    tech: "React, React-Router, Material Design Bootstrap",
    github:
      "https://github.com/ssinikoglu/bootcamp-istanbul-jul2020/tree/master/madlibz/Sule-Zeynep",
    picture: portfolio,
    demo: "https://sule-sinikoglu.netlify.app/"
  },
];

export default projects;
