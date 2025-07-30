import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const navigation = () => {
  gsap.registerPlugin(ScrollTrigger);

  const showAnim = gsap
    .from(".mil-top-panel.mil-animated", {
      yPercent: -100,
      paused: true,
      duration: 0.4,
    })
    .progress(1);

  ScrollTrigger.create({
    start: "top top",
    end: 99999999,
    onUpdate: (self) => {
      self.direction === -1 ? showAnim.play() : showAnim.reverse();
    },
  });

  // Always use black background
  const showColor = document.querySelectorAll(
    ".mil-top-panel.mil-transparent-nav"
  );

  showColor.forEach((section) => {
    gsap.set(section, {
      backgroundColor: "#000000", // pure black
    });
  });
};
