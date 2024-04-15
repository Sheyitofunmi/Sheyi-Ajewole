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
  ApiImg,
  FirebaseImg,
  VsImg,
  ResponsiveImg,
  WebImg,
  TypescriptImg,
  NextImg,
  TrustImg,
  FigmaImg,
  DesktopImg1,
  WizzImg,
} from "../utils";

const Projects = () => {
  return (
    <section className="work bg-[#7689d8] py-5" id="projects">
      <div className="wrapper">
        <h2 className=" uppercase mb-4 text-xl font-bold text-[#f0535d] tracking-wider">
          Projects
        </h2>
        <h3 className="text-h3 text-4xl font-[600]">
          a selection of stuff i've built
        </h3>

        <div className="section portfolio pt-5">
          <div className="container">
            <ul className="portfolio-list">
              <li>
                <div data-aos="fade-right" className="portfolio-card py-5">
                  <div className="card-banner img-holder">
                    <img
                      src={FigmaImg}
                      width="800"
                      height="540"
                      loading="lazy"
                      alt="Website Design for Marketing Agency Startup"
                      className="img-cover"
                    />

                    <a
                      href="https://figma-clone-smoky.vercel.app/"
                      className="btn-icon"
                      aria-label="More about Website Design for Marketing Agency Startup"
                    >
                      <ion-icon
                        name="arrow-forward-sharp"
                        aria-hidden="true"
                      ></ion-icon>
                    </a>
                  </div>

                  <div className="card-content">
                    <h4 className="h4-text md:text-[1.8rem] pb-2 text-[1.4rem]">
                      Real Time Figma Clone Application
                    </h4>
                    <p className="text-[1.3rem] pt-3 pb-5">
                      A Liveblocks real-time collaborative design tool using
                      Fabric.Js, inspired by Figma, featuring, multi-user
                      collaboration with cursor chat, reactions, Comment bubbles
                      for feedback, Image upload, diverse shape creation,
                      Freeform drawing, keyboard shortcuts, Comprehensive
                      history tracking and canvas management.
                    </p>

                    <div className="flex gap-[10px]  items-center text-center">
                      <img src={NextImg} alt="" className="h-[2.5em]" />
                      <img src={TypescriptImg} alt="" className="h-[2em]" />
                      <FontAwesomeIcon
                        icon={faCss3Alt}
                        style={{ color: "#ffffff", height: "2em" }}
                      />
                      <img src={ResponsiveImg} alt="" className="h-[2em]" />
                    </div>
                    <div className="flex items-center gap-[15px] pt-4">
                      <a href="https://figma-clone-smoky.vercel.app/">
                        <button className="btn btn-primary text-[#a1eacd] ">
                          View Project
                        </button>
                      </a>

                      <a href="https://github.com/Sheyitofunmi/Figma-clone">
                        <button className="btn btn-primary text-[#a1eacd] ">
                          Github repo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div data-aos="fade-left" className="portfolio-card py-5">
                  <div className="card-banner img-holder">
                    <img
                      src={DesktopImg1}
                      width="800"
                      height="540"
                      loading="lazy"
                      alt="Website Design for Marketing Agency Startup"
                      className="img-cover"
                    />

                    <a
                      href="https://github.com/Sheyitofunmi/News-app"
                      className="btn-icon"
                      aria-label="More about Website Design for Marketing Agency Startup"
                    >
                      <ion-icon
                        name="arrow-forward-sharp"
                        aria-hidden="true"
                      ></ion-icon>
                    </a>
                  </div>

                  <div className="card-content">
                    <h4 className="h4-text md:text-[1.8rem] pb-2 text-[1.4rem]">
                      News Opera
                    </h4>
                    <p className="text-[1.3rem] pt-3 pb-5">
                      This is a React and Redux toolkit-powered news application
                      designed to keep users informed with the latest articles
                      sourced from newsapi.org. With a sleek interface and
                      responsive design, users can effortlessly browse news
                      articles, filter them by source, and explore detailed
                      content with ease.
                    </p>

                    <div className="flex gap-[10px]  items-center text-center">
                      <FontAwesomeIcon
                        icon={faReact}
                        style={{ color: "#ffffff", height: "2.2em" }}
                      />
                      <FontAwesomeIcon
                        icon={faJs}
                        style={{ color: "#ffffff", height: "2em" }}
                      />
                      <FontAwesomeIcon
                        icon={faCss3Alt}
                        style={{ color: "#ffffff", height: "2em" }}
                      />
                      <img src={ResponsiveImg} alt="" className="h-[2em]" />
                    </div>
                    <div className="flex items-center gap-[15px] pt-4">
                      <a href="https://news-gim9tu65a-sheyitofunmis-projects.vercel.app/">
                        <button className="btn btn-primary text-[#a1eacd] ">
                          View Project
                        </button>
                      </a>

                      <a href="https://github.com/Sheyitofunmi/News-app">
                        <button className="btn btn-primary text-[#a1eacd] ">
                          Github repo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div data-aos="fade-right" className="portfolio-card py-5">
                  <div className="card-banner img-holder">
                    <img
                      src={WizzImg}
                      width="800"
                      height="540"
                      loading="lazy"
                      alt="Website Design for Marketing Agency Startup"
                      className="img-cover"
                    />

                    <a
                      href="https://word-wizz.vercel.app/"
                      className="btn-icon"
                      aria-label="More about Website Design for Marketing Agency Startup"
                    >
                      <ion-icon
                        name="arrow-forward-sharp"
                        aria-hidden="true"
                      ></ion-icon>
                    </a>
                  </div>

                  <div className="card-content">
                    <h4 className="h4-text md:text-[1.8rem] pb-2 text-[1.4rem]">
                      Word-Wizz Game
                    </h4>
                    <p className="text-[1.3rem] pt-3 pb-5">
                      Can you race against our wizard and beat him in thinking
                      up a list of related words? Test your word wizzi-ness
                      here!
                    </p>

                    <div className="flex gap-[10px]  items-center text-center">
                      <FontAwesomeIcon
                        icon={faJs}
                        style={{ color: "#ffffff", height: "2em" }}
                      />
                      <FontAwesomeIcon
                        icon={faHtml5}
                        style={{ color: "#ffffff", height: "2em" }}
                      />
                      <FontAwesomeIcon
                        icon={faCss3Alt}
                        style={{ color: "#ffffff", height: "2em" }}
                      />

                      <img src={ResponsiveImg} alt="" className="h-[2em]" />
                    </div>
                    <div className="flex items-center gap-[15px] pt-4">
                      <a href="https://word-wizz.vercel.app/">
                        <button className="btn btn-primary text-[#a1eacd] ">
                          View Project
                        </button>
                      </a>

                      <a href="https://github.com/Sheyitofunmi/Word-Wizz">
                        <button className="btn btn-primary text-[#a1eacd] ">
                          Github repo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <div data-aos="fade-left" className="portfolio-card py-5">
                  <div className="card-banner img-holder">
                    <img
                      src={TrustImg}
                      width="800"
                      height="540"
                      loading="lazy"
                      alt="Website Design for Marketing Agency Startup"
                      className="img-cover"
                    />

                    <a
                      href="https://brilliant-muffin-c574db.netlify.app"
                      className="btn-icon"
                      aria-label="More about Website Design for Marketing Agency Startup"
                    >
                      <ion-icon
                        name="arrow-forward-sharp"
                        aria-hidden="true"
                      ></ion-icon>
                    </a>
                  </div>

                  <div className="card-content">
                    <h4 className="h4-text md:text-[1.8rem] pb-2 text-[1.4rem]">
                      Trust A Financial Website
                    </h4>
                    <p className="text-[1.3rem] pt-3 pb-5">
                      Trust is a financial websites, it's a testament to the
                      convergence of aesthetics, functionality, and reliability
                      in the digital realm of finance. By combining cutting-edge
                      design with user-centric features, captivating visitors
                      and instilling confidence from the moment they land on the
                      homepage.
                    </p>

                    <div className="flex gap-[10px]  items-center text-center">
                      <FontAwesomeIcon
                        icon={faHtml5}
                        style={{ color: "#ffffff", height: "2em" }}
                      />
                      <FontAwesomeIcon
                        icon={faCss3Alt}
                        style={{ color: "#ffffff", height: "2em" }}
                      />
                      <img src={ResponsiveImg} alt="" className="h-[2em]" />
                    </div>
                    <div className="flex items-center gap-[15px] pt-4">
                      <a href="https://brilliant-muffin-c574db.netlify.app">
                        <button className="btn btn-primary text-[#a1eacd] ">
                          View Project
                        </button>
                      </a>

                      <a href="https://github.com/Sheyitofunmi/Trust">
                        <button className="btn btn-primary text-[#a1eacd] ">
                          Github repo
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
