import Image from 'next/image';
import SocialIcons from './SocialIcons';
export default function Footer() {
  return (
    <footer className="bg-[#0d1b2a] text-white py-12">
      <div className="container mx-auto max-w-screen-lg">
        {/* Newsletter Section */}
        <div className="grid md:grid-cols-2 grid-cols-1 items-start gap-[30px]">
          <div>
            <h3 className="text-3xl uppercase">News letter</h3>
            <div className="flex mt-4">
              <input
                type="email"
                placeholder="Enter Your Email Here"
                className="p-3 rounded-l-lg w-full text-gray-800 focus:outline-none"
              />
              <button className="bg-primary px-6 py-3 rounded-r-lg hover:bg-primary-dark">
                Subscribe
              </button>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="text-right">
            <h3 className="text-3xl uppercase">Follow Us</h3>
            <div className="flex justify-end mt-4 space-x-4 text-2xl">
              <SocialIcons/>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="border-t border-gray-700 my-8" />

        {/* Logo and Quick Links */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-6">
          {/* Logo Section */}
          <div className="text-left w-full md:w-3/4">
             <Image
                    src="/images/logo-footer.svg"
                    alt="Eco Listing Logo"
                    width={200}
                    height={100}
                  />
            <p className="text-gray-400 mt-4">
              EcoListing revolutionizes real estate by offering low commission sales, advanced
              technology, and personalized support for a seamless property-selling experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-left w-full md:w-1/4">
            <h3 className="text-xl font-bold uppercase">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2 mt-4 text-gray-400">
              <a href="#" className="hover:text-white">
                Home
              </a>
              <a href="#" className="hover:text-white">
                Sold Properties
              </a>
              <a href="#" className="hover:text-white">
                About us
              </a>
              <a href="#" className="hover:text-white">
                Enquiry
              </a>
              <a href="#" className="hover:text-white">
                Sellers Tool
              </a>
              <a href="#" className="hover:text-white">
                News & Articles
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
