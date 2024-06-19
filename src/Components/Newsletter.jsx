export default function Newsletter() {
  return (
    <section id="newsletter" className="bg-softBlue p-24">
      <div className="container mx-auto flex flex-col items-center space-y-7">
        <p className="text-white uppercase tracking-wide text-xl">
          35,000+ Already joined
        </p>
        <h1 className="text-white text-4xl max-w-sm text-center md:max-w-md">
          Stay up-to-date with what we are doing
        </h1>
        <div className="flex space-x-3">
          <input
            type="text"
            className="rounded-lg h-12 w-64 px-3 focus:outline-none"
            placeholder="Email"
          />
          <button className="md:py-2 w-full md:w-34 md:px-1 rounded-lg bg-softRed text-white border-2 border-softRed hover:bg-white hover:text-softRed duration-300">
            Contact us
          </button>
        </div>
      </div>
    </section>
  );
}
