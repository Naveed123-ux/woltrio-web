import { useState } from "react";
import Link from "next/link";

const jobs = [
  {
    id: 1,
    category: "Front End Developer",
    company: "OnSite (Pakistan)",
    title: "Product Manager",
    description:
      "Are you a creative designer with a passion for user-centric designs? Collaborate with us to build intuitive interfaces and shape engaging digital experiences.",
  },
  {
    id: 2,
    category: "Back End Developer",
    company: "OnSite (Pakistan)",
    title: "Backend Engineer",
    description:
      "Looking for an experienced backend developer to build robust server-side applications and APIs.",
  },
  {
    id: 3,
    category: "Animation",
    company: "OnSite (Pakistan)",
    title: "3D Animator",
    description:
      "Join our creative team to create stunning 3D animations for various projects.",
  },
  {
    id: 4,
    category: "Video Editing",
    company: "OnSite (Pakistan)",
    title: "Video Editor",
    description:
      "Seeking a talented video editor to create compelling visual content.",
  },
  {
    id: 5,
    category: "Mobile App",
    company: "Woltrio OnSite (Pakistan)",
    title: "Mobile Developer",
    description:
      "Create innovative mobile applications for iOS and Android platforms.",
  },
];

const categories = [
  "ALL",
  "Front End Developer",
  "Back End Developer",
  "Animation",
  "Video Editing",
  "Mobile App",
];

function JobListings() {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredJobs =
    selectedCategory === "ALL"
      ? jobs
      : jobs.filter((job) => job.category === selectedCategory);

  return (
    <div className="container my-5">
      {/* Categories Navigation */}
      <nav className="nav nav-pills  mb-4 gap-2 nav-bar-styling">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`flex-sm-fill button-designing-openings text-sm-center nav-link ${
              selectedCategory === category ? "active" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </nav>

      {/* Job Cards Grid */}
      <div className="d-flex flex-wrap justify-content-center">
        {filteredJobs.map((job) => (
          <div key={job.id} className="col-md-3 m-4 card-styled-1 d-flex">
            <div className="card h-100 flex-grow-1">
              <div className="card-body">
                {/* Company Logo */}
                <div className="company-logo mb-3">
                  <svg
                    className="bi bi-code-square"
                    width="2em"
                    height="2em"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z"
                      clipRule="evenodd"
                    />
                    <path
                      fillRule="evenodd"
                      d="M6.854 4.646a.5.5 0 010 .708L4.207 8l2.647 2.646a.5.5 0 01-.708.708l-3-3a.5.5 0 010-.708l3-3a.5.5 0 01.708 0zm2.292 0a.5.5 0 000 .708L11.793 8l-2.647 2.646a.5.5 0 00.708.708l3-3a.5.5 0 000-.708l-3-3a.5.5 0 00-.708 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                {/* Company Name */}
                <h6 className="card-subtitle mb-2 text-muted">{job.company}</h6>

                {/* Job Title */}
                <h5 className="card-title">{job.title}</h5>

                {/* Job Description */}
                <p className="card-text text-dark">{job.description}</p>
              </div>
              <div className="card-footer bg-transparent border-top-0">
                <Link
                  href="/form" // Changed from 'to' to 'href'
                  onClick={(e) => {
                    e.preventDefault(); // Prevent default navigation
                    window.scrollTo(0, 0); // Scroll to top
                    window.location.href = "/form"; // Manually navigate
                  }}
                >
                  <button className="button-designing-openings-details">
                    Job Details
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobListings;
