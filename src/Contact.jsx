export function Contact() {
  return (
    <div className="bg-[#8fff00] h-auto max-w-screen  flex flex-col justify-center items-center p-5 ">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-black font-poppins text-xl md:text-[2rem] font-bold w-1/2 text-center mb-3">Want to Know More?</h2>
        <p className="text-black font-nunito text-[.8rem] sm:text-[1rem]  w-auto sm:w-1/2 text-center"> Download my resume or drop me an email to connect further. Let's discuss how I can contribute to your project and help bring your vision to life!</p>
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-4 text-[.8rem]">

        <button className="bg-black px-3 py-2 text-white rounded-full mt-2 w-[12rem] flex justify-center">
          <a href="#">Download resume{" "}
            <i class="fa fa-download" aria-hidden="true"></i>

          </a>
        </button>
        <button className="bg-black px-3 py-2 text-white rounded-full mt-2 w-[12rem] justify-center">
          <a href="#">Mail Me{" "}
            <i class="fa fa-envelope" aria-hidden="true"></i>


          </a>
        </button>
      </div>
    </div>
  );
}
