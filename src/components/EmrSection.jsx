'use client'
import { Globe } from "@/components/ui/globe"
import gsap from "gsap"
import { useGSAP } from '@gsap/react';
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

gsap.registerPlugin(useGSAP);
const successsList = [
  { percent: 98, description: "Our industry-leading clean claim submission rate.1" },
  { percent: 91, description: "Reduction in document processing time with Document Services AI workflows.2" },
  { percent: 99, description: "Average MIPS improvments Activities score of eligible woltrio clinicians vs, 95.96% industy average.3" },
  { percent: 83, description: "Of Curealog customers are small practices of 1-5 clinicians.4" },

]




function GlobeDemo() {
  const laptopImage = useRef();
  const cardsRef = useRef()
  const CardIsInView = useInView(cardsRef, { amount: 0.3 })
  const showInView = useRef([])
  const IsItemInView = useInView(showInView, { amount: 0.1 })
  const [scrollPosition, setScrollPosition] = useState(0)
 const [isDesktop, setIsDesktop] = useState(typeof window !=='undefined'?window.innerWidth > 600:500);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollFraction = docHeight > 0 ? scrollTop / docHeight : 0;
      setScrollPosition(scrollFraction);
    };
    const handleMouseMove = (e) => {
      const normalizedX = e.clientX / window.innerWidth;
      const normalizedY = - e.clientY / window.innerHeight;

      setMousePosition({ x: normalizedX, y: normalizedY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // set initial value

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll)
    };
  }, []);

 
  // 2. Effect to update the state when the window is resized
  useEffect(() => {
    // Handler to call on window resize
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 600);
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  useEffect(() => {

    if (laptopImage.current) {
      const tl = gsap.timeline()
      tl.to(laptopImage.current, {
        duration: 0.2,
        scale: 1.8
      })

        .to(laptopImage.current, {
          duration: 2,
          scale: 1
        })
    }
  }, []);
  useEffect(() => {
    const card = cardsRef.current;
    // Only run the animation if it's desktop view
    if (card && !CardIsInView && isDesktop) {
      const tl = gsap.timeline();
      tl.to(card, {
        x: -500,
      });
    }
  }, [CardIsInView, isDesktop]);
  useEffect(() => {
    const card = cardsRef.current
    if (card && CardIsInView) {
      // const currentX = gsap.getProperty(card,"x")
      const tl = gsap.timeline()
      tl.to(card, {
        x: 0,
        duration: 1.5
      })
    }
    // if(CardIsInView){
    // const currentX = gsap.getProperty(card,"x")

    //      const tl = gsap.timeline()
    //     tl.to(card, {
    //         x: scrollPosition*500
    //     })
    // }
  }, [CardIsInView, scrollPosition])
  return (
    <TracingBeam className="px-6 ">
     
      <div className=" container ">
        <Meteors number={30} />
        <ScrollProgress className="top-[1px]" />
        <GridPattern
          squares={[
            [4, 4],
            [5, 1],
            [8, 2],
            [5, 3],
            [5, 5],
            [10, 10],
            [12, 15],
            [15, 10],
            [10, 15],
            [15, 10],
            [10, 15],
            [15, 10],
          ]}
          className={cn(
            "[mask-image:radial-gradient(400px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
          )}
        />

        <div className=" min-h-screen !my-16 text-center">
          {/* <h1>Scroll Position: {scrollPosition.toFixed(2)}</h1> */}
          <p className="font-bold">
            <AuroraText>
              All in one HealhCare EMR Management Project
            </AuroraText>
          </p>
          <h1 className=" text-4xl my-4 !text-white ">


            Woltrio

          </h1>
          <img className="h-full mx-auto w-[70%] object-contain" ref={laptopImage} src={"/img/health/laptop.webp"} alt="laptop" />
          <p className="!text-white !pt-10 max-w-3xl max-md:max-w-xl mx-auto">

            Curealog is Woltrio's integrated EHR, medical billing & practice management, and patient engagement solution that leverages AI to transform your performance.
          </p>
          <div className="flex items-center  justify-center !py-5 md:!flex-row max-md:gap-3 !flex-col gap-x-5 ">
            <button className="border border-white  rounded-full max-md:w-full max-w-sm !text-black bg-white"><AnimatedGradientButton text={"Contact Us"} /></button>
            <ShimmerButton className="border rounded-full border-white px-4 py-0 max-md:w-full max-w-sm !text-white">Request A Demo</ShimmerButton>
          </div>
        </div>
        <div>
          <div>
            <h1 className="!text-white !text-2xl md:!text-5xl text-center py-4">
              One solution. One partner.<br /> One goal—your success.
            </h1>
          </div>
          <div ref={cardsRef} className="flex md:!flex-row !flex-col  gap-x-3 ">
            {successsList.map(el => {
              return <div>
                <h1 className="!text-white text-sm">{el.percent}%</h1>
                <p className="!text-white">{el.description}</p>
              </div>
            })}
          </div>
        </div>
        <HealthSectionSticky />
        <PracticeBenefitsSection />
        <IntuitiveToolsSection />

      </div >
    </TracingBeam>
  )
}
export default GlobeDemo