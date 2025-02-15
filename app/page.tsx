/* eslint-disable @next/next/no-img-element */

import Banner from "./components/Banner";
import DisoverHomeValue from "./components/DisoverHomeValue";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OurSolutions from "./components/OurSoluctions";
import SellPropertySteps from "./components/SellPropertySteps";
import Testimonals from "./components/Testimonials";
import WhyEcolisting from "./components/WhyEcolisting";

export default function Home() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <SellPropertySteps></SellPropertySteps>
      <WhyEcolisting />
      <OurSolutions />
      <DisoverHomeValue />
      <Testimonals/>
      <Footer />
    </>
  );
}
