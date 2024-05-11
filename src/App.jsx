import { useEffect } from "react";
import anime from "animejs";
import "./App.css";
import { Hero } from "./Hero";
import { Project } from "./Project";
import { AboutMe } from "./AboutMe";
import { Contact } from "./Contact";

function App() {
  return (
    <div className="body-container bg-[#0f0f0f] h-screen max-w-screen p-1 relative max-h-screen border border-gray-400">
      <div className="bokeh-circle absolute z-10 top-[12rem] left-[3rem]"></div>
      <div className="bokeh-circle absolute z-10 right-[8rem] top-[5rem]"></div>
      <div className="border border-gray-400 bg-[#0f0f0f] h-[99%] w-[100%] p-6 relative overflow-y-scroll">
        <Hero />
        <Project />
        <AboutMe />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-black z-10">
      <footer className=" w-[100%]  text-white p-5">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h2 className="font-poppins text-4xl font-bold">Connect with Me</h2>
          <div className="text-center">
            <p className="text-xl">
              Awindsr@gmail.com{" "}
              <i class="fa fa-envelope" aria-hidden="true"></i>
            </p>
            <p>
              +9188684115 <i class="fa fa-phone" aria-hidden="true"></i>
            </p>
          </div>
          <div className="flex space-x-3">
            <a href="#">
             <img src="github-mark-white.svg" className="h-[2rem] w-[2rem]"/>
            </a>
            <a href="#">
            <img src="linkedin.png" className="h-[2rem] w-[2rem]"/>
            </a>
          </div>
          <div>
            <p>Designed and Developed by Awindsr</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
