import React from "react";
import Image from "next/image";

const skills = [
  {
    id: 1,
    name: "Reactjs",
    value: "/images/ReactJS.svg",
  },
  {
    id: 2,
    name: "NextJS",
    value: "/images/NextJS.svg",
  },
  {
    id: 3,
    name: "Tailwind CSS",
    value: "/images/TailwindCSS.svg",
  },
  {
    id: 4,
    name: "Typescript",
    value: "/images/Typescript.svg",
  },
  {
    id: 5,
    name: "Javascript",
    value: "/images/Javascript.svg",
  },
  {
    id: 6,
    name: "HTML",
    value: "/images/HTML5.svg",
  },
  {
    id: 7,
    name: "CSS",
    value: "/images/CSS3.svg",
  },
];

// export interface MyCustomCSS extends CSSProperties {
//   "--value": number;
// }

const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full items-center px-4 py-16 md:px-8 2xl:px-16"
    >
      <div className="flex flex-col gap-40">
        <div className="mx-auto grid h-full w-full grid-cols-1 items-center justify-center gap-16 p-3 lg:grid-cols-2">
          <div className="relative flex h-full w-full items-center justify-center">
            <Image
              src="/images/img1.png"
              alt="profile"
              draggable={false}
              className="rounded-full overflow-hidden border"
              width={1024}
              height={1024}
            />
          </div>
          <div className="text-justify">
            <h1 className="bg-gradient-to-r from-green-400 to-lime-800 bg-clip-text text-5xl font-extrabold uppercase tracking-widest text-transparent md:text-6xl">
              About
            </h1>
            <h2 className="py-4 text-2xl font-bold">Who I Am</h2>
            <div className="flex flex-col gap-4 py-2 text-lg">
              <p>
                As a dedicated Frontend Developer, I am deeply passionate and
                enthusiastic about crafting exceptional web applications. With a
                solid background in web development spanning over two years, I
                have successfully worked on a range of real-world projects,
                showcasing my proficiency in HTML, CSS, JavaScript, ReactJS,
                NextJS, TypeScript, Redux, Web3.js, React Context API.
              </p>
              <p>
                My educational foundation includes a Masters of Computer
                Applications, providing me with a well-rounded understanding of
                the field. Additionally, I have gained invaluable experience as
                a React Developer in the dynamic realm of Blockchain Technology.
                What sets me apart is my innate ability to quickly grasp new
                concepts, coupled with a keen problem-solving mindset. My focus
                is firmly fixed on achieving results, and I approach challenges
                with an unwavering determination to excel. My thirst for
                knowledge drives me to continually learn and adapt to emerging
                technologies, ensuring that my skillset remains up-to-date and
                relevant.{" "}
              </p>
              <p>
                I am excited about the opportunity to contribute my expertise
                and work collaboratively, always striving to exceed expectations
                and create innovative solutions. Let{`'`}s embark on this
                journey together and make remarkable strides in the world of web
                development! 🚀
              </p>
            </div>
            <a
              download
              href="/files/ROHIT_BHARDWAJ_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-8 w-fit rounded-md bg-gradient-to-r from-green-400 to-lime-800 px-4 py-2 font-medium text-white duration-300 ease-in hover:scale-105">
                Download Resume
              </button>
            </a>
          </div>
        </div>
        <div className="text-justify">
          <h1 className="mb-20 bg-gradient-to-r from-green-400 to-lime-800 bg-clip-text text-5xl font-extrabold uppercase tracking-widest text-transparent md:text-6xl">
            Skills
          </h1>
          <div className="flex flex-wrap items-center justify-around gap-16 py-2 text-lg">
            {skills.map((item) => (
              <div
                className="flex flex-col items-center justify-center gap-8 text-center"
                key={item.id}
              >
                <p className="whitespace-nowrap text-2xl font-medium">
                  {item.name}
                </p>
                {/* <div className="radial-progress text-lime-600" style={{"--value": item.value} as MyCustomCSS}>{item.value}%</div> */}
                <div
                  className={`relative bottom-0 top-0 h-20 w-20 ${
                    item.name === "NextJS" && "rounded-full bg-white"
                  }`}
                >
                  <Image
                    src={item.value}
                    alt={item.name}
                    fill
                    className="z-10"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
