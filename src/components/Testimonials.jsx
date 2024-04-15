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
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
