import About from "@/modules/home-page/landing-page/about.page";
import CoreGroup from "@/modules/home-page/landing-page/core.page";
import Hero from "@/modules/home-page/landing-page/hero.page";
import RecentEvents from "@/modules/home-page/landing-page/recent-events.page";
import YouthPicture from "@/modules/home-page/landing-page/youth-picture.page";

const LandingLayout = () => {
  return (
    <>
      <Hero />

      <YouthPicture />

      <About />

      <CoreGroup />

      <RecentEvents />
    </>
  );
};
export default LandingLayout;
