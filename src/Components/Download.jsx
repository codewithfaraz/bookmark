import Chrome from "../images/logo-chrome.svg";
import Firefox from "../images/logo-firefox.svg";
import Opera from "../images/logo-opera.svg";
export default function Download() {
  return (
    <section id="download">
      <div className="space-y-4 mx-auto container py-7 my-14 flex flex-col items-center justify-center">
        <h2 className="font-semibold text-3xl md:text-4xl">Download</h2>
        <p className="text-grayishBlue max-w-sm text-center md:max-w-lg ">
          We've got more browsers in the pipeline. Please do let us know if
          you've got a favourite browser you'd like us to prioritize.
        </p>
        <div className="flex flex-col md:flex-row space-x-3">
          {/* browser 1 */}
          <div className="flex flex-col items-center shadow-lg p-6 rounded-lg space-y-3 md:w-1/3">
            <img src={Chrome} alt="" />
            <h1 className="text-xl font-semibold">Add to chrome</h1>
            <p className="text-grayishBlue">Minimum Version 6.2</p>
            <div className="bg-dots bg-repeat-x capitalize pt-6 px-6">
              <a
                href=""
                className="w-full text-white bg-softBlue py-3 px-6 rounded-lg hover:text-softBlue hover:bg-white border-2 border-softBlue duration-200"
              >
                Add & Install Extension
              </a>
            </div>
          </div>
          {/* browser 2 */}
          <div className="flex flex-col items-center shadow-lg p-6 rounded-lg space-y-3 md:w-1/3">
            <img src={Firefox} alt="" />
            <h1 className="text-xl font-semibold">Add to firefox</h1>
            <p className="text-grayishBlue">Minimum Version 6.2</p>
            <div className="bg-dots bg-repeat-x capitalize pt-6 px-6">
              <a
                href=""
                className="w-full text-white bg-softBlue py-3 px-6 rounded-lg hover:text-softBlue hover:bg-white border-2 border-softBlue duration-200"
              >
                Add & Install Extension
              </a>
            </div>
          </div>
          {/* browser 3 */}
          <div className="flex flex-col items-center shadow-lg p-6 rounded-lg space-y-3 md:w-1/3">
            <img src={Opera} alt="" />
            <h1 className="text-xl font-semibold">Add to opera</h1>
            <p className="text-grayishBlue">Minimum Version 6.2</p>
            <div className="bg-dots bg-repeat-x capitalize pt-6 px-6">
              <a
                href=""
                className="w-full text-white bg-softBlue py-3 px-6 rounded-lg hover:text-softBlue hover:bg-white border-2 border-softBlue duration-200"
              >
                Add & Install Extension
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
