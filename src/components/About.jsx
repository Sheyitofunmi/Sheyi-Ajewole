import React from "react";
import { AboutImg, SeyiImg4, downloadCV } from "../utils";

const About = () => {
  const info = [
    { text: "Years experience", count: "03" },
    { text: "Completed Projects", count: "24" },
    { text: "Companies Work", count: "02" },
  ];

  const handleDownloadCV = () => {
    downloadCV();
  };

  return (
    <section id="about" className="pt-10 pb-12 bg-[#ffeed9] ">
      <div className=" wrapper mt-8">
        <h2 className=" uppercase mb-4 text-xl font-bold text-[#f0535d] tracking-wider">
          About
        </h2>
        <h3 className="text-h3 text-4xl font-[600]">Introduction</h3>

        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-4   ">
          <div className="lg:p-2">
            <div className="text-[#000] my-3 text-justify leading-7 w-11/12  ">
              <div
                data-aos="fade-right"
                data-aos-duration="500"
                className="pb-7"
              >
                <img src={SeyiImg4} alt="" className="h-full object-cover" />{" "}
              </div>

              <h3 className="pb-2 font-[500] text-3xl ">
                I'm a Front-end Developer with over 3 years of experience with
                design chops.
              </h3>
              <p className="text-[1.3rem] py-3">
                I'm passionate about bringing both the
                <span className="text-[#394ff4] font-medium">
                  {" "}
                  technical and visual{" "}
                </span>
                aspects of digital products to life. User experience, beautiful
                pixels and writing clean accessible, human code matters to me. I
                sweat the details.
              </p>

              <p className="text-[1.3rem] py-3">
                I'm happiest when I'm creating, learning, exploring and thinking
                about how to make things better. I'm available for any{" "}
                <span className="text-[#394ff4] font-medium">
                  {" "}
                  freelance or fulltime Job,{" "}
                </span>
                feel free to reach out and say hello! I promise I don't bite 😉
              </p>

              <div className="flex mt-10 items-center gap-7">
                {info.map((content) => (
                  <div key={content.text}>
                    <h3
                      className="md:text-4xl text-2xl font-semibold text-[#7689d8]
                    "
                    >
                      {content.count}
                      <span className="text-[#394ff4]">+</span>{" "}
                    </h3>
                    <span className="md:text-base text-xs">{content.text}</span>
                  </div>
                ))}
              </div>
              <br />
              <br />
              <div className="flex gap-5 md:justify-start justify-between">
                <div>
                  {" "}
                  <button
                    className="px-4 pt-1 border-t-2 lg:text-[24px] md:-[20px] text-[15px] md:tracking-[3px] tracking-[2px]  text border-[#394ff4] text-[#252525] hover:text-white hover:bg-[#394ff4] transition-all duration-200"
                    onClick={handleDownloadCV}
                  >
                    Download CV
                  </button>
                </div>
                <div>
                  {" "}
                  <a href="/#contact">
                    <button className="px-4 pb-1 border-b-2  lg:text-[24px] md:-[20px] text-[15px] md:tracking-[3px] tracking-[2px]    text border-[#394ff4] text-[#252525] hover:text-white hover:bg-[#394ff4] transition-all duration-200">
                      Get in touch!
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div
              data-aos="fade-left"
              data-aos-anchor="#example-anchor"
              data-aos-offset="500"
              data-aos-duration="500"
              className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg "
            >
              <img
                src={AboutImg}
                alt=""
                className="w-full object-cover  rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
