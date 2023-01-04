import React from "react";

import { motion } from "framer-motion";

import Masonry from "react-masonry-css";
import Section from "../Customs/Section";
import WorkCard from "../Customs/WorkCard";

const Work = () => {
  const categories = [
    {
      name: "JavaScript",
      slug: "JavaScript",
    },
    {
      name: "React JS",
      slug: "react-js",
    },
    {
      name: "Node JS",
      slug: "node-js",
    },
    {
      name: "MERN Stack",
      slug: "mern-stack",
    }
  
  ];
  const works = [

    {
      thumbnail: "/images/work/work-2.jpg",
      title: "Guess the Number",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      status: 2,
      categories: [categories[0]],
      demoURL: "https://js-game-guess-the-number.netlify.app/",
      codeURL: "https://github.com/Habib-hs/Guess-the-Number",
    },
    {
      thumbnail: "/images/work/work-2.jpg",
      title: "Pig Number",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      status: 2,
      categories: [categories[0]],
      demoURL: "https://simple-pig-game.netlify.app/",
      codeURL: "https://github.com/Habib-hs/Pig-Game",
    },
    {
      thumbnail: "/images/work/work-2.jpg",
      title: "Exchange Rate Calculator",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      status: 2,
      categories: [categories[0]],
      demoURL: "https://expense-tracker-b5ea.vercel.app/",
      codeURL: "https://github.com/Habib-hs/exchangeRate",
    },
    {
      thumbnail: "/images/work/work-2.jpg",
      title: "Meal Finder",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      status: 2,
      categories: [categories[0]],
      demoURL: "https://meal-finder-dun.vercel.app/",
      codeURL: "https://github.com/Habib-hs/Meal-Finder",
    },
    {
      thumbnail: "/images/work/work-2.jpg",
      title: "Calculator",
      description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
      status: 2,
      categories: [categories[0]],
      demoURL: "https://normal-calculator-js.netlify.app/",
      codeURL: "https://github.com/Habib-hs/Calculator",
    },
 
    {
      thumbnail: "/images/work/work-1.jpg",
      title: "Filtering All Products",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus velit dignissimos.",
      status: 2,
      categories: [ categories[1]],
      demoURL: "https://react-simple-filter.netlify.app/",
      codeURL: "https://github.com/Habib-hs/react-filter-app",
    },
    {
      thumbnail: "/images/work/work-1.jpg",
      title: "React Todo List",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus velit dignissimos.",
      status: 2,
      categories: [ categories[1]],
      demoURL: "https://react-simple-todo-lists.netlify.app/",
      codeURL: "https://github.com/Habib-hs/todo-list",
    },
    {
      thumbnail: "/images/work/work-1.jpg",
      title: "Covid Tracker",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus velit dignissimos.",
      status: 2,
      categories: [ categories[1]],
      demoURL: "https://tracker-app-covid.netlify.app/",
      codeURL: "https://github.com/Habib-hs/covid-tracker",
    },
    
    {
      thumbnail: "/images/work/work-1.jpg",
      title: "Movie Site",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus velit dignissimos.",
      status: 2,
      categories: [ categories[1]],
      demoURL: "https://netflix-movie-site-react.netlify.app/",
      codeURL: "https://github.com/Habib-hs/react-movie-site",
    },
    {
      thumbnail: "/images/work/work-4.jpg",
      title: "Amazona",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus velit dignissimos.",
      status: 2,
      categories: [ categories[3]],
      demoURL: "https://amazona.onrender.com/",
      codeURL: "https://github.com/Habib-hs/ecommerce-backend",
    },
    {
      thumbnail: "/images/work/work-7.jpg",
      title: "Book Shop",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus velit dignissimos.",
      status: 2,
      categories: [ categories[3]],
      demoURL: "https://bookshop.onrender.com/",
      codeURL: "https://github.com/Habib-hs/ecommerce-front",
    },
    // },
    // {
    //   thumbnail: "/images/work/work-6.jpg",
    //   title: "Single Page Static Website",
    //   description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
    //   status: 2,
    //   categories: [categories[0], categories[2], categories[4]],
    //   demoURL: "#demo",
    //   codeURL: "#code",
    // },
    // {
    //   thumbnail: "/images/work/work-7.jpg",
    //   title: "Landing Page Using MUI",
    //   description: "Lorem, ipsum dolor velit dignissimos.",
    //   status: 3,
    //   categories: [categories[0], categories[5]],
    //   demoURL: "#demo",
    //   codeURL: "#code",
    // },
    // {
    //   thumbnail: "/images/work/work-8.jpg",
    //   title: "Landing Page using tailwind",
    //   description:
    //     "Lorem amet consectetur adipisicing elit. Quisquam temporibus",
    //   status: 2,
    //   categories: [categories[0], categories[4]],
    //   demoURL: "#demo",
    //   codeURL: "#code",
    // },
  ];

  const [category, setCategory] = React.useState("all");
  const [filteredWorks, setFilteredWorks] = React.useState([]);
  const [animateCard, setAnimateCard] = React.useState({ y: 0, opacity: 1 });

  React.useEffect(() => {
    setFilteredWorks(works);
  }, []);

  const handleWorkFilter = (category) => {
    setCategory(category);
    setAnimateCard([{ y: 100, opacity: 0 }]);

    setTimeout(() => {
      setAnimateCard([{ y: 0, opacity: 1 }]);

      if (category === "all") {
        setFilteredWorks(works);
      } else {
        let workList = [];
        works.forEach((work) => {
          let workCategories = [];
          work.categories.forEach((category) =>
            workCategories.push(category.slug)
          );
          if (workCategories.includes(category)) {
            workList.push(work);
          }
        });
        setFilteredWorks(workList);
      }
    }, 400);
  };

  return (
    <Section
      id="work"
      title="Works"
      description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam temporibus velit dignissimos."
      subtitle="My Projects since last 5 years"
      className="!pb-14 md:!pb-28"
    >
      <div className="flex items-center m-auto flex-col text-center w-full mb-10">
        <ul className="flex flex-wrap justify-center text-sm font-medium text-center">
          {[{ name: "All", slug: "all" }, ...categories].map((ct, index) => (
            <li className="m-1 mb-1" key={index}>
              <div
                onClick={() => {
                  handleWorkFilter(ct.slug);
                }}
                className={` inline-block shadow-normal py-2.5 px-5 cursor-pointer rounded-full transition-all duration-300 text-textPrimary dark:text-textDarkPrimary bg-paper dark:bg-paperDark hover:bg-primary hover:text-white dark:hover:bg-primary dark:hover:text-white  ${
                  ct.slug == category && "!text-white !bg-primary"
                }`}
              >
                {ct.name}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <Masonry
        breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
        className="flex flex-wrap"
      >
        {filteredWorks.map((work, index) => (
          <motion.div
            key={index}
            animate={animateCard}
            transition={{ duration: 0.4, delayChildren: 0.4 }}
          >
            <WorkCard {...work} />
          </motion.div>
        ))}
      </Masonry>
    </Section>
  );
};

export default Work;
