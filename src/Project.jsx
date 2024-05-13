import { useState } from "react";
import "./Project.css";

export function Project() {
  const stacks = [
    {
      "title": "Todo App with user login ",
      "stack": ["ReactJS", "Tailwind CSS", "Vite", "TypeScript"],
      "link": "https://github.com/awindsr/Todo-api",
      "year": "2024",
      "image": "",
      "description": "A todo app made using µLearn's Backend api using ReactJS and Typescript"
    },
    {
      "title": "A Website for Musify App ",
      "stack": ["ReactJS"],
      "link": "https://musifyadr.netlify.app/",
      "year": "2024",
      "image": "",
      "description": "A website made using ReactJS for musify app"
    },
    {
      "title": "A Website for ByteGeist",
      "stack": ["ReactJS", "Tailwind CSS"],
      "link": "https://bytegeistdev.netlify.app/",
      "year": "2024",
      "image": "",
      "description": "Modern website for ByteGeist with React and Tailwind CSS."
    },
    {
      "title": "Electrical Communication Students Association - SJCET Website",
      "stack": ["ReactJS", "jQuery"],
      "link": "https://ecsa.sjcetpalai.ac.in/",
      "year": "2023",
      "image": "",
      "description": "Dynamic website for SJCET ECSA built with React and jQuery."
    },
    {
      "title": "UI for Ecommerce Website",
      "stack": ["Figma"],
      "link": "https://www.figma.com/proto/UhnrbYIbSmff5ivD8YaXQk/Vanchi?page-id=0%3A1&type=design&node-id=68-39&viewport=1851%2C-316%2C0.21&t=WknXvck9XQ0mmHih-1&scaling=min-zoom&mode=design",
      "year": "2023",
      "image": "",
      "description": "UI design for an ecommerce website crafted in Figma."
    },
    {
      "title": "Discord ScoreBoard Bot For µLearn Campus Discord",
      "stack": ["Python"],
      "link": "https://github.com/awindsr/Discord-Scoreboard-Bot",
      "year": "2024",
      "image": "",
      "description": "µLearn Discord bot for scoreboard and community engagement."
    },
    {
      "title": "Website for a handicraft Company",
      "stack": ["HTML", "CSS", "JavaScript"],
      "link": "https://awindsr.github.io/PCW/",
      "year": "2022",
      "image": "",
      "description": "Handicraft Company's website with HTML, CSS, and JavaScript."
    },
    {
      "title": "My portfolio Website -UI and Code",
      "stack": ["Figma", "HTML", "CSS", "JS"],
      "link": "https://awindsr.github.io/",
      "year": "2023",
      "image": "",
      "description": "Personal portfolio website showcasing projects and skills."
    },
    {
      "title": "Telegram Chatbot to Collect Student Data into Google Sheets",
      "stack": ["Python"],
      "link": "https://github.com/awindsr/Gsheet-TG-Bot",
      "year": "2022",
      "image": "",
      "description": "Telegram bot to collect student data into Google Sheets."
    },
    {
      "title": "Twitter Sentiment Analysis",
      "stack": ["Python", "NumPy", "Matplotlib", "Pandas"],
      "link": "https://github.com/awindsr/Twitter-Sentiment-Analysis",
      "year": "2022",
      "image": "",
      "description": "Program for analyzing sentiment distribution of hate tweets."
    },
    {
      "title": "Expense Manager Telegram Chatbot",
      "stack": ["Python"],
      "link": "https://github.com/awindsr/Expense-Manager-Telegram-bot",
      "year": "2022",
      "image": "",
      "description": "Telegram bot for seamless expense management and tracking."
    }
  ]
  

  return (
    <div className="projectsContainer bg-[#0f0f0f] text-white font-nunito p-[1rem] block overflow-y-auto flex-col items-center z-3">
      <h1 className="font-sarabun font-bold text-4xl md:text-6xl mb-5 ml-3">My Projects</h1>
      {stacks.map((stack, index) => (
        <ProjectItem
          key={index}
          index={`0${index + 1}`}
          title={stack.title}
          stack={stack.stack}
          link={stack.link}
          year={stack.year}
          image={stack.image}
          description={stack.description}
        />
      ))}
    </div>
  );
}

function ProjectItem({ index, title, stack, link, year, image, description }) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div
      className="projectItemOne  flex  justify-center items-center p-4"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      <div className="md:h-[10rem] w-full md:w-full h-auto bg-gray-800 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-40 border border-gray-500 shadow-md flex md:flex-row flex-col items-center justify-between space-x-4 p-4">
        <div>
        <span className="text-gray-500 text-xl">{index <= 9 ? `${index}` : index.slice(-2)}</span>


          <div className="flex flex-col space-y-3">
            <h2 className="font-sarabun text-2xl font-bold">{title}</h2>
            <div className="sm:flex">
              {stack.map((item, stackIndex) => (
                <div
                  key={stackIndex}
                  className=" m-0 border border-[#8fff86] rounded-full mr-2 mb-3 flex px-3 py-1  items-center md:text-[1rem] text-[.6rem] max-h-[1.5rem]"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className={`projectPhoto max-w-[15rem] mt-3 mb-3 md:m-0 max-h-[15rem] ${
            isVisible ? "visible" : ""
          }`}
        >
          <p className="font-poppins text-[1.2rem] text-[#66ad61]">{description}</p>
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
