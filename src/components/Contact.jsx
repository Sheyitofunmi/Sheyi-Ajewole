import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faGithub,
  faMediumM,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setIsSending(true);

    emailjs
      .sendForm("service_lu5aa38", "template_t4k7316", form.current, {
        publicKey: "CplpyzeXcN8EI47Fi",
      })
      .then(
        () => {
          setIsSent(true);
          setIsSending(false);
          console.log("SUCCESS!");

          setTimeout(() => {
            setIsSent(false);
            form.current.reset();
          }, 1000);
        },
        (error) => {
          setIsSending(false);
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-[#fef2d8] 
    "
    >
      <div className="wrapper">
        <h2 className=" uppercase mb-4 text-xl font-bold text-[#f0535d] tracking-wider">
          contact
        </h2>
        <h3 className="text-h3 text-4xl font-[600]">get in touch</h3>

        <div className="flex  flex-col md:flex-row items-center justify-center md:gap-10">
          <div className="md:w-[70%] w-full">
            <p className="text-[1.3rem] py-3">
              Dropping a line to say g’day, ask for my resume or see if we can
              build something amazing together? I’d love to hear from you!
            </p>
            <p className="text-[1.3rem] py-3">
              Fill in your info in the form below and I look forward to hearing
              from you!
            </p>
            <form
              ref={form}
              onSubmit={sendEmail}
              className=" rounded  pt-6 pb-8 mb-4"
            >
              <div className="mb-6">
                <input
                  className="shadow bg-white appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="name"
                  type="text"
                  placeholder="Name"
                  name="user_name"
                  required
                  style={{
                    boxShadow: "2px 2px #f0535d",
                    borderRadius: "4px",
                    border: "2px solid rgba(72, 216, 164, 0)",
                    width: "100%",
                    display: "block",
                    padding: "1.2rem .6rem .4rem",
                  }}
                />
              </div>
              <div className="mb-6">
                <input
                  className="shadow appearance-none bg-white  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  placeholder="Email"
                  name="user_email"
                  required
                  style={{
                    boxShadow: "2px 2px #f0535d",
                    borderRadius: "4px",
                    border: "2px solid rgba(72, 216, 164, 0)",
                    width: "100%",
                    display: "block",
                    padding: "1.2rem .6rem .4rem",
                  }}
                />
              </div>
              <div className="mb-6">
                <textarea
                  className="shadow appearance-none bg-white  border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="message"
                  placeholder="Message"
                  name="message"
                  required
                  style={{
                    boxShadow: "2px 2px #f0535d",
                    borderRadius: "4px",
                    border: "2px solid rgba(72, 216, 164, 0)",
                    width: "100%",
                    display: "block",
                    padding: "1.2rem .6rem .4rem",
                    resize: "none",
                    height: "150px",
                  }}
                />
              </div>
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className={`btn btn-primary text-[#a1eacd] ${
                    isSent ? "cursor-not-allowed" : "hover:bg-[#f48480]"
                  }`}
                  disabled={isSent || isSending}
                >
                  {isSending ? (
                    <>
                      <svg
                        className="animate-spin h-5 w-5 mr-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647zm10-2.647A7.962 7.962 0 0120 12h-4c0 1.116-.228 2.182-.632 3.157l3 2.647zM12 20a8 8 0 008-8h-4c0 1.116-.228 2.182-.632 3.157l-3-2.647z"
                        ></path>
                      </svg>
                      {/* Sending... */}
                    </>
                  ) : (
                    <>
                      {isSent ? (
                        <>
                          Email Sent{" "}
                          <FontAwesomeIcon
                            icon={faCheckCircle}
                            className="ml-1"
                          />
                        </>
                      ) : (
                        "Send Email"
                      )}
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
          {/* socials */}
          <div className="pb-7 md:pb-0 md:pt-[100px] pt-10 ">
            <p className="text-[1.5rem] pb-3 md:px-5">
              Feeling social? Find me on these online spaces too!
            </p>
            <div className="mt-5 mb-5">
              <ul className="flex space-x-4 justify-evenly">
                {/* TWITTER */}
                <li>
                  <a
                    href="https://twitter.com/sheyitofunmi"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open link to Ajewole Seyi Twitter page."
                  >
                    <FontAwesomeIcon
                      icon={faTwitter}
                      className="text-[#394ff4] text-[25px]"
                    />
                    <span className="sr-only">Twitter</span>
                  </a>
                </li>

                {/* GITHUB */}
                <li>
                  <a
                    href="https://github.com/sheyitofunmi"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open link to Ajewole Seyi GitHub page."
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      className="text-[#394ff4] text-[25px]"
                    />
                    <span className="sr-only">GitHub</span>
                  </a>
                </li>

                {/* MEDIUM */}
                <li>
                  <a
                    href="https://medium.com/@sheyitofunmi22"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open link to Ajewole Seyi Medium page."
                  >
                    <FontAwesomeIcon
                      icon={faMediumM}
                      className="text-[#394ff4] text-[25px]"
                    />
                    <span className="sr-only">Medium</span>
                  </a>
                </li>

                <li>
                  <a
                    href="https://www.linkedin.com/in/ajewole-j-oluwaseyi"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Open link to Ajewole Seyi LinkedIn page."
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      className="text-[#394ff4] text-[25px]"
                    />
                    <span className="sr-only">LinkedIn</span>
                  </a>
                </li>

                {/* EMAIL */}
                <li>
                  <a
                    href="mailto:sheyitofunmi22@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Send an email to Ajewole Seyi."
                  >
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      className="text-[#394ff4] text-[25px]"
                    />
                    <span className="sr-only">Email</span>
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex md:mt-[60px]  mt-7 md:pb-0">
              <p className="text-[1.5rem] pb-3 md:px-5">
                Mail:
                <a
                  href="tel:sheyitofunmi22@gmail.com"
                  className="text-[#394ff4] text-[25px] pl-2"
                >
                  sheyitofunmi22@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
