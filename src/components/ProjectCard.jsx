/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import { FaReact, FaNodeJs, FaJs, FaCss3, FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

// Map tool names from JSON to React Icons components

const ProjectCard = (props) => {
  const { imgpath, title, detail, tools, liveSite, gitRepo, index } = props;

  const cardRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current && cardRef.current) {
      const imageHeight = imageRef.current.offsetHeight;
      const cardHeight = cardRef.current.offsetHeight;
      cardRef.current.style.setProperty(
        "--img-height",
        `${Math.abs(imageHeight - cardHeight)}px`
      );
    }
  }, []);

  return (
    <div
      className={`row d-flex justify-content-center align-items-center m-4 ${
        index % 2 === 1
          ? "flex-md-row-reverse flex-column"
          : "flex-column flex-md-row"
      }`}
      style={{ maxWidth: "1200px" }}
    >
      {/* Left Column - Image */}
      <div className="col-md-4 d-flex justify-content-center ProjectCard-mainbox">
        <div
          className="ProjectCard-container p-0 border"
          ref={cardRef}
          style={{ width: "100%", height: "300px" }}
        >
          <img
            src={imgpath}
            alt="Project Screenshot"
            className="ProjectCard-image border"
            ref={imageRef}
          />
        </div>
      </div>

      {/* Right Column - Content */}
      <div
        className="col-12 col-md-8 px-md-5 px-4 pt-3 d-flex flex-column border mt-3 mt-md-0"
        style={{ height: "300px" }}
      >
        <div className="text-start-title">{title}</div>
        <p className="text-dark my-3 text-start">{detail}</p>

        {/* Tools Section */}
        <div
          className="d-flex align-items-center gap-2 flex-wrap my-2 justify-content-start"
          style={{ gap: "8px" }}
        >
          <h5 className="m-0">Tools:</h5>
          {/* {tools &&
            tools.map((tool, i) => {
              // Extract the icon name from "fa-brands fa-<name>"
              const iconName = tool.split("fa-")[1];
              const IconComponent = iconMap[iconName] || FaJs; // Fallback to FaJs
              return iconName in iconMap ? (
                <IconComponent
                  key={i}
                  className="ProjectCard-tool-icon text-dark"
                />
              ) : (
                <img
                  key={i}
                  src={tool}
                  alt="Tool Logo"
                  className="ProjectCard-tool-logo-sm"
                />
              );
            })} */}
          <div className="d-flex ">
            <FaReact style={{ marginRight: "5px" }} />
            <FaNodeJs style={{ marginRight: "5px" }} />
            <FaJs style={{ marginRight: "5px" }} />
            <FaCss3 style={{ marginRight: "5px" }} />
          </div>
        </div>

        {/* Buttons Section */}
        <div
          className="mt-auto d-flex flex-column flex-md-row justify-content-sm-start  check-start justify-content-md-between align-items-center  text-start"
          style={{ gap: "20px" }}
        >
          <button className="button-designing-openings-details mb-3">
            <a
              href={liveSite}
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              View Project
            </a>
          </button>
          <div className="d-flex gap-3 mt-3 mt-md-0 justify-content-sm-start justify-content-md-between">
            {liveSite && (
              <a
                href={liveSite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark d-flex align-items-center"
              >
                <BiLinkExternal className="me-1" /> Open Live Site
              </a>
            )}
            {gitRepo && (
              <a
                href={gitRepo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark d-flex align-items-center"
              >
                <FaGithub className="me-1 " /> Repository
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
