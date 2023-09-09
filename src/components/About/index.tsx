import React from "react";

const skills = [
  {
    id: 1,
    name: "Reactjs",
    value: 90,
  },
  {
    id: 2,
    name: "NextJS",
    value: 70,
  },
  {
    id: 3,
    name: "Tailwind CSS",
    value: 90,
  },
  {
    id: 4,
    name: "Typescript",
    value: 75,
  },
  {
    id: 5,
    name: "Javascript",
    value: 85,
  },
  {
    id: 6,
    name: "HTML",
    value: 95,
  },
  {
    id: 7,
    name: "CSS",
    value: 80,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="flex min-h-screen w-full items-center px-4 md:px-8 py-16 2xl:px-16"
    >
      <div className="flex flex-col gap-8">
        <div className="text-justify">
          <h1 className="bg-gradient-to-r from-red-400 to-pink-600 bg-clip-text md:text-6xl text-5xl font-extrabold uppercase tracking-widest text-transparent">
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
              the field. Additionally, I have gained invaluable experience as a
              React Developer in the dynamic realm of Blockchain Technology.
              What sets me apart is my innate ability to quickly grasp new
              concepts, coupled with a keen problem-solving mindset. My focus is
              firmly fixed on achieving results, and I approach challenges with
              an unwavering determination to excel. My thirst for knowledge
              drives me to continually learn and adapt to emerging technologies,
              ensuring that my skillset remains up-to-date and relevant.{" "}
            </p>
            <p>
              I am excited about the opportunity to contribute my expertise and
              work collaboratively, always striving to exceed expectations and
              create innovative solutions. Let{`'`}s embark on this journey together
              and make remarkable strides in the world of web development! 🚀
            </p>
          </div>
          <a
            download
            href="/files/Rohit Bhardwaj.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="mt-8 w-fit rounded-md bg-gradient-to-r from-red-400 to-pink-600 px-4 py-2 font-medium text-white duration-300 ease-in hover:scale-105">
              Download Resume
            </button>
          </a>
        </div>
        <div className="text-justify">
          <h2 className="py-4 text-2xl font-bold">Skills</h2>
          <div className="flex flex-col gap-4 py-2 text-lg">
            {skills.map((item) => (
              <div className="flex items-center gap-8" key={item.id}>
                <p className="w-28 font-medium whitespace-nowrap">{item.name}</p>
                <div className="flex items-center gap-8 flex-1">
                  <progress
                    className="progress progress-error w-full"
                    value={item.value}
                    max="100"
                  />
                  <p>{item.value}%</p>
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
