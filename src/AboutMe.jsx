export function AboutMe() {
  
  return (
    <div className="aboutmecontainer h-auto w-full text-white font-nunito flex flex-col md:flex-row justify-between items-center p-9 md:space-y-0 space-y-9">
      <div className="flex flex-col md:w-1/2 w-full p-4">
        <h1 className="font-sarabun font-bold text-4xl md:text-6xl mb-5">About Me</h1>
        <p className="font-nunito text-lg md:text-xl">
          Hey there! 👋 I'm Awin, a seasoned{" "}
          <span className="bg-red-600 rounded-lg px-1 py-1">web developer</span>{" "}
          with a flair for{" "}
          <span className="bg-blue-600 rounded-lg px-1 py-1">frontend wizardry</span>. 
          Over the past three years, I've been passionately crafting visually stunning and intuitively{" "}
          <span className="bg-pink-600 rounded-lg px-1 py-1">functional websites</span>. 
          For me, coding is more than just a profession – it's a playground where I can unleash my creativity and explore the latest in web technologies. From experimenting with cutting-edge frameworks to optimizing performance for seamless{" "}
          <span className="bg-red-600 rounded-lg px-1 py-1">user experiences</span>, 
          I thrive on the thrill of pushing the boundaries of what's possible on the web. Let's collaborate and turn your{" "}
          <span className="bg-yellow-400 rounded-lg px-1 py-1">digital dreams into reality!</span>
        </p>
      </div>
      <div className="flex flex-col items-center justify-center space-y-5">
        <div className="flex space-x-5">
          <StatItem value="4+" label="Coding experience" />
          <StatItem value="3+" label="Developing Websites" />
        </div>
        <StatItem value="15+" label="Projects" />
      </div>
      
    </div>
  );
}

const StatItem = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h3 className="text-8xl font-bold font-sarabun text-green-400 text-center">
        {value}<br />
        <span className="text-white text-2xl">{label}</span>
      </h3>
    </div>
  );
}
