import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";
import {
  faCss3Alt,
  faJs,
  faReact,
  faGitAlt,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faTerminal } from "@fortawesome/free-solid-svg-icons";
import {
  JqueryImg,
  ApiImg,
  WebImg,
  FirebaseImg,
  VsImg,
  ResponsiveImg,
  NextImg,
  TypescriptImg,
} from "../utils";

const Skills = () => {
  return (
    <section id="skills" className=" skill relative py-10 bg-[#eeb4aa] ">
      <div className="wrapper">
        <div className="mt-8 text-gray-100 ">
          <h2 className=" uppercase mb-4 text-xl font-bold text-[#f0535d] tracking-wider">
            Skills & Tools
          </h2>
          <h3 className="text-h3 text-4xl font-[600]">
            my toolbox & things i can do
          </h3>

          <p className="text-[#252525] text-lg font-[500] text-[1.3rem] ">
            The skills, tools and technologies I use to bring your products to
            life:
          </p>
        </div>
        <div className="mx-auto justify-center gap-y-[50px] items-center px-4  py-6  md:p-8 gap-x-[80px] flex-wrap flex">
          <div className="flex flex-col gap-5 items-center">
            <FontAwesomeIcon
              icon={faHtml5}
              style={{ color: "#ffffff", height: "4em" }}
            />
            <p className="text-[1.2rem] text-[#656565] font-medium">HTML5</p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <FontAwesomeIcon
              icon={faCss3Alt}
              style={{ color: "#ffffff", height: "4em" }}
            />
            <p className="text-[1.2rem] text-[#656565] font-medium">CSS3</p>
          </div>

          <div className="flex flex-col gap-5 items-center">
            <FontAwesomeIcon
              icon={faJs}
              style={{ color: "#ffffff", height: "4em" }}
            />
            <p className="text-[1.2rem] text-[#656565] font-medium">
              Javascript
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <img src={TypescriptImg} alt="" className="h-[5em]" />
            <p className="text-[1.2rem] text-[#656565] font-medium">
              Typescript
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <img src={JqueryImg} alt="" className="h-[5em]" />
            <p className="text-[1.2rem] text-[#656565] font-medium">jQuery</p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <FontAwesomeIcon
              icon={faReact}
              style={{ color: "#ffffff", height: "4em" }}
            />
            <p className="text-[1.2rem] text-[#656565] font-medium">React</p>
          </div>

          <div className="flex flex-col gap-5 items-center">
            <img src={NextImg} alt="" className="h-[5em]" />
            <p className="text-[1.2rem] text-[#656565] font-medium">Next Js</p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <FontAwesomeIcon
              icon={faGitAlt}
              style={{ color: "#ffffff", height: "4em" }}
            />
            <p className="text-[1.2rem] text-[#656565] font-medium">Git</p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <FontAwesomeIcon
              icon={faGithub}
              style={{ color: "#ffffff", height: "4em" }}
            />
            <p className="text-[1.2rem] text-[#656565] font-medium">Github</p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <img src={ApiImg} alt="" className="h-[4em]" />
            <p className="text-[1.2rem] text-[#656565] font-medium">
              {" "}
              RESTful APIs
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <img src={FirebaseImg} alt="" className="h-[4.5em]" />
            <p className="text-[1.2rem] text-[#656565] font-medium">Firebase</p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <FontAwesomeIcon
              icon={faTerminal}
              style={{ color: "#ffffff", height: "3.5em" }}
            />
            <p className="text-[1.2rem] text-[#656565] font-medium">
              Command Line
            </p>
          </div>
          <div className="flex flex-col gap-5 items-center">
            <img src={VsImg} alt="" className="h-[4.5em]" />
            <p className="text-[1.2rem] text-[#656565] font-medium">VS code</p>
          </div>
          <div className="flex flex-col gap-5 items-center md:max-w-full max-w-[25%] text-center">
            <img src={ResponsiveImg} alt="" className="h-[4em]" />
            <p className="text-[1.2rem] text-[#656565] font-medium">
              Responsive Website
            </p>
          </div>
        </div>

        <div className="md:p-10  py-8 mx-auto font-semibold">
          <h4 className="text-[#7689d8] text-[1.8rem] mb-2">
            Currently working on:
          </h4>
          <p className="text-[#252525] md:text-[1.2rem]">
            Improving my skills in, and understanding of vanilla JavaScript and
            React. Also, having fun with #100DaysOfCode building &amp; animating
            things via CSS.{" "}
            <a
              href="https://twitter.com/sheyitofunmi"
              target="_blank"
              aria-label="open link to sheyitofunmi Twitter page."
              className="text-[#394ff4]"
            >
              Follow my journey here
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
