"use client";
import { Globe } from "@/components/ui/globe";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { GalleryVerticalIcon, Icon } from "lucide-react";
import { button } from "@/components/ui/button";
import { IoMdContact } from "react-icons/io";
import EMRHealthSection from "./_emr/healthSection";
import HealthSectionSticky from "./_emr/healthSection";
import { AnimatedGradientButton } from "./_emr/gradientButton";
import { Meteors } from "@/components/ui/meteors";
import { AuroraText } from "@/components/ui/aurora-text";
import { SparklesText } from "@/components/ui/sparkles-text";
import { ScrollProgress } from "@/components/ui/scroll-progress";
import PracticeBenefitsSection from "./_emr/verticalCards";
import { GridPattern } from "@/components/ui/grid-pattern";
import { cn } from "@/lib/utils";
import { ShimmerButton } from "@/components/ui/shimmer-button";
import { TracingBeam } from "./ui/tracing-beam";
import IntuitiveToolsSection from "./_emr/markCard";
import Curealog from "./_emr/EndSection";
import CapabilitiesSection from "./_emr/Capabilities";

gsap.registerPlugin(useGSAP);
const successsList = [
  {
    percent: 98,
    description: "Our industry-leading clean claim submission rate.1",
  },
  {
    percent: 91,
    description:
      "Reduction in document processing time with Document Services AI workflows.2",
  },
  {
    percent: 99,
    description:
      "Average MIPS improvments Activities score of eligible woltrio clinicians vs, 95.96% industy average.3",
  },
  {
    percent: 83,
    description:
      "Of Curealog customers are small practices of 1-5 clinicians.4",
  },
];

function GlobeDemo() {
  // --- MODIFICATION 1: Create a ref for the new container ---
  const laptopContainerRef = useRef(); 
  const dashboardImageRef = useRef(); // Optional: ref for animating the dashboard itself
  
  const cardsRef = useRef();
  const CardIsInView = useInView(cardsRef, { amount: 0.3 });
  const showInView = useRef([]);
  const IsItemInView = useInView(showInView, { amount: 0.1 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDesktop, setIsDesktop] = useState(
    typeof window !== "undefined" ? window.innerWidth > 600 : 500
  );

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollPosition(scrollFraction);
    };
    const handleMouseMove = (e) => {
      const normalizedX = e.clientX / window.innerWidth;
      const normalizedY = -e.clientY / window.innerHeight;

      setMousePosition({ x: normalizedX, y: normalizedY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 600);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  // --- MODIFICATION 2: Animate the container ref ---
  useEffect(() => {
    if (laptopContainerRef.current) {
      const tl = gsap.timeline();
      tl.to(laptopContainerRef.current, {
        duration: 0.2,
        scale: 1.8,
      })
      .to(laptopContainerRef.current, {
        duration: 2,
        scale: 1,
      });

      // Optional: Add a subtle animation to the dashboard image itself
      gsap.fromTo(dashboardImageRef.current, 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.5, delay: 0.5, ease: "power2.out" }
      );
    }
  }, []);

  useEffect(() => {
    const card = cardsRef.current;
    if (card && !CardIsInView && isDesktop) {
      const tl = gsap.timeline();
      tl.to(card, {
        x: -500,
      });
    }
  }, [CardIsInView, isDesktop]);

  useEffect(() => {
    const card = cardsRef.current;
    if (card && CardIsInView) {
      const tl = gsap.timeline();
      tl.to(card, {
        x: 0,
        duration: 1.5,
      });
    }
  }, [CardIsInView, scrollPosition]);
  
  return (
    <div>
      <TracingBeam className="px-6 ">
        <div className=" container ">
          <Meteors number={30} />
          <ScrollProgress className="top-[1px]" />
          <GridPattern
            squares={[
              [4, 4], [5, 1], [8, 2], [5, 3], [5, 5], [10, 10], [12, 15], [15, 10], [10, 15], [15, 10], [10, 15], [15, 10]
            ]}
            className={cn(
              "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
              "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
            )}
          />

          <div className=" min-h-screen !my-16 text-center">
            <p className="font-bold">
              <AuroraText>
                All in one HealhCare EMR Management Project
              </AuroraText>
            </p>
            <h1 className=" text-4xl my-4 !text-white ">Woltrio</h1>
            
            {/* --- MODIFICATION 3: Create the container and add the dashboard image --- */}
            <div 
              ref={laptopContainerRef} 
              className="relative mx-auto w-[70%] h-auto" // Parent is relative
            >
                <img
                    className="h-full w-full object-contain"
                    src={"/img/health/laptop.webp"}
                    alt="laptop"
                />
                <img
                    ref={dashboardImageRef}
                    className="absolute top-[3.5%] left-[14%] w-[73%] h-[83%] object-cover object-top rounded-sm" // Dashboard is absolute
                        src={"/img/health/dashboard.png"} Make sure you have this image in your public folder
                    alt="dashboard display"
                />
            </div>

            <p className="!text-white !pt-10 max-w-3xl max-md:max-w-xl mx-auto">
              Curealog is Woltrio's integrated EHR, medical billing & practice
              management, and patient engagement solution that leverages AI to
              transform your performance.
            </p>
            <div className="flex items-center  justify-center !py-5 md:!flex-row max-md:gap-3 !flex-col gap-x-5 ">
              <button className="border border-white  rounded-full max-md:w-full max-w-sm !text-black bg-white">
                <AnimatedGradientButton text={"Contact Us"} />
              </button>
              <ShimmerButton className="border rounded-full border-white px-4 py-0 max-md:w-full max-w-sm !text-white">
                Request A Demo
              </ShimmerButton>
            </div>
          </div>
          <div>
            <div>
              <h1 className="!text-white !text-2xl md:!text-5xl text-center py-4">
                One solution. One partner.
                <br /> One goal—your success.
              </h1>
            </div>
            <div
              ref={cardsRef}
              className="flex md:!flex-row !flex-col  gap-x-3 "
            >
              {successsList.map((el) => {
                return (
                  <div>
                    <h1 className="!text-white text-sm">{el.percent}%</h1>
                    <p className="!text-white">{el.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <HealthSectionSticky />
          <PracticeBenefitsSection />
          <IntuitiveToolsSection />
          <CapabilitiesSection/>
        </div>
      </TracingBeam>
      <Curealog />
    </div>
  );
}
export default GlobeDemo;












// "use client";
// import { Globe } from "@/components/ui/globe";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import { useEffect, useRef, useState } from "react";
// import { useInView } from "framer-motion";
// import { GalleryVerticalIcon, Icon } from "lucide-react";
// import { button } from "@/components/ui/button";
// import { IoMdContact } from "react-icons/io";
// import EMRHealthSection from "./_emr/healthSection";
// import HealthSectionSticky from "./_emr/healthSection";
// import { AnimatedGradientButton } from "./_emr/gradientButton";
// import { Meteors } from "@/components/ui/meteors";
// import { AuroraText } from "@/components/ui/aurora-text";
// import { SparklesText } from "@/components/ui/sparkles-text";
// import { ScrollProgress } from "@/components/ui/scroll-progress";
// import PracticeBenefitsSection from "./_emr/verticalCards";
// import { GridPattern } from "@/components/ui/grid-pattern";
// import { cn } from "@/lib/utils";
// import { ShimmerButton } from "@/components/ui/shimmer-button";
// import { TracingBeam } from "./ui/tracing-beam";
// import IntuitiveToolsSection from "./_emr/markCard";
// import Curealog from "./_emr/EndSection";
// import CapabilitiesSection from "./_emr/Capabilities";

// gsap.registerPlugin(useGSAP);
// const successsList = [
//   {
//     percent: 98,
//     description: "Our industry-leading clean claim submission rate.1",
//   },
//   {
//     percent: 91,
//     description:
//       "Reduction in document processing time with Document Services AI workflows.2",
//   },
//   {
//     percent: 99,
//     description:
//       "Average MIPS improvments Activities score of eligible woltrio clinicians vs, 95.96% industy average.3",
//   },
//   {
//     percent: 83,
//     description:
//       "Of Curealog customers are small practices of 1-5 clinicians.4",
//   },
// ];

// function GlobeDemo() {
//   // State to control video visibility
//   const [showVideo, setShowVideo] = useState(true);

//   const laptopContainerRef = useRef();
//   const dashboardImageRef = useRef();
//   const cardsRef = useRef();
//   const CardIsInView = useInView(cardsRef, { amount: 0.3 });
//   const showInView = useRef([]);
//   const IsItemInView = useInView(showInView, { amount: 0.1 });
//   const [scrollPosition, setScrollPosition] = useState(0);
//   const [isDesktop, setIsDesktop] = useState(
//     typeof window !== "undefined" ? window.innerWidth > 600 : 500
//   );

//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollTop = window.scrollY;
//       const docHeight =
//         document.documentElement.scrollHeight - window.innerHeight;
//       const scrollFraction = docHeight > 0 ? scrollTop / docHeight : 0;
//       setScrollPosition(scrollFraction);
//     };
//     const handleMouseMove = (e) => {
//       const normalizedX = e.clientX / window.innerWidth;
//       const normalizedY = -e.clientY / window.innerHeight;

//       setMousePosition({ x: normalizedX, y: normalizedY });
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("scroll", handleScroll);
//     handleScroll();

//     return () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   useEffect(() => {
//     const handleResize = () => {
//       setIsDesktop(window.innerWidth > 600);
//     };
//     window.addEventListener("resize", handleResize);
//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   // Animate the container ref after the video is done
//   useEffect(() => {
//     if (!showVideo && laptopContainerRef.current) {
//       const tl = gsap.timeline();
//       tl.to(laptopContainerRef.current, {
//         duration: 0.2,
//         scale: 1.8,
//       }).to(laptopContainerRef.current, {
//         duration: 2,
//         scale: 1,
//       });

//       // Optional: Add a subtle animation to the dashboard image itself
//       gsap.fromTo(
//         dashboardImageRef.current,
//         { y: 50, opacity: 0 },
//         { y: 0, opacity: 1, duration: 1.5, delay: 0.5, ease: "power2.out" }
//       );
//     }
//   }, [showVideo]); // Dependency array ensures this runs when showVideo changes to false

//   useEffect(() => {
//     const card = cardsRef.current;
//     if (card && !CardIsInView && isDesktop) {
//       const tl = gsap.timeline();
//       tl.to(card, {
//         x: -500,
//       });
//     }
//   }, [CardIsInView, isDesktop]);

//   useEffect(() => {
//     const card = cardsRef.current;
//     if (card && CardIsInView) {
//       const tl = gsap.timeline();
//       tl.to(card, {
//         x: 0,
//         duration: 1.5,
//       });
//     }
//   }, [CardIsInView, scrollPosition]);

//   // If showVideo is true, render the video player
//   if (showVideo) {
//     return (
//       <div className="fixed inset-0 w-full h-screen bg-black z-[100] flex items-center justify-center">
//         <video
//           src="/video/health/animation.mp4"
//           autoPlay
//           muted
//           playsInline
//           className="w-full h-full object-cover"
//           onEnded={() => setShowVideo(false)} // Hide video and show main content when ended
//         />
//       </div>
//     );
//   }

//   // Otherwise, render the main content
//   return (
//     <div>
//       <TracingBeam className="px-6 ">
//         <div className=" container ">
//           <Meteors number={30} />
//           <ScrollProgress className="top-[1px]" />
//           <GridPattern
//             squares={[
//               [4, 4], [5, 1], [8, 2], [5, 3], [5, 5], [10, 10], [12, 15],
//               [15, 10], [10, 15], [15, 10], [10, 15], [15, 10],
//             ]}
//             className={cn(
//               "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
//               "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
//             )}
//           />

//           <div className=" min-h-screen !my-16 text-center">
//             <p className="font-bold">
//               <AuroraText>
//                 All in one HealhCare EMR Management Project
//               </AuroraText>
//             </p>
//             <h1 className=" text-4xl my-4 !text-white ">Woltrio</h1>

//             <div
//               ref={laptopContainerRef}
//               className="relative mx-auto w-[70%] h-auto" // Parent is relative
//             >
//               <img
//                 className="h-full w-full object-contain"
//                 src={"/img/health/laptop.webp"}
//                 alt="laptop"
//               />
//               <img
//                 ref={dashboardImageRef}
//                 className="absolute top-[3.5%] left-[14%] w-[73%] h-[83%] object-cover object-top rounded-sm" // Dashboard is absolute
//                 src={"/img/health/dashboard.png"}
//                 alt="dashboard display"
//               />
//             </div>

//             <p className="!text-white !pt-10 max-w-3xl max-md:max-w-xl mx-auto">
//               Curealog is Woltrio's integrated EHR, medical billing & practice
//               management, and patient engagement solution that leverages AI to
//               transform your performance.
//             </p>
//             <div className="flex items-center  justify-center !py-5 md:!flex-row max-md:gap-3 !flex-col gap-x-5 ">
//               <button className="border border-white  rounded-full max-md:w-full max-w-sm !text-black bg-white">
//                 <AnimatedGradientButton text={"Contact Us"} />
//               </button>
//               <ShimmerButton className="border rounded-full border-white px-4 py-0 max-md:w-full max-w-sm !text-white">
//                 Request A Demo
//               </ShimmerButton>
//             </div>
//           </div>
//           <div>
//             <div>
//               <h1 className="!text-white !text-2xl md:!text-5xl text-center py-4">
//                 One solution. One partner.
//                 <br /> One goal—your success.
//               </h1>
//             </div>
//             <div
//               ref={cardsRef}
//               className="flex md:!flex-row !flex-col  gap-x-3 "
//             >
//               {successsList.map((el, index) => {
//                 return (
//                   <div key={index}>
//                     <h1 className="!text-white text-sm">{el.percent}%</h1>
//                     <p className="!text-white">{el.description}</p>
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//           <HealthSectionSticky />
//           <PracticeBenefitsSection />
//           <IntuitiveToolsSection />
//           <CapabilitiesSection />
//         </div>
//       </TracingBeam>
//       <Curealog />
//     </div>
//   );
// }
// export default GlobeDemo;