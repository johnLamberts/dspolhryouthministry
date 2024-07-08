import Header from "@/components/header";
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div className="bg-[#F8F7EB]/85">
      {/* Header */}

      <Header />

      <Outlet />

      {/* <Header />

      <About />

      <hr className="text-neutral-300" />

      <Services />

      <Footer /> */}
    </div>
  );
};
export default HomeLayout;
