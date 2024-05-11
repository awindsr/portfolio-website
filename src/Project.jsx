import { useState } from "react";
import "./Project.css"

export function Project() {
  const stacks = [
    {
      title: "Portfolio Website",
      stack: ["React", "Tailwind CSS", "Node.js", "Express"],
      link: "https://awindsr.github.io",
      year: "2023",
      image: "projectone.png"
    },
    {
      title: "E-commerce Platform",
      stack: ["React", "Redux", "Firebase", "Stripe"],
      link: "https://example.com/ecommerce",
      year: "2023",
    },
    {
      title: "Social Media App",
      stack: ["React", "MongoDB", "Express", "Node.js"],
      link: "https://example.com/social-media",
      year: "2023",
    },
  ];

  return (
    <div className="projectsContainer h-[100%] w-[100%] text-white font-nunito">
      {stacks.map((stack, index) => (
        <ProjectItem
          key={index}
          index={`0${index + 1}`}
          title={stack.title}
          stack={stack.stack}
          link={stack.link}
          year={stack.year}
          image={stack.image} />
      ))}
    </div>
  );
}
function ProjectItem({ index, title, stack, link, year, image }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className="projectItemOne m-5 flex justify-center items-center" onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}>
      <div className="h-[10rem] w-[60rem] bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-500 shadow-md flex items-center justify-between space-x-4 p-4">
        <div>
          <span className="text-gray-500 text-xl">{index}</span>
          <div className="flex flex-col space-y-3">
            <h2 className="font-sarabun text-2xl font-bold">{title}</h2>
            <div className="flex text-gray-500 space-x-3">
              {stack.map((item, stackIndex) => (
                <div
                  key={stackIndex}
                  className="border border-gray-500 rounded-full px-3 py-1"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

        </div>
        <div className={`projectPhoto max-w-[15rem] max-h-[15rem] ${isVisible ? 'visible' : ''}`}>
          <img src={image} alt={title} className=" rounded-lg"></img>
        </div>
        <div className="space-x-1">
          <span className="projectYear">{year}</span>

          <button className="project-btn">
            <a href={link} target="_blank" rel="noopener noreferrer">
              <i className="fa fa-external-link" aria-hidden="true"></i>
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
