export default function Banner() {
  return (
    <div className="container mx-auto pt-2 px-6">
      <section className="relative hero-section bg-cover bg-center rounded-lg shadow-md">
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
        <div className="relative flex flex-col items-end text-center py-12 pr-12 shadow-md rounded-lg z-99">
          <div className="max-w-lg">
           <div className="bg-gray-100 px-6 py-4 shadow-md text-center mb-2">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                EASY VIRTUAL HOME SHOWINGS
              </h2>
              <p className="text-gray-600">
                Your Property, Anywhere, Anytime
              </p>
            </div>
            <div className="flex justify-center gap-4">
              <button className="bg-white border-1 border-primary text-gray-800 border rounded-md px-6 py-2 font-medium hover:bg-gray-200">
                How we sell
              </button>
              <button className="bg-primary text-white rounded-md px-6 py-2 font-medium hover:bg-primary-dark">
                Talk to Our Expert
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}