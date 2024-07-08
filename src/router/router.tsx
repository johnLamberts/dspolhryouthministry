import LandingLayout from "@/layouts/landing.layout";
import GeneralError from "@/modules/error-pages/general-error.page";
import NotFoundError from "@/modules/error-pages/not-found.page";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    lazy: async () => {
      const AppShell = await import("@/layouts/home.layout");
      return { Component: AppShell.default };
    },
    errorElement: <GeneralError />,
    children: [
      {
        index: true,
        lazy: async () => {
          const AppShell = await import("@/layouts/landing.layout");
          return { Component: AppShell.default };
        },
      },
      {
        path: "/home",
        Component: LandingLayout,
      },
      {
        lazy: async () => {
          const AppShell = await import(
            "@/modules/home-page/more-about/about-more.page"
          );
          return { Component: AppShell.default };
        },
        path: "/about-more",
        errorElement: <GeneralError />,
      },
    ],
    //     errorElement: <GeneralError />,
  },

  { path: "/500", Component: GeneralError },
  { path: "*", Component: NotFoundError },
]);

export default router;
