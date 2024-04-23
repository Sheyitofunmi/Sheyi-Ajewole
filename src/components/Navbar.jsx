import React, { useEffect, useState } from "react";
import { downloadCV } from "../utils";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  const menuLinks = [
    { name: "HOME", link: "#home" },
    { name: "ABOUT", link: "#about" },
    { name: "SKILLS", link: "#skills" },
    { name: "PROJECTS", link: "#projects" },
    { name: "CONTACT", link: "#contact" },
    { name: "Download CV", action: downloadCV },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const sections = document.querySelectorAll("section");

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute("id");

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + section.offsetHeight
        ) {
          setActiveLink(`#${sectionId}`);
        }
      });

      if (scrollPosition > 0) {
        setSticky(true);
      } else {
        setSticky(false);
      }

      if (scrollPosition === 0) {
        setActiveLink("#home");
      }

      if (scrollPosition + window.innerHeight === document.body.offsetHeight) {
        setActiveLink("#contact");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
    setOpen(false);
  };

  return (
    <nav
      className={`fixed w-full left-0 top-0 z-[999] ${
        sticky ? "bg-white/60  text-gray-900" : "text-white"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="mx-7">
          <h4 className="text-4xl uppercase italic font-bold">
            S<span className="text-[#394ff4]">HE</span>YI
          </h4>
        </div>
        <div
          className={`${
            sticky ? "md:bg-white/0 bg-white" : "bg-white"
          } text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}
        >
          <ul className="flex items-center gap-1 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                key={i}
                className={`px-6 list-text font-bold ${
                  activeLink === menu.link ? "active" : ""
                }`}
              >
                <a
                  href={menu.link}
                  onClick={() => {
                    handleSetActiveLink(menu.link);
                    if (menu.action) menu.action();
                  }}
                >
                  {menu.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className={`z-[999] ${
            open ? "text-gray-900" : "text-black"
          } text-3xl md:hidden m-5`}
        >
          <ion-icon
            name="menu"
            className={sticky ? "sticky-menu-icon" : ""}
          ></ion-icon>
        </div>

        <div
          className={`md:hidden text-gray-900 absolute w-2/3 h-screen
      px-7 py-2 font-medium bg-white top-0 duration-300 ${
        open ? "right-0" : "right-[-100%]"
      }`}
        >
          <ul className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
            {menuLinks?.map((menu, i) => (
              <li
                onClick={() => {
                  setOpen(false);
                  handleSetActiveLink(menu.link);
                  if (menu.action) menu.action();
                }}
                key={i}
                className={`px-6 list-text font-bold ${
                  activeLink === menu.link ? "active" : ""
                }`}
              >
                <a href={menu.link}>{menu.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
