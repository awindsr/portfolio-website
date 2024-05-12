import { useEffect } from "react";
import "./App.css";
import { Hero } from "./Hero";
import { Project } from "./Project";
import { AboutMe } from "./AboutMe";
import { Contact } from "./Contact";
import { HorizontalSlider } from "./HorizontalSlider";

function App() {
  useEffect(() => {
    // Set document title
    document.title = "Awindsr Web Developer";

    // Set favicon
    const favicon = document.getElementById("favicon");
    favicon.href = "/logo.ico";
  }, []);
  return (
    <div className="relative h-screen max-w-screen flex">
      {/* Bokeh Circles */}

      {/* Body Container */}
      <div className="body-container bg-[#0f0f0f] p-1 relative h-screen border border-gray-400 z-0">
        {/* Content */}
        <div className="bokeh-circle absolute z-2  top-[12rem] left-[3rem]"></div>
        <div className="bokeh-circle absolute z-2 right-[8rem] top-[5rem]"></div>
        {/* <div className="border border-gray-400  h-[99%] max-w-[21.9rem] absolute overflow-y-scroll z-10"> */}
        <div className="border border-gray-400  h-[99%] w-[screen] flex-1 overflow-y-scroll z-10">
          <Hero />
          <Project />
          <AboutMe />
          <HorizontalSlider/>
          <Contact />
          <Footer />
        </div>
      </div>
    </div>
  );
}
function Footer() {
  return (
    <div className="bg-black z-3 max-w-screen">
      <footer className=" w-[100%]  text-white p-2">
        <div className="flex items-center justify-between sm:justify-around space-y-4 p-5">
          <div className="">
            <h2 className="font-poppins text-[.9rem] sm:text-[2rem] font-bold">
              Connect with Me
            </h2>
            <div className="text-left">
              <p className="text-[.8rem]">
                Awindsr@gmail.com{" "}
                <i class="fa fa-envelope" aria-hidden="true"></i>
              </p>
              <p className="text-[.8rem] ">
                +9188684115 <i class="fa fa-phone" aria-hidden="true"></i>
              </p>
            </div>
          </div>
          <div className="flex space-x-3">
            <a href="#">
              <img src="github-mark-white.svg" className="h-[1.3rem] w-[1.3rem]" />
            </a>
            <a href="#">
              <img src="linkedin.png" className="h-[1.3rem] w-[1.3rem]" />
            </a>
          </div>
          
        </div>
        <div className="text-center text-[.8rem]">
            <p>Designed and Developed by <span className="text-[#8fff86]">Awindsr</span></p>
          </div>
      </footer>
    </div>
  );
}
export default App;
