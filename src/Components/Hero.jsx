import Image from "../images/illustration-hero.svg";
export default function Hero() {
  return (
    <section id="hero">
      <div className="container mx-auto p-2 flex  lg:flex-row flex-col-reverse lg:items-center justify-center">
        {/* content */}
        <div className="flex flex-col space-y-3 items-center lg:items-start text-center lg:text-left   ">
          <h1 className="font-semibold text-3xl max-w-sm lg:max-w-lg  md:text-4xl lg:text-5xl ">
            A Simple Bookmark Manager
          </h1>
          <p className="text-grayishBlue  md:max-w-lg lg:max-w-xl">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free
          </p>
          <div className="space-x-4">
            <button className="bg-softBlue text-white py-4 px-4 rounded-md hover:text-softBlue hover:bg-white border-2 hover:border-softBlue">
              Get it on chrome
            </button>
            <button className="bg-grayishBlue text-black py-4 px-4 rounded-md hover:bg-white hover:border-[1px] border-gray-900 hover:text-gray-600">
              Get it on firefox
            </button>
          </div>
        </div>
        {/* image */}
        <div className="relative">
          <img src={Image} alt="" className="z-20" />
          <div className="bgHero"></div>
        </div>
      </div>
    </section>
  );
}
