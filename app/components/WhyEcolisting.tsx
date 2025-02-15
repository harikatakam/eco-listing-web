import Image from "next/image";
export default function WhyChooseEcoListing() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto max-w-screen-lg text-center">
        <h2 className="text-4xl text-gray-900 mb-4">WHY CHOOSE ECOLISTING?</h2>
        <p className="text-2xl text-gray-700 font-semibold mb-4">
          Sell Smarter, Not Harder.
        </p>
        <p className="text-gray-600 mb-12">
          EcoListing combines cutting-edge technology with expert guidance to
          maximize your profit and minimize your hassle.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="col-span-2 grid grid-cols-1 gap-3 md:grid-cols-2">
            <div className="relative flex flex-col items-left text-left p-6 border-r-2 border-b-2 border-primary border-dashed">
            <div className="absolute w-14 h-14 bg-white right-[-30px] bottom-[-30px]"></div>
              <div className="mb-4 flex justify-center">
                <Image
                  src="/images/commission.svg"
                  alt="Eco Listing Logo"
                  width={80}
                  height={72}
                />
              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Only 1% commission
              </h4>
              <p className="text-gray-600">
                This is a key selling point and should be prominently displayed.
                It directly addresses cost-conscious users, which is a critical
                factor for decision-making.
              </p>
            </div>

            <div className="flex flex-col items-left text-left p-6 border-b-2 border-primary border-dashed">
              <div className="mb-4 flex justify-center">
              <Image
                  src="/images/marketing.svg"
                  alt="Eco Listing Logo"
                  width={80}
                  height={72}
                />              </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Best property Marketing
              </h4>
              <p className="text-gray-600">
                Highlights the tools and strategies used, appealing to users
                looking for professionalism and maximum visibility.
              </p>
            </div>

            <div className="flex flex-col items-left text-left p-6 border-r-2 border-primary border-dashed ">
              <div className="mb-4 flex justify-center">
              <Image
                  src="/images/negotiations.svg"
                  alt="Eco Listing Logo"
                  width={80}
                  height={72}
                />               </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                Data Backed Negotiations
              </h4>
              <p className="text-gray-600">
                Builds trust by showing a systematic and professional approach
                to negotiations.
              </p>
            </div>

            <div className="flex flex-col items-left text-left p-6 ">
              <div className="mb-4 flex justify-center">
              <Image
                  src="/images/vr-view.svg"
                  alt="Eco Listing Logo"
                  width={80}
                  height={72}
                />               </div>
              <h4 className="text-lg font-bold text-gray-800 mb-2">
                24x7 VR View
              </h4>
              <p className="text-gray-600">
                Provides a convenience-focused benefit that aligns with the
                needs of modern buyers.
              </p>
            </div>
          </div>

          <div className="bg-black text-white rounded-lg shadow-md p-6 flex flex-col justify-start h-full text-left">
            <h3 className="text-xl mb-4">You could save</h3>
            <h2 className="text-4xl text-white mb-4">$3,900</h2>
            <div className="mb-4">
              <div className="text-sm flex justify-between text-gray-400">
                <span>Property selling price</span>
                <span>$300,000</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
                <div
                  className="h-full bg-primary"
                  style={{ width: "40%" }}
                ></div>
              </div>
            </div>
            <button className="bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary-dark">
              Estimate Your Savings
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
