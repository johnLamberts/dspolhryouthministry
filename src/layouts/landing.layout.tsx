import About from "@/modules/home-page/landing-page/about.page";
import CoreGroup from "@/modules/home-page/landing-page/core.page";
import Hero from "@/modules/home-page/landing-page/hero.page";
import YouthPicture from "@/modules/home-page/landing-page/youth-picture.page";

const LandingLayout = () => {
  return (
    <>
      <Hero />

      <YouthPicture />

      <About />

      <CoreGroup />
    </>
  );
};
export default LandingLayout;
