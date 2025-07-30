import PageBanner from "@components/PageBanner";
import Layouts from "@layouts/Layouts";

import Contact from "@components/Contact";

const Team = () => {
  const Content = {
    subtitle: "Team Members",
    title: "Meet Our <br />Creative Team",
    description:
      "Discover our talented team of innovators, bringing fresh ideas and expertise. Passion drives us to create stunning designs with precision and care, ensuring every project shines. Meet the minds behind your success today.",
    items: [
      {
        image: "img/team/1.jpg",
        name: "Yasir Khan",
        role: "Co-Chief Executive Officer",
      },
      {
        image: "img/team/2.jpg",
        name: "Ehtisham Ilyas",
        role: "Director Of Woltrio ",
      },
    ],
    hr: [
      {
        image: "img/team/4.jpeg",
        name: "Adil Janjua",
        role: "HR Manager & Businness Development",
      },
    ],
    web: [
      {
        image: "img/team/zain.jpg",
        name: "Zain UL Emaan",
        role: "Backend developer",
      },
      {
        image: "img/team/talha.jpg",
        name: "Muhammad Talha",
        role: "MERN/NEXT.js Developer/PHP",
      },
      ,
      {
        image: "img/team/naveed.jpeg",
        name: "Naveed Zafar",
        role: "MERN/NEXT.js Developer",
      },
    ],
    app: [
      {
        image: "img/team/waqas.jpg",
        name: "Waqas Hussain",
        role: "Mobile Application Developer",
      },
    ],
    animators: [
      {
        image: "img/team/raja.jpg",
        name: "Raja Haris",
        role: "Video editor",
      },
      {
        image: "img/team/raja2.jpg",
        name: "Raja Arwan",
        role: "Freelance Video Editor",
      },
      {
        image: "img/team/adel.jpg",
        name: "Muhammad Adeel",
        role: "3d & 2D Animator",
      },

      {
        image: "img/team/asjal.jpg",
        name: "Ajsal Faisal",
        role: "Mobile Application Developer",
      },
    ],
  };

  return (
    <Layouts>
      <PageBanner pageImage={"img/content/3.jpg"} pageTitle={"Team"} />

      {/* team */}
      <div className="container mil-content-frame mil-appearance mil-p-120-90">
        <div className="row justify-content-between mil-mb-120">
          <div className="col-lg-5">
            <span className="mil-link mil-softened-60 mil-appearance mil-mb-30">
              {Content.subtitle}
            </span>
            <h3
              className="mil-appearance mil-mb-30"
              dangerouslySetInnerHTML={{ __html: Content.title }}
            />
          </div>
          <div className="col-lg-6">
            <p className="mil-appearance mil-mt-55-adapt mil-mb-30">
              {Content.description}
            </p>

            <div className="mil-deco mil-appearance"></div>
          </div>
        </div>

        <div className="row justify-content-center">
          <h3 className="mil-appearance mil-mb-30 justify-content-center d-flex">
            Our Directors
          </h3>
          {Content.items.map((item, key) => (
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              key={`team-item-${key}`}
            >
              {/* team card */}
              <div className="mil-card-1 mil-scale-down-trigger mil-accent-trigger mil-appearance mil-mb-30">
                <div className="mil-cover mil-long">
                  <div className="mil-image-frame">
                    {/* portrait */}
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ objectPosition: "top" }}
                    />
                  </div>
                </div>
                <div className="mil-overlay mil-with-bg mil-text-center">
                  <div className="mil-description">
                    {/* name */}
                    <h5>{item.name}</h5>
                    {/* post */}
                    <span className="mil-link mil-softened-50">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
              {/* team card end */}
            </div>
          ))}
        </div>
        <div className="row justify-content-center mt-5">
          <h3 className="mil-appearance mil-mb-30 justify-content-center d-flex">
            HR
          </h3>
          {Content.hr.map((item, key) => (
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              key={`team-item-${key}`}
            >
              {/* team card */}
              <div className="mil-card-1 mil-scale-down-trigger mil-accent-trigger mil-appearance mil-mb-30">
                <div className="mil-cover mil-long">
                  <div className="mil-image-frame">
                    {/* portrait */}
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ objectPosition: "top" }}
                    />
                  </div>
                </div>
                <div className="mil-overlay mil-with-bg mil-text-center">
                  <div className="mil-description">
                    {/* name */}
                    <h5>{item.name}</h5>
                    {/* post */}
                    <span className="mil-link mil-softened-50">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
              {/* team card end */}
            </div>
          ))}
        </div>
        <div className="row justify-content-center mt-5">
          <h3 className="mil-appearance mil-mb-30 justify-content-center d-flex">
            Web Developers
          </h3>
          {Content.web.map((item, key) => (
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              key={`team-item-${key}`}
            >
              {/* team card */}
              <div className="mil-card-1 mil-scale-down-trigger mil-accent-trigger mil-appearance mil-mb-30">
                <div className="mil-cover mil-long">
                  <div className="mil-image-frame">
                    {/* portrait */}
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ objectPosition: "top" }}
                    />
                  </div>
                </div>
                <div className="mil-overlay mil-with-bg mil-text-center">
                  <div className="mil-description">
                    {/* name */}
                    <h5>{item.name}</h5>
                    {/* post */}
                    <span className="mil-link mil-softened-50">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
              {/* team card end */}
            </div>
          ))}
        </div>
        <div className="row justify-content-center mt-5">
          <h3 className="mil-appearance mil-mb-30 justify-content-center d-flex">
            App Developers
          </h3>
          {Content.app.map((item, key) => (
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              key={`team-item-${key}`}
            >
              {/* team card */}
              <div className="mil-card-1 mil-scale-down-trigger mil-accent-trigger mil-appearance mil-mb-30">
                <div className="mil-cover mil-long">
                  <div className="mil-image-frame">
                    {/* portrait */}
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ objectPosition: "top" }}
                    />
                  </div>
                </div>
                <div className="mil-overlay mil-with-bg mil-text-center">
                  <div className="mil-description">
                    {/* name */}
                    <h5>{item.name}</h5>
                    {/* post */}
                    <span className="mil-link mil-softened-50">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
              {/* team card end */}
            </div>
          ))}
        </div>
        <div className="row justify-content-center mt-5">
          <h3 className="mil-appearance mil-mb-30 justify-content-center d-flex">
            3D & 2D Animators
          </h3>
          {Content.animators.map((item, key) => (
            <div
              className="col-xl-3 col-lg-4 col-md-6"
              key={`team-item-${key}`}
            >
              {/* team card */}
              <div className="mil-card-1 mil-scale-down-trigger mil-accent-trigger mil-appearance mil-mb-30">
                <div className="mil-cover mil-long">
                  <div className="mil-image-frame">
                    {/* portrait */}
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{ objectPosition: "top" }}
                    />
                  </div>
                </div>
                <div className="mil-overlay mil-with-bg mil-text-center">
                  <div className="mil-description">
                    {/* name */}
                    <h5>{item.name}</h5>
                    {/* post */}
                    <span className="mil-link mil-softened-50">
                      {item.role}
                    </span>
                  </div>
                </div>
              </div>
              {/* team card end */}
            </div>
          ))}
        </div>
      </div>
      {/* team end */}

      <Contact />
    </Layouts>
  );
};
export default Team;
