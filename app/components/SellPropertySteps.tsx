const steps = [
  {
    id: 1,
    title: "Generate 3D Model",
    description:
      "We generate 3D model of your property, enhanced with virtual staging and AI renovation, to offer 24/7 virtual open house to attract more buyers.",
    image: "/images/generate-3d-model.png",
    textColor: "text-gold"
  },
  {
    id: 2,
    title: "Agent Virtual Showing",
    description:
      "Our agents connect with buyers through live 3D calls for virtual showing of your property, ensuring maximum reach and narrowing in-person visit only for serious buyers.",
    image: "/images/virtual-showing.png",
    textColor: "text-blue"
  },
  {
    id: 3,
    title: "In-Person Visit",
    description:
      "Only serious buyers visit your property to make the final decision, saving you and your time from non-serious buyers.",
    image: "/images/in-person-visit.png",
    textColor: "text-teal"
  },
  {
    id: 4,
    title: "Negotiation and Sold",
    description:
      "We work with trusted legal partners for successful closing, ensuring you peace of mind.",
    image: "/images/negotiation-sold.png",
    textColor: "text-pink"
  }
];

const SellingSteps = () => {
  return (
    <div className="bg-[#f3f8fa] py-10">
      <div className="text-center mb-10">
        <h2 className="text-xl text-gray-600">SELLING MADE SIMPLE</h2>
        <h1 className="text-3xl font-semibold text-gray-800">4 Steps For Selling Your Property</h1>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 px-4 md:px-16">
          {steps.map((step) => (
            <div key={step.id} className="text-left relative">
            <div className='relative'>
                <img
                  src={step.image}
                  alt={step.title}
                  className="rounded-lg shadow-md w-[70%]"
                />
                <span
                  className={`absolute bottom-[-3rem] right-[1.8rem] text-[6rem] opacity-50 ${step.textColor}`}
                >
                  {step.id}
                </span>
              </div>
              <h3 className="text-lg font-semibold mt-4 text-gray-700">{step.title}</h3>
              <p className="text-sm text-gray-500 mt-2">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SellingSteps;
