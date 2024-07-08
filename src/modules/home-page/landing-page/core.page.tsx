import BoxItem from "@/components/box-item";
import Eyebrow from "@/components/eyebrow";

const CoreGroup = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col justify-center items-center md:gap-20 gap-10">
        <div className="grid lg:grid-cols-12 grid-cols-1 gap-8">
          <div className="lg:col-span-8">
            <Eyebrow label="OUR CORE GROUP" />
            <h2 className="font-display md:text-display-xl text-display-md pt-5">
              We{" "}
              <span className="bg-[#1B4678]/95 p-1 text-white">introduce</span>{" "}
              the <span className="italic">Core Group Members</span>, the heart
              of our Ministry in <span className="underline">DSPOLHR</span>:
            </h2>
          </div>
        </div>
        <div className="flex lg:flex-row flex-col gap-2">
          <BoxItem
            icon={"/jeric_1.png"}
            title="Jeric Polo"
            description="Coordinator"
          />
          <BoxItem
            icon={"/lambert_1.png"}
            title="John Lambert Asis"
            description="Assistant Coordinator"
          />

          <BoxItem
            icon={"/angel_1.png"}
            title="Coleen Villafuerta"
            description="Parish Youth Leader"
          />

          <BoxItem
            icon={"/clarinette_2.png"}
            title="Clarinette Gatchalian"
            description="Youth Vocation Promoter"
          />
        </div>

        <div className="flex lg:flex-row flex-col gap-8"></div>
      </div>
    </div>
  );
};
export default CoreGroup;
