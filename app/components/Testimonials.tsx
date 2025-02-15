import Image from 'next/image';
export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      text: "I saved over $10,000 by using EcoListing’s 1% commission model. The process was transparent and stress-free!",
      name: "John D.",
      location: "Austin, TX",
    },
    {
      id: 2,
      text: "I’ll never go back to traditional real estate agents after using EcoListing. The savings and service were incredible!",
      name: "Mark G.",
      location: "Phoenix, AZ",
    },
    {
      id: 3,
      text: "EcoListing is the future of real estate. It’s efficient, cost-effective, and highly innovative.",
      name: "Anna W.",
      location: "Houston, TX",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto max-w-screen-lg text-center">
        <h2 className="text-3xl text-gray-800">What our clients say</h2>
        <p className="text-gray-600 mt-4">
         {`EcoListing has helped homeowners across the country save money, sell faster, and enjoy a stress-free selling experience. Here's why people trust us with their homes.`}
        </p>

        {/* Testimonials Grid */}
        <div className="flex justify-between items-start mt-8 gap-6">
          <div className="w-1/5 text-primary text-[250px] opacity-50">
          <div className="translate-x-15 translate-y-[-15px]">
            <Image src="/images/lq.svg" alt='Left QUote' width={207} height={163} />
          </div>
          </div>
          <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-3 mt-8 gap-[30px]">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-[#0578C6] text-white p-3 rounded-lg shadow-md flex flex-col items-start h-full text-left"
            >
              <p className="italic mb-4 h-full">{testimonial.text}</p>
              <h4 className="text-lg font-bold">{testimonial.name}</h4>
              <p className="text-sm font-medium">{testimonial.location}</p>
            </div>
          ))}
          </div>

          <div className="w-1/5 text-primary text-[250px] opacity-50 text-right">
            <div className="translate-x-15 translate-y-[-15px]">
            <Image src="/images/rq.svg" alt='Right Quote' width={207} height={163} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
