import "./Hero.css"

export function Hero() {
  return (
    <div className="max-w-screen h-[100%] relative z-3">
          <div className="bokeh-circle absolute z-1  top-[12rem] left-[3rem]"></div>
        <div className="bokeh-circle absolute z-1 right-[8rem] top-[5rem]"></div>
      <div className="absolute w-[100%] h-[100%] top-0">
        <MScroll />
      </div>
      <div className="herotext flex flex-col items-center justify-center w-[100%] h-[100%] md:max-w-[100%]">
        <h1 className="text-white text-[3rem] font-regular font-sarabun md:text-[7rem] " style={{ lineHeight: '.9' }}>
          Hi, I'm Awin, a<br></br>
          <span className="text-[#8fff86]">web developer,</span>
        </h1>
        <p className="text-gray-100 text-[1.4rem] font-nunito md:w-1/2 mt-8 p-5">
          sculpting<span className="text-[#8fff86]"> digital dreams </span>into reality. With code as my
          chisel and pixels as my medium, I bring visions to life, crafting
          <span className="text-[#8fff86]"> immersive online experiences</span> that captivate and inspire.
        </p>
      </div>
    </div>
  );
}
function MScroll() {
  return (
    <div className="m-scroll z-2 w-[100%]">
      <div className="m-scroll__title">
        <div>
          <h1>WEB DEVELOPER UI/UX DEVELOPER&nbsp;</h1>
          <h1>WEB DEVELOPER UI/UX DEVELOPER&nbsp;</h1>
        </div>
      </div>
    </div>
  );
}
