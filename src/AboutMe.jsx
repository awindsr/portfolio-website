export function AboutMe() {
  return (
    <div className="aboutmecontainer h-[100%] w-[100%] text-white font-nunito flex justify-between items-center p-9">
      <div className="flex flex-col w-1/2">
        <h1 className="font-sarabun font-bold text-[6rem] mb-5">About Me</h1>
        <p className="font-nunito text-xl">
          <span>Hey there!</span> 👋 I'm Awin, a seasoned{" "}
          <span className="bg-[#ee273e] rounded-lg px-1 py-1">
            web developer
          </span>{" "}
          with a flair for
          <span className="bg-[#4875ba] rounded-lg px-1 py-1">
            frontend{" "}
          </span>{" "}
          wizardry. Over the past three years, I've been passionately crafting
          visually stunning and intuitively{" "}
          <span className="bg-[#d82983] rounded-lg px-1 py-1">
            functional websites.
          </span>{" "}
          For me, coding is more than just a profession – it's a playground
          where I can unleash my creativity and explore the latest in web
          technologies. From experimenting with cutting-edge frameworks to
          optimizing performance for seamless{" "}
          <span className="bg-[#ee273e] rounded-lg px-1 py-1">
            user experiences
          </span>
          , I thrive on the thrill of pushing the boundaries of what's possible
          on the web. Let's collaborate and turn your{" "}
          <span className="bg-[#fec20e] rounded-lg px-1 py-1">
            digital dreams into reality!
          </span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-5">
        <div className="flex space-x-5">
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-4xl font-bold font-sarabun text-[#8fff86] text-center">
              4+ years<br></br>
              <span className="text-white text-2xl ">Coding experience</span>
            </h3>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h3 className="text-4xl font-bold font-sarabun text-[#8fff86] text-center">
              3+ years<br></br>
              <span className="text-white text-2xl ">Developing Websites</span>
            </h3>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-4xl font-bold font-sarabun text-[#8fff86] text-center">
            15+<br></br>
            <span className="text-white text-2xl ">Projects</span>
          </h3>
        </div>
      </div>
    </div>
  );
}
