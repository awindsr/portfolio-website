export function Contact() {
  return (
    <div className="bg-[#8fff00] h-[20rem] w-full flex flex-col justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-black font-poppins text-3xl font-bold w-1/2 text-center">Want to Know More?</h2>
        <p className="text-black font-nunito text-xl w-1/2 text-center"> Download my resume or drop me an email to connect further. Let's discuss how I can contribute to your project and help bring your vision to life!</p>
      </div>
      <div className="flex space-x-4">

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
