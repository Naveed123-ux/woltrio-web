import Layouts from "@layouts/Layouts";
import Link from "next/link";

import React from "react";
import JobListings from "../components/JobListings";

const Jobopening = () => {
  return (
    <>
      <Layouts>
        <div>
          <div className="row bg-black g-0 marginSet mt-5">
            <div className="col-md-12 mx-auto set-black-bg">
              <div className="col-md-6 mx-auto px-md-0 px-3 py-md-5 py-0 my-md-5 my-0 ">
                <div className="text-white text-center ">
                  <div className="">
                    <div className="my-5 developer-text ">
                      Developers , Animators & Editors
                    </div>
                    <span className="developer-text">
                      Are You the Next to Join Us?
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-0 bg-white text-black">
            <div className="col-md-10 px-md-0 px-3 mx-auto">
              <div
                className="col-md-10 pt-5 mx-auto  "
                style={{ textAlign: "center" }}
              >
                <h3>
                  Join Our Remarkable Team of Innovators Who Believe In Making a
                  Difference.
                </h3>
              </div>
              <hr className="mt-4" />
              <JobListings />
              <hr />

              <div className="row d-flex align-items-center justify-content-center text-black g-0 bg-dark-subtle rounded">
                <div className="col-md-9 px-md-5 px-3 my-5">
                  <div className="col">
                    <h2>Create Your Own Job Profile</h2>
                    <span>
                      We are always hiring innovative folks at Brainstorm Force.
                      If you can’t find a role that fits you from our open
                      positions, we welcome you to apply and create your own job
                      profile. Our HR team will get in touch with you for
                      further steps.
                    </span>
                  </div>
                </div>
                <div className="col-md-3 d-flex justify-content-center pb-md-0 pb-5">
                  <Link
                    href="/contact" // Changed from 'to' to 'href'
                    onClick={(e) => {
                      e.preventDefault(); // Prevent default navigation
                      window.scrollTo(0, 0); // Scroll to top
                      // Optionally trigger navigation programmatically
                      window.location.href = "/contact";
                    }}
                  >
                    <button
                      style={{ height: "40px" }}
                      type="button"
                      className="button-designing-openings-details"
                    >
                      GET STARTED
                    </button>
                  </Link>
                </div>
              </div>
              <div className="row d-flex align-items-center justify-content-center bg-white">
                <div className="row my-lg-5 py-xl-2 my-4 d-flex align-items-center">
                  <div className="col-md-6 px-md-0 px-3 my-5">
                    <div className="col">
                      <h2 style={{ textAlign: "center" }}>
                        Why You Should Join Our Awesome Team
                      </h2>
                      <span className=" mt-2">
                        This isn’t just another job. It’s a career, a company
                        you can grow and learn with. Opportunity aplenty and a
                        focused, driven team.
                      </span>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex justify-content-center my-5">
                    <div className="row justify-content-end">
                      {[
                        {
                          image: "/img/Jobs/4.png",
                          title: "Friendly Environment",
                        },
                        {
                          image: "/img/Jobs/5.png",
                          title: "Open Communication",
                        },
                        {
                          image: "/img/Jobs/6.png",
                          title: "Onsite Working Environment",
                        },
                        {
                          image: "/img/Jobs/1.png",
                          title: "Learning Opportunity",
                        },
                        {
                          image: "/img/Jobs/2.png",
                          title: "Competitive Base Salary",
                        },
                        {
                          image: "/img/Jobs/3.png",
                          title: "Upgrade Your Skills",
                        },
                      ].map((item, index) => (
                        <div
                          key={index}
                          className="col-md-3 m-1 mx-2 border p-3 rounded-3 d-flex flex-column align-items-center border-styling-skills"
                        >
                          <img
                            style={{ width: "60px", marginBottom: "10px" }}
                            src={item.image}
                            alt=""
                          />
                          <strong className="text-center mt-2">
                            {item.title}
                          </strong>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row my-lg-5 py-xl-2 my-4">
                <div className="col-md-7">
                  <div className="col">
                    <h2>
                      Amazing People Striving to Build Delightful Products
                      Together.
                    </h2>
                    <p className="text-black pt-3">
                      We’re a team of 70+ innovative and passionate individuals,
                      including developers, animators, video editors, and
                      creatives from various fields. We specialize in bringing
                      ideas to life through cutting-edge designs, captivating
                      animations, and seamless development.Our expertise powers
                      groundbreaking projects, with thousands of creators
                      relying on our tools and solutions to build, inspire, and
                      entertain. Every day, we help craft more than 1500 digital
                      experiences across the globe.
                    </p>
                  </div>
                </div>
                <div className="col-md-5 mt-3 px-md-0 p-3 position-relative">
                  <i className="abc">
                    <svg
                      style={{ width: "40px" }}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 448 512"
                    >
                      <path
                        fill="#ff9800"
                        d="M0 216C0 149.7 53.7 96 120 96l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72zm256 0c0-66.3 53.7-120 120-120l8 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-8 0c-30.9 0-56 25.1-56 56l0 8 64 0c35.3 0 64 28.7 64 64l0 64c0 35.3-28.7 64-64 64l-64 0c-35.3 0-64-28.7-64-64l0-32 0-32 0-72z"
                      />
                    </svg>
                  </i>

                  <div className="rounded-5 border border-5 border-warning p-5 text-center bg-dark-subtle border-styling-get-in-touch">
                    <p className="text-black">
                      “At Woltrio, our mission is simple: “to help businesses
                      grow online”. Every day, my colleagues inspire me with
                      their passion and dedication to this mission. I couldn’t
                      wish for better colleagues.”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layouts>
    </>
  );
};

export default Jobopening;
