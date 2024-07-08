import Eyebrow from "@/components/eyebrow";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const About = () => {
  return (
    <div>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-12 grid-cols-1 lg:gap-8 gap-20 lg:py-32 py-12 items-center">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <Eyebrow label="ABOUT US" />
            <h2 className="font-display md:text-display-xl text-display-md font-normal pb-4">
              Empowering youth through <span className="italic ">faith</span>,{" "}
              in vibrant, purposeful collective service.
            </h2>
            <p className="md:text-body-lg text-body-md font-light text-neutral-700 text-justify">
              Embark{" "}
              <span className="italic">
                Diocesan Shrine and Parish of Our Lady of the Holy Rosary Youth
                Ministry
              </span>{" "}
              on gathering of young hearts and exciting adventure together
            </p>
            <p className="md:text-body-lg text-body-md font-light text-neutral-700 text-justify">
              Through dynamic events, meaningful discussions, and heartfelt
              connections, we cultivate an environment where every individual is
              empowered to explore their faith, embrace their unique gifts, and
              make a difference in the world. Join us as we embark on this
              exciting adventure together, igniting our youthful spirit and
              embracing the endless possibilities of faith.
            </p>

            <div className="flex justify-left items-left">
              <Button
                variant={"linkHover2"}
                className="text-[#50C878] font-bold"
              >
                Read more
                <span>
                  <ArrowRightIcon className="ml-1" />
                </span>
              </Button>
            </div>
          </div>
          <div className="lg:col-span-6 flex flex-col gap-8 relative">
            <img src={"/about-image.png"} alt="Award Badge" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
