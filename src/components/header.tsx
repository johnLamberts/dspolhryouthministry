import { useRef, useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = () => {
  const ref = useRef<HTMLElement>(null);

  const [isIntersecting, setIsIntersecting] = useState<boolean>(true);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(([entry]) =>
      setIsIntersecting(entry.isIntersecting)
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  const { pathname } = useLocation();
  return (
    <header ref={ref}>
      <div
        className={`fixed inset-x-0 top-0 z-50 backdrop-blur  duration-200 border-b  ${
          isIntersecting
            ? "bg-zinc-900/0 border-transparent"
            : "bg-zinc-900/500  border-zinc-800 "
        }`}
      >
        <div
          className={`container flex flex-row-reverse items-center justify-between mx-auto duration-200 ${
            isIntersecting ? "p-2" : "p-4"
          }`}
        >
          <div className="hidden lg:flex justify-between gap-8">
            <Link
              to="/home"
              className={`duration-200 hover:text-neutral-900	 ${
                pathname === "/home" ? "text-neutral-900	" : "text-slate-950	"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about-more"
              className={`duration-200 hover:text-neutral-900	 ${
                pathname === "/projects" ? "text-neutral-900	" : "text-slate-950	"
              }`}
            >
              About Youth
            </Link>
            <Link
              to="/about-more"
              className={`duration-200 hover:text-neutral-900	 ${
                pathname === "/about" ? "text-neutral-900	" : "text-slate-950	"
              }`}
            >
              Core and Staff
            </Link>
            <Link
              to="/contact"
              className={`duration-200 hover:text-neutral-900	 ${
                pathname === "/contact" ? "text-neutral-900	" : "text-slate-950	"
              }`}
            >
              Events
            </Link>
          </div>

          <div className="lg:hidden flex">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant={"outline"}>
                  <HamburgerMenuIcon />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col items-center justify-between gap-8">
                  <Link
                    to="/about-more"
                    className={`duration-200 hover:text-neutral-900	 ${
                      pathname === "/about-more"
                        ? "text-neutral-900	"
                        : "text-slate-950	"
                    }`}
                  >
                    About
                  </Link>
                  <Link
                    to="/home"
                    className={`duration-200 hover:text-neutral-900	 ${
                      pathname === "/home"
                        ? "text-neutral-900	"
                        : "text-slate-950	"
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    to="/about"
                    className={`duration-200 hover:text-neutral-900	 ${
                      pathname === "/about"
                        ? "text-neutral-900	"
                        : "text-slate-950	"
                    }`}
                  >
                    Services
                  </Link>
                  <Link
                    to="/contact"
                    className={`duration-200 hover:text-neutral-900	 ${
                      pathname === "/contact"
                        ? "text-neutral-900	"
                        : "text-slate-950	"
                    }`}
                  >
                    Events
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <Link to="/" className="flex items-center justify-center">
            <img src="/pym-logo.png" className="h-16" />
            <img src="/DSPOLHR.png" className="h-16" />

            {/* <p className="md:text-body-xl text-body-lg font-light text-neutral-700">
              DSPOLHRYM
            </p> */}
          </Link>
        </div>
      </div>
    </header>
  );
};
export default Header;
