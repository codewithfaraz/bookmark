import { useState } from "react";
import Tab1 from "../images/illustration-features-tab-1.svg";
import Tab2 from "../images/illustration-features-tab-2.svg";
import Tab3 from "../images/illustration-features-tab-3.svg";
export default function Features() {
  const [pannel, setPannel] = useState("pannel1");
  function pannelChangeHandler(e, p) {
    e.preventDefault();
    setPannel(p);
  }
  return (
    <section id="features" className="my-22">
      {/*heading content */}
      <div className="container mx-auto my-12 space-y-3">
        <h2 className="font-semibold text-4xl text-center">Features</h2>
        <p className="text-grayishBlue text-center max-w-md mx-auto">
          Our aim is to make it quick and easy for you to access your favourite
          website. Your bookmarks sync between your devices so you can access
          them on the go.
        </p>
      </div>
      {/* tabs */}
      <div className="my-14 text-center mx-auto tabs flex flex-col md:flex-row space-y-5 md:space-y-0 md:space-x-7 items-center justify-center ">
        <a
          onClick={(e) => {
            e.preventDefault();
            setPannel("pannel1");
          }}
          href=""
          data-target="panel-1"
          className={`${
            pannel === "pannel1" ? "border-b-2 border-b-softRed" : ""
          }  hover:text-softRed duration-200`}
        >
          Simple Bookmarking
        </a>
        <a
          onClick={(e) => {
            e.preventDefault();
            setPannel("pannel2");
          }}
          href=""
          data-target="panel-2"
          className={`${
            pannel === "pannel2" ? "border-b-2 border-b-softRed" : ""
          }  hover:text-softRed duration-200`}
        >
          Speedy Searching
        </a>
        <a
          onClick={(e) => {
            e.preventDefault();
            setPannel("pannel3");
          }}
          href=""
          data-target="panel-3"
          className={`${
            pannel === "pannel3" ? "border-b-2 border-b-softRed" : ""
          }  hover:text-softRed duration-200`}
        >
          Easy Shairing
        </a>
      </div>
      {/* tabs content */}
      <div className="container mx-auto my-12">
        {/* tab 1 */}
        <div
          className={`items-center space-x-3 panel-1  flex-col md:flex-row space-y-12 md:space-y-0 ${
            pannel === "pannel1" ? "flex" : "hidden"
          }`}
        >
          <img src={Tab1} alt="" className="md:w-1/2" />
          <div className="flex flex-col space-y-3 md:w-1/2 md:pl-5">
            <h1 className="font-semibold text-3xl md:text-left text-center">
              Bookmark in one click
            </h1>
            <p className="text-grayishBlue md:text-left text-center">
              Organize your bookmarks however you like. Our simple drag-and-drop
              interface gives you complete control over how you manage your
              favourite sites.
            </p>
            <a
              href=""
              className="text-softBlue underline underline-offset-4 text-center md:text-left hover:underline-offset-8 duration-300"
            >
              more info!
            </a>
          </div>
        </div>
        {/* tab 2 */}
        <div
          className={`items-center space-x-3 panel-1  flex-col md:flex-row space-y-12 md:space-y-0 ${
            pannel === "pannel2" ? "flex" : "hidden"
          }`}
        >
          <img src={Tab2} alt="" className="md:w-1/2" />
          <div className="flex flex-col space-y-3 md:w-1/2 md:pl-5">
            <h1 className="font-semibold text-3xl md:text-left text-center">
              Intelligent search
            </h1>
            <p className="text-grayishBlue md:text-left text-center">
              Our powerful search feature will help you find saved sites in no
              time al all. No need to travel through all of your bookmarks
            </p>
            <a
              href=""
              className="text-softBlue underline underline-offset-4 text-center md:text-left hover:underline-offset-8 duration-300"
            >
              more info!
            </a>
          </div>
        </div>
        {/* tab 3 */}
        <div
          className={`items-center space-x-3 panel-1 flex flex-col md:flex-row space-y-12 md:space-y-0 ${
            pannel === "pannel3" ? "flex" : "hidden"
          }`}
        >
          <img src={Tab3} alt="" className="md:w-1/2" />
          <div className="flex flex-col space-y-3 md:w-1/2 md:pl-5">
            <h1 className="font-semibold text-3xl md:text-left text-center">
              Share your bookmarks
            </h1>
            <p className="text-grayishBlue md:text-left text-center">
              Easily share your bookmarks and collections with others. Create a
              shareable link that you can send at the click of a button.
            </p>

            <a
              href=""
              className="text-softBlue underline underline-offset-4 text-center md:text-left hover:underline-offset-8 duration-300"
            >
              more info!
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
