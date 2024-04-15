import { useEffect, useState } from "react";
import React from "react";
import { homeImg, SeyiImg2 } from "../utils";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [animationClass, setAnimationClass] = useState("");

  const social_media = [
    {
      name: "logo-github",
      title: "Github",
      link: "https://github.com/sheyitofunmi",
    },
    {
      name: "logo-linkedin",
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/ajewole-j-oluwaseyi",
    },

    {
      name: "logo-twitter",
      title: "Twitter",
      link: "https://twitter.com/sheyitofunmi",
    },
    {
      name: "logo-medium",
      title: "Medium",
      link: "https://medium.com/@sheyitofunmi22",
    },
  ];

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-cubic",
      delay: 100,
      offset: 300,
    });
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass((prevClass) =>
        prevClass === "" ? "animate-bounce " : ""
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="home"
      className="hero min-h-screen bg-[#6fdcbf]    relative py-20  flex md:py-10 md:flex-col lg:flex-row flex-col items-center "
    >
      <div data-aos="fade-right">
        <div className="flex-1 py-[3%] px-[8%] lg:ml-3 md:py-0 md:px-0 md:pt-10 lg:pt-2 flex items-center justify-center h-full  overflow-hidden max-w-300 mx-auto  ">
          <img
            src={homeImg}
            alt=""
            className=" xl:w-[87%]  lg:w-[80%] h-full object-cover"
          />
        </div>
      </div>

      <div
        data-aos="fade-left"
        data-aos-anchor="#example-anchor"
        data-aos-offset="500"
        data-aos-duration="500"
        className="flex-1 py-[3%] px-[8%] md:py-3 md:px-0  md:w-[80%] w-full xl:pl-[50px] "
      >
        <div className="lg:pt-4">
          <img src={SeyiImg2} alt="" className="   h-full object-cover" />
        </div>
        <div className="hero-content ">
          <p
            className={`hero-subtitle text-white md:ml-[80px] xl:ml-[150px] ml-0 ${animationClass}`}
          >
            <span className="text-[2.5rem] ">👋,</span> My name is Sheyi
          </p>

          <p className="intro_text lg:text-[30px] xl:text-[50px] md:text-[35px]  text-[25px] ">
            I like making <a href="">fun</a>, interactive things with code. I
            also <a href="">talk</a> & <a href="">write</a> about those things.
          </p>

          <div className="post4">
            <a href="/#contact">Contact me...</a>
          </div>

          <div className="mt-10 lg:pl-2 text-3xl flex items-center justify-start  gap-5">
            {social_media.map((item) => (
              <a
                key={item.name}
                className="text-[#40403f] hover:text-white cursor-pointer"
                title={item.title}
                href={item.link}
              >
                <ion-icon name={item.name}></ion-icon>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
