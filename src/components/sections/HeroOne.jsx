import { sliderProps } from "@/src/common/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimatedSphere from "@components/AnimatedSphere";
import Data from "@data/sections/hero-1.json";
import { RiReactjsFill, RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiPython,
  SiTypescript,
  SiPhp,
  SiDocker,
  SiAmazonaws,
  SiNextdotjs,
  SiMongodb,
  SiLaravel,
  SiFirebase,
  SiNodedotjs,
  SiMysql,
  SiRedis,
  SiPostgresql,
} from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import Threads from "../sphereBack";

const iconMap = [
  RiReactjsFill,
  IoLogoJavascript,
  RiTailwindCssFill,
  SiPython,
  SiTypescript,
  SiPhp,
  SiDocker,
  FaWordpress,
  SiAmazonaws,
  SiNextdotjs,
  SiMongodb,
  SiLaravel,
  SiFirebase,
  SiNodedotjs,
  SiMysql,
  SiRedis,
  SiPostgresql,
];
const HeroOne = () => {
  return (
    <header>
      <div className="mil-hero-1">
        <div className="mil-image-frame">
          <img
            src={Data.bg_image}
            alt="img"
            className="mil-scale-img"
            data-value-1=".5"
            data-value-2="1.2"
            style={{ filter: "grayscale(100%)" }}
          />
          <div className="mil-overay">
            <div
              style={{ width: "100%", height: "100%", position: "relative" }}
            >
              <Threads
                amplitude={1}
                distance={0}
                enableMouseInteraction={true}
              />
            </div>
          </div>
        </div>

        <div className="container container-1">
          <div className="row mil-p-120-0 justify-content-between">
            <div className="col-md-6 col-lg-6">
              <div className="mil-link mil-appearance mil-softened-60 mil-mb-30">
                {Data.subtitle}
              </div>
              <h1 className="mil-light mil-appearance mil-mb-120">
                {Data.title.before}{" "}
                <span className="mil-accent">{Data.title.accent}</span>{" "}
                {Data.title.after}
              </h1>
            </div>
            <div className="col-md-12 col-lg-5 mil-relative">
              <div className="mil-dots mil-appearance" />

              <p
                className="mil-text-lg mi-suptitle mil-appearance mil-mt-55 mil-mb-60"
                dangerouslySetInnerHTML={{ __html: Data.description }}
              />

              <div className="mil-scroll-animation-1 mil-appearance mil-mb-60">
                <i className="fas fa-chevron-down" />
                <i className="fas fa-chevron-down" />
                <i className="fas fa-chevron-down" />
                <i className="fas fa-chevron-down" />
              </div>
            </div>
            {/* <div className="col-md-12 col-lg-5 mil-relative">
              <AnimatedSphere />
            </div> */}
            <div className="col-12">
              <div className="mil-appearance">
                <div className="mil-just-image">
                  <img
                    src={Data.image}
                    alt="img"
                    className="mil-scale-img"
                    data-value-1="1"
                    data-value-2="1.15"
                    style={{ objectPosition: "center 25%" }}
                  />
                </div>
              </div>
            </div>

            <div className="col-12">
              {/* partners */}
              <Swiper
                {...sliderProps.milInfinitySlider}
                className="swiper-container mil-infinite-show"
              >
                {iconMap.map((item, key) => {
                  const IconComponent = item;

                  return (
                    <SwiperSlide
                      key={`hero1-item-${key}`}
                      className="swiper-slide !w-auto"
                    >
                      <a
                        href="#"
                        onClick={(e) => e.preventDefault()}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mil-partner-frame group block" // Keep 'group' for general group behavior if other parts depend on it, or remove if not needed
                      >
                        {IconComponent && (
                          <IconComponent
                            className="text-[4rem] text-gray-400 swiper-hover" // Set initial text color
                            // The hover effect will now be handled by the SCSS on the parent's hover
                            style={{ width: "50px", height: "70px" }}
                          />
                        )}
                      </a>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              {/* partners end */}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default HeroOne;
