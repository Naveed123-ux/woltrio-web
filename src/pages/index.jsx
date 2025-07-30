import React from "react";
import Layouts from "@layouts/Layouts";
import dynamic from "next/dynamic";

import { getSortedPostsData } from "@library/posts";

import HeroOneSection from "@components/sections/HeroOne";
import AboutSection from "@components/sections/About";
import ServicesSection from "@components/sections/Services";
import TeamSection from "@components/sections/Team";
import VideoSection from "@components/sections/Video";
import SubscribeSection from "@components/sections/Subscribe";
import Contact from "../components/Contact";
import LatestPostsSection from "@components/sections/LatestPosts";
import AboutTwoSection from "@components/sections/AboutTwo";
import TechSection from "@components/sections/Tech";

const TestimonialSlider = dynamic(
  () => import("@components/sliders/Testimonial"),
  { ssr: true }
);

const Home1 = (props) => {
  return (
    <Layouts transparent>
      <HeroOneSection />
      <AboutSection />
      {/* <TechSection /> */}
      <ServicesSection />
      {/* <AboutTwoSection /> */}
      <TeamSection />
      {/* <VideoSection /> */}
      <TestimonialSlider />
      <Contact />
      {/* <LatestPostsSection posts={props.posts} /> */}
      <SubscribeSection />
    </Layouts>
  );
};
export default Home1;

export async function getStaticProps() {
  const allPosts = getSortedPostsData();

  return {
    props: {
      posts: allPosts,
    },
  };
}
