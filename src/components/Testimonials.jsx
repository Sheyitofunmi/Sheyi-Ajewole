import React from "react";

const Testimonials = () => {
  return (
    <section
      className="testimonials bg-[#a1eacd] relative pb-16 "
      id="testimonials"
    >
      <div className="wrapper py-5">
        <h2 className=" uppercase mb-4 text-xl font-bold text-[#f0535d] tracking-wider">
          testimonials
        </h2>
        <h3 className="text-h3 text-4xl font-[600]">
          nice things people have said
        </h3>

        <div className="container-testimonials">
          <div className="container-testimonial flex pt-16 md:flex-row  flex-col justify-center items-center align-middle">
            <div className="container-person md:pb-0 pb-20">
              <div className="container-img-profile">
                <img
                  src="https://pbs.twimg.com/profile_images/1727737168146124800/iCjc1rlT_400x400.jpg"
                  alt="head-shot "
                />
              </div>
              <p className="text-[1.3rem] pt-2">
                Arit Developer Senior Software Engineer
              </p>
            </div>
            <div className="container-text">
              <p className="text-[1.3rem] py-3">
                Sheyi is an amazing designer, and great to work with! I hired
                her to create a high-quality opt-in offer for my mailing list,
                and she quickly understood what I was looking for, and how to
                appeal to my somewhat complex market. She was efficient and
                supportive, asked great questions that helped me think through
                my offer, and brought great creativity and insight to the final
                product. I am totally happy with it, and have already gotten
                good feedback! She also has a great sense of humour! Thanks so
                much, Sheyi, it was really a pleasure!
              </p>
            </div>
          </div>

          <div className="container-testimonial flex pt-14 md:flex-row  flex-col justify-center items-center align-middle">
            <div className="container-person md:pb-0 pb-20">
              <div className="container-img-profile">
                <img
                  src="https://media.licdn.com/dms/image/D4E03AQFB9AWpvhXOnQ/profile-displayphoto-shrink_800_800/0/1694462569508?e=1718841600&v=beta&t=i8ngDmwixTK0oR8AahC7vyYhc6TGf-5CjI_lOp2dpEE"
                  alt="head-shot "
                />
              </div>
              <p className="text-[1.3rem] pt-2">
                Eze Sunday, Software Engineer
              </p>
            </div>
            <div className="container-text">
              <p className="text-[1.3rem] py-3">
                We hired Sheyi to rework the content and design of our website.
                She has been terrific-{" "}
                <span className="text-bold">
                  collaborative, diligent, honest and professional
                </span>
                , offering solutions we had not thought about. We have found
                that she delivers efficiently and in a timely manner.
              </p>
              <p className="text-[1.3rem] py-3">
                Her work on our website successfully communicates to prospective
                clients the kind of people and firm that we are, and has brought
                innumerable clients to our firm through a streamlined and
                attractive website.{" "}
                <span className="bold">
                  I would recommend Sheyi in a heartbeat.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
