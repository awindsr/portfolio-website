import "./Hero.css"

export function Hero() {
  return (
    <div className="w-[100%] h-[100%] relative">
      <div className="absolute w-[100%] h-[100%] top-0 z-9">
        <MScroll />
      </div>
      <div className="flex flex-col items-center justify-center w-[100%] h-[100%] z-10 ">
        <h1 className="text-white text-[7rem] font-regular font-sarabun " style={{ lineHeight: '.9' }}>
          Hi, I'm Awin, a<br></br>
          <span className="text-[#8fff86]">web developer,</span>
        </h1>
        <p className="text-gray-500 text-[1.4rem] font-nunito w-1/2 mt-8">
          sculpting digital dreams into reality. With code as my
          chisel and pixels as my medium, I bring visions to life, crafting
          <span className="text-[#8fff86]"> immersive online experiences</span> that captivate and inspire.
        </p>
      </div>
    </div>
  );
}
function MScroll() {
  return (
    <div className="m-scroll">
      <div className="m-scroll__title">
        <div>
          <h1>WEB DEVELOPER UI/UX DEVELOPER&nbsp;</h1>
          <h1>WEB DEVELOPER UI/UX DEVELOPER&nbsp;</h1>
        </div>
      </div>
    </div>
  );
}
