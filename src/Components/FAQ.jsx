export default function FAQ() {
  return (
    <section id="faq" className=" my-20">
      <div className="container mx-auto flex flex-col space-y-7 items-center justify-center">
        <h1 className="text-2xl font-semibold">Frequently asked questions</h1>
        <p className="text-grayishBlue max-w-md text-center">
          Here are some of our FAQs. If you have any other questions you'd like
          answered please feel free to email us.
        </p>
        {/* Accordians */}
        <div className="mb-20 max-w-lg mx-auto">
          {/* tab 1 */}
          <div className="group border-b-2" tabIndex={1}>
            <div className=" cursor-pointer flex justify-between items-center space-x-12 m-2 ">
              <p className="text-grayishBlue group-hover:text-softRed ease-in">
                What is Bookmark?
              </p>
              <a href="" className="group-focus:-rotate-180"></a>
              <div className="group-focus:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:-rotate-180 text-grayishBlue group-hover:text-softRed transition"
                  width="18"
                  height="12"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    d="M1 1l8 8 8-8"
                  />
                </svg>
              </div>
            </div>
            <p className="max-h-0 overflow-hidden group-hover:max-h-screen transition m-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              dicta veritatis accusantium quas, ab laborum iusto. Alias
              dignissimos architecto ex.
            </p>
          </div>
          {/* tab 2 */}
          <div className="group border-b-2" tabIndex={2}>
            <div className=" cursor-pointer flex justify-between items-center space-x-12 m-2">
              <p className="text-grayishBlue group-hover:text-softRed ease-in">
                How can i request a new browser?
              </p>
              <a href="" className="group-focus:-rotate-180"></a>
              <div className="group-focus:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:-rotate-180 text-grayishBlue group-hover:text-softRed transition"
                  width="18"
                  height="12"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    d="M1 1l8 8 8-8"
                  />
                </svg>
              </div>
            </div>
            <p className="max-h-0 overflow-hidden group-hover:max-h-screen transition m-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              dicta veritatis accusantium quas, ab laborum iusto. Alias
              dignissimos architecto ex.
            </p>
          </div>
          {/* tab 3 */}
          <div className="group border-b-2" tabIndex={3}>
            <div className=" cursor-pointer flex justify-between items-center space-x-12 m-2">
              <p className="text-grayishBlue group-hover:text-softRed ease-in">
                Is there a mobile app?
              </p>
              <a href="" className="group-focus:-rotate-180"></a>
              <div className="group-focus:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:-rotate-180 text-grayishBlue group-hover:text-softRed transition"
                  width="18"
                  height="12"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    d="M1 1l8 8 8-8"
                  />
                </svg>
              </div>
            </div>
            <p className="max-h-0 overflow-hidden group-hover:max-h-screen transition m-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              dicta veritatis accusantium quas, ab laborum iusto. Alias
              dignissimos architecto ex.
            </p>
          </div>
          {/* tab 4 */}
          <div className="group border-b-2" tabIndex={4}>
            <div className=" cursor-pointer flex justify-between items-center space-x-12 m-2">
              <p className="text-grayishBlue group-hover:text-softRed ease-in">
                What about other chromium browsers?
              </p>
              <a href="" className="group-focus:-rotate-180"></a>
              <div className="group-focus:-rotate-180">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="group-hover:-rotate-180 text-grayishBlue group-hover:text-softRed transition"
                  width="18"
                  height="12"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-width="3"
                    d="M1 1l8 8 8-8"
                  />
                </svg>
              </div>
            </div>
            <p className="max-h-0 overflow-hidden group-hover:max-h-screen transition m-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
              dicta veritatis accusantium quas, ab laborum iusto. Alias
              dignissimos architecto ex.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
