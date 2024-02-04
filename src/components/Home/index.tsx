import Image from "next/image";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import TypewriterComponent from "typewriter-effect";
import GreetingLottie from "../DisplayLottie";

const Home = () => {
  return (
    <section
      className="flex min-h-screen w-full items-center justify-center px-4 pt-32 md:px-8 2xl:px-16"
      id="#home"
    >
      <div className="mx-auto grid h-full w-full grid-cols-1 items-center justify-center gap-16 p-3 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h1 className="bg-gradient-to-r from-green-400 to-lime-800 bg-clip-text text-5xl font-extrabold text-transparent md:text-6xl">
            Hi, I am Rohit Bhardwaj
          </h1>
          <h2 className="py-3 text-3xl font-bold uppercase">
            <TypewriterComponent
              options={{
                autoStart: true,
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("A Frontend Developer")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("I love to code.")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("I love to learn new technologies.")

                  .start();
              }}
            />
          </h2>
          <p className="text-lg">
            I am a proficient Senior Frontend Developer possessing substantial
            expertise in ReactJS, NextJS, along with a strong command of Vanilla
            JavaScript, TypeScript, HTML, and CSS. My dedication lies in
            consistently delivering top-notch code while remaining well-informed
            about the most recent advancements in front-end development
            practices.
          </p>
          <div className="m-auto mt-16 flex items-center justify-between gap-8">
            <a
              href="https://github.com/rohitbkanish8"
              target={"_blank"}
              className="cursor-pointer rounded-full border-2 border-white/5 p-5 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110 dark:bg-white/10 dark:shadow-gray-400/40"
              rel={"noreferrer"}
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/rohit-bhardwaj-238857159"
              target={"_blank"}
              className="cursor-pointer rounded-full border-2 border-white/5 p-5 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110 dark:bg-white/10 dark:shadow-gray-400/40"
              rel={"noreferrer"}
            >
              <FaLinkedinIn />
            </a>
            <div
              onClick={() =>
                (window.location.href = "mailto:rohitbkanish8@gmail.com")
              }
              className="cursor-pointer rounded-full border-2 border-white/5 p-5 shadow-lg shadow-gray-400 duration-300 ease-in hover:scale-110 dark:bg-white/10 dark:shadow-gray-400/40"
            >
              <AiOutlineMail />
            </div>
          </div>
        </div>
        <div className="relative flex h-full w-full items-center justify-center">
          {/* <Image
            src="/images/img1.png"
            alt="profile"
            draggable={false}
            width={1024}
            height={1024}
          /> */}
          <GreetingLottie animationPath="/lottie/coding.json" />
        </div>
      </div>
    </section>
  );
};

export default Home;
