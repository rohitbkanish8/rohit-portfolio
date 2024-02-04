import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleOutSideClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        // alert("Outside Clicked.");
        // console.log("Outside Clicked. ");
        setNav(false)
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav className="fixed z-50 h-20 w-full bg-white/30 shadow-xl backdrop-blur-lg">
      <div className="flex h-full w-full items-center justify-between px-4 md:px-8 2xl:px-16">
        <div className="text-3xl font-extrabold">
          <h1>Rohit Bhardwaj</h1>
        </div>
        <div>
          <ul className="hidden items-center md:flex">
            <Link href="/">
              <li className="ml-10 border-black text-sm font-medium uppercase hover:border-b dark:border-white">
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li className="ml-10 border-black text-sm font-medium uppercase hover:border-b dark:border-white">
                About
              </li>
            </Link>

            <Link href="/#portfolio">
              <li className="ml-10 border-black text-sm font-medium uppercase hover:border-b dark:border-white">
                Portfolio
              </li>
            </Link>
            <Link
              href="/files/ROHIT_BHARDWAJ_CV.pdf"
              target={"_blank"}
              rel={"noreferrer"}
            >
              <li className="ml-10 border-black text-sm font-medium uppercase hover:border-b dark:border-white">
                Resume
              </li>
            </Link>
            <Link href="/#contact">
              <li className="ml-10 border-black text-sm font-medium uppercase hover:border-b dark:border-white">
                Contact
              </li>
            </Link>
            <button
              onClick={() =>
                theme == "dark" ? setTheme("light") : setTheme("dark")
              }
              className="ml-10 cursor-pointer rounded-full border-2 border-white/5 p-2 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110 dark:bg-white/10 dark:shadow-gray-400/40"
            >
              {theme === "dark" ? <FaSun /> : <FaMoon />}
            </button>
          </ul>
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "fixed left-0 top-0 h-screen w-full bg-black/70 md:hidden transition-all duration-500" : ""
        }
      >
        <div
          className={
            nav
              ? "fixed left-0 top-0 h-screen w-[75%] bg-slate-100 p-5 sm:p-10 duration-500 ease-in dark:bg-black sm:w-[60%] md:w-[45%]"
              : "fixed left-[-100%] top-0 p-10 duration-500 ease-in"
          }
          ref={ref}
        >
          <div>
            <div className="flex w-full items-center justify-end">
              <div
                onClick={handleNav}
                className="cursor-pointer rounded-full border-2 border-white/5 p-3 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110 dark:bg-white/10 dark:shadow-gray-400/40"
              >
                <AiOutlineClose size={10} />
              </div>
            </div>
          </div>
          <div className="flex flex-col py-4">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Home
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  About
                </li>
              </Link>
              <Link href="/#portfolio">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Portfolio
                </li>
              </Link>
              <Link
                href="/files/ROHIT_BHARDWAJ_CV.pdf"
                target={"_blank"}
                rel={"noreferrer"}
              >
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Resume
                </li>{" "}
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  Contact
                </li>
              </Link>
              <button
                onClick={() =>
                  theme == "dark" ? setTheme("light") : setTheme("dark")
                }
                className="cursor-pointer rounded-full border-2 border-white/5 p-5 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110 dark:bg-white/10 dark:shadow-gray-400/40"
              >
                {theme === "dark" ? <FaSun /> : <FaMoon />}
              </button>
            </ul>
            <div className="pt-40">
              <p className="font-bold-200 bg-gradient-to-r from-purple-400 to-lime-800 bg-clip-text uppercase tracking-widest text-transparent">
                Let&#39;s Connect
              </p>
              <div className="my-5 flex w-full items-center justify-start gap-8 sm:w-[80%]">
                <a
                  href="https://github.com/rohitbkanish8"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="cursor-pointer rounded-full border-2 border-white/5 p-5 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110 dark:bg-white/10 dark:shadow-gray-400/40">
                    <FaGithub />
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/rohit-bhardwaj-238857159"
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="cursor-pointer rounded-full border-2 border-white/5 p-5 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110 dark:bg-white/10 dark:shadow-gray-400/40">
                    <FaLinkedinIn />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => {
                      setNav(!nav);
                      window.location.href = "mailto:rohitbkanish8@gmail.com";
                    }}
                    className="cursor-pointer rounded-full border-2 border-white/5 p-5 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110 dark:bg-white/10 dark:shadow-gray-400/40"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
