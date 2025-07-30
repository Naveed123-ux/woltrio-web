import { useState } from "react";

import Layouts from "@layouts/Layouts";

import Link from "next/link";

import AOS from "aos";

import { useEffect } from "react";
import ProjectCard from "../components/ProjectCard";
import Contact from "@components/Contact";

// import ButtonD from "../components/button/UniqueButtonD";
import Button from "../components/button/UniqueButton";

const Portfolio = () => {
  const projects = [
    {
      imgpath: "/img/Projects/medcare.com.png",
      title: "MedCare . Medical Management system.",
      detail:
        "Woltrio engineered MedCare as a comprehensive medical management system, streamlining patient care, appointments, and records with secure, scalable technology.",
      tools: [
        "fa-brands fa-react",
        "fa-brands fa-node",
        "fa-brands fa-js",
        "fa-brands fa-css3",
      ],
      liveSite: "https://example.com",
      gitRepo: "https://github.com/example",
    },
    {
      imgpath: "/img/Projects/Wound-app.png",
      title: "Wound App",
      detail:
        "Woltrio developed Wound App to simplify wound tracking and support better healing through smart digital care.",
      tools: [
        "fa-brands fa-react",
        "fa-brands fa-node",
        "fa-brands fa-js",
        "fa-brands fa-css3",
      ],
      liveSite: "https://example.com",
      gitRepo: "https://github.com/example",
    },
    {
      imgpath: "/img/Projects/demo-denji.png",
      title: "Demo Denji App",
      detail:
        "Woltrio developed Demo Denji App to simplify wound tracking and support better healing through smart digital care.",
      tools: [
        "fa-brands fa-react",
        "fa-brands fa-node",
        "fa-brands fa-js",
        "fa-brands fa-css3",
      ],
      liveSite: "https://example.com",
      gitRepo: "https://github.com/example",
    },
    {
      imgpath: "/img/Projects/yourstudio.io_.png",
      title: "YourStudio.io",
      detail:
        "Woltrio harnesses cutting-edge technologies to craft innovative solutions, empowering businesses with tailored software experiences.",
      tools: [
        "fa-brands fa-react",
        "fa-brands fa-node",
        "fa-brands fa-js",
        "fa-brands fa-css3",
      ],

      liveSite: "https://yourstudio.io/",
      gitRepo: "https://github.com/example",
    },
    {
      imgpath: "/img/Projects/aelapro.ia.png",
      title: "Aela.ai",
      detail:
        "Woltrio drives digital transformation by delivering custom software solutions that meet the unique demands of modern enterprises.",
      tools: [
        "fa-brands fa-react",
        "fa-brands fa-node",
        "fa-brands fa-js",
        "fa-brands fa-css3",
      ],

      liveSite: "https://app.aelapro.ai/",
      gitRepo: "https://github.com/example",
    },

    {
      imgpath: "/img/Projects/trands.png",
      title: "TrendSetGO",
      detail:
        "Woltrio created TrendSetGO as a trendsetting e-commerce platform, blending sleek design with powerful analytics to elevate online shopping and business insights.",
      tools: [
        "fa-brands fa-react",
        "fa-brands fa-node",
        "fa-brands fa-js",
        "fa-brands fa-css3",
      ],

      liveSite: "https://app.aelapro.ai/",
      gitRepo: "https://github.com/example",
    },
    {
      imgpath: "/img/Projects/point-sign.png",
      title: "Point Signs",
      detail:
        "Woltrio developed Point Signs as a digital signage solution, delivering dynamic content management and real-time updates for impactful visual communication.",
      tools: [
        "fa-brands fa-react",
        "fa-brands fa-node",
        "fa-brands fa-js",
        "fa-brands fa-css3",
      ],
      liveSite: "https://example.com",
      gitRepo: "https://github.com/example",
    },
  ];
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
      offset: 120,
    });
  }, []);
  return (
    <Layouts>
      <div>
        <div className="col-md-19 mx-auto  main-heading ">
          <div className="row m-0">
            <div className="col-md-7 mt-5 py-5 Deisgning-a-world ">
              <div className="pt-5">
                {" "}
                <h1 style={{ textAlign: "left" }}>
                  {" "}
                  Designing a <br />
                  <span style={{ color: "#FFA500", fontWeight: "600" }}>
                    better
                  </span>
                  <span> World Today</span>{" "}
                </h1>
              </div>
            </div>
            {/* <ButtonD text="Our works" /> */}
          </div>
        </div>
        {/* CLOSING OF COL-100000  */}
        <div className="row g-0 gy-6">
          <div className="row justify-content-center mt-5 my-5 card-boxs">
            {projects.map((project, index) => (
              <ProjectCard
                key={index} // ✅ Always add a unique key when mapping
                index={index} // ✅ Pass index for alternating layout
                imgpath={project.imgpath}
                title={project.title}
                detail={project.detail}
                tools={project.tools}
                liveSite={project.liveSite}
                gitRepo={project.gitRepo}
              />
            ))}
          </div>
        </div>
      </div>
      <Contact />
    </Layouts>
  );
};

export default Portfolio;
