import ServiceSlider from "../../components/ServiceSlider";
import Buld from "../../components/Bulb";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <h2 className="h2 xl:mt-8">
              My services <span className="text-accent">.</span>
            </h2>
            <p className="mb-4 max-w-[400px] mx-auto lg:mx-0">
              LoremSunt est cillum dolore veniam minim cupidatat eiusmod.
              LoremSunt est cillum dolore veniam minim cupidatat eiusmod.
            </p>
          </div>
          <ServiceSlider />
        </div>
      </div>
      <Buld />
    </div>
  );
};

export default Services;
