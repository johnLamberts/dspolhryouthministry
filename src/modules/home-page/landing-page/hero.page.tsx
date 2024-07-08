import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div>
      <div className="container mx-auto ">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="h-screen z-auto	 flex flex-col items-center justify-center xl:px-14 items-center text-center gap-6 py-20"
        >
          <h1 className="font-display md:text-display-2xl text-display-lg mix-blend-darken">
            Enriching Youthful Faith:{" "}
            <span className="bg-[#1B4678]/95 p-1 text-white">Nurturing </span>{" "}
            and{" "}
            <span className="bg-[#1B4678]/95 p-1 text-white">Empowering </span>
            our <span className="italic">Parish Youth Ministry!</span>
          </h1>
          {/* <p className="col-span-8 md:text-body-xl text-body-lg font-light text-neutral-700 max-w-[800px]">
            Exploring{" "}
            <span className="italic">
              University of Rizal System - Morong Campus
            </span>{" "}
            on unveiling key events and resources in computer engineering. From
            launches to acquisitions, delve into the innovation and competition
            shaping the industry's landscape for engineers and professionals!{" "}
          </p> */}
        </motion.div>
        {/* <img
          src={"/background_1.png"}
          alt="Get in touch"
          className="absolute top-0 right-0  mix-blend-multiply	z-0 opacity-30"
        /> */}

        <img
          src={"/cameroon.png"}
          alt="Get in touch"
          className="absolute top-24 right-0 mix-blend-multiply	z-0 opacity-30"
        />

        <img
          src={"/DAMBANA_DESKTOP.png"}
          alt="Get in touch"
          className="absolute left-0 top-0 lg:h-screen md:h-screen mix-blend-multiply	z-0 opacity-30"
        />
      </div>
    </div>
  );
};
export default Hero;
