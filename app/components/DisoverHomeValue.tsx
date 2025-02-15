export default function EvaluationSection() {
  return (
    <section className="relative bg-cover bg-center discover-section min-h-[600px]">
      <div className="absolute bottom-0 w-full h-1/2 bg-[#00151ECC] bg-opacity-50 flex items-center justify-center text-white">
      <div className="relative container mx-auto max-w-screen-lg pt-[4rem] pb-[4vh] text-center text-white">
        <h2 className="text-4xl mb-4">{`Discover Your Home's True Value`}</h2>
        <p className="mb-8 text-lg">
          Our experts will send custom CMA report of your property using the latest data and deliver it to you within 24 hours!
        </p>

        <form className="flex flex-col md:flex-row items-center justify-center gap-4">
          <input
            type="text"
            placeholder="Phone"
            className="w-full md:w-1/3 p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-bg-primary"
          />

          <input
            type="email"
            placeholder="Email Address"
            className="w-full md:w-1/3 p-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-bg-primary"
          />

          <button
            type="submit"
            className="w-full md:w-auto bg-primary px-6 py-3 rounded-lg text-white font-bold hover:bg-primary-dark transition"
          >
            Get Free Evaluation
          </button>
        </form>
      </div>
       </div>
    </section>
  );
}
