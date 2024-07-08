import EventsItem from "@/components/events-item";
import Eyebrow from "@/components/eyebrow";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons";

const RecentEvents = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-12 lg:py-28 md:py-24 py-12">
        <div className="grid xl:grid-cols-12 grid-cols-1 xl:gap-8 gap-10 items-center">
          <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10">
            <div className="flex flex-col gap-6">
              <Eyebrow label="RECENT EVENTS" />
              <h3 className="font-display md:text-display-xl text-display-md font-normal pb-4">
                {/* Some of <span className="italic">our crafts</span> made with
                love */}
                Parish Youth Ministry{" "}
                <span className="italic">keeping the faith</span> alive, unto
                God's Love
              </h3>
            </div>
            <EventsItem
              key={"2"}
              image={"/calahan_chapel.jpg"}
              title={"Lakbay Kabataan"}
              description={"To Balayong Chapel"}
            />
            <div className="xl:flex hidden items-start">
              <Button
                variant={"linkHover2"}
                className="text-[#50C878] font-bold"
              >
                Read more
                <span>
                  <ArrowRightIcon className="ml-1" />
                </span>
              </Button>{" "}
            </div>
          </div>
          <div className="xl:col-span-6 lg:col-span-8 flex flex-col xl:gap-24 md:gap-20 gap-10 xl:px-14">
            <EventsItem
              key={"2"}
              image={"/dalig_chapel.jpg"}
              title={"Lakbay Kabataan"}
              description={"To Dalig Chapel"}
            />
            <EventsItem
              key={"2"}
              image={"/balayong_chapel.jpg"}
              title={"Lakbay Kabataan"}
              description={"To Calahan Chapel"}
            />
          </div>
        </div>
        <div className="xl:hidden flex items-start">
          <Button variant={"linkHover2"} className="text-[#50C878] font-bold">
            Read more
            <span>
              <ArrowRightIcon className="ml-1" />
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default RecentEvents;
