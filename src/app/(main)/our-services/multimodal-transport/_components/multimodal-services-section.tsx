"use client";

import { motion, Variants } from "motion/react";
import Image from "next/image";
import { useInView } from "motion/react";
import { useRef } from "react";
import { SectionTitle } from "@/components/shared/text/section-title";
import { SectionDescription } from "@/components/shared/text/section-description";

export function MultiModalServicesSection() {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const isInView1 = useInView(ref1, { once: true, margin: "-100px" });
  const isInView2 = useInView(ref2, { once: true, margin: "-100px" });

  const slideInLeftVariants: Variants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const slideInRightVariants: Variants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <>
    <motion.section ref={ref1} className="w-full py-8 lg:py-24 px-4 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center">
          {/* Image */}
          <motion.div
            className="relative h-64 min-h-64 lg:h-full md:min-h-96"
            variants={slideInLeftVariants}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
          >
            <Image
              src="/fleet/vessel/everglory-img-2.jpg"
              alt="Container ship services"
              fill
              className="object-contain md:object-cover rounded-none"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={slideInRightVariants}
            initial="hidden"
            animate={isInView1 ? "visible" : "hidden"}
          >
            <SectionTitle className="text-[22px] md:text-[26px] 2xl:text-[30px] tracking-tight max-md:max-w-lg max-md:text-center max-md:mx-auto">
              Everglory Multimodal Services: Your single-contract solution
              combining sea, rail, road, and waterway transport for efficient
              India-Bangladesh cargo movement.
            </SectionTitle>
            <SectionDescription className="max-md:text-center">
              We coordinate ocean freight, rail, truck, and ocean transport
              through a single point of accountability. Our multimodal approach
              eliminates coordination complexity, reduces transit times, and
              optimizes costs across the India-Bangladesh corridor. From
              container terminals to inland destinations, we manage every
              handoff, ensuring your cargo moves efficiently through each
              transport leg with complete visibility and control.
            </SectionDescription>
          </motion.div>
        </div>
      </div>
    </motion.section>

  <div className="h-6 lg:h-10" />

  
  <motion.section ref={ref2} className="w-full py-4 lg:py-6 px-4 bg-white">
        <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-8 lg:gap-12 items-center">
          {/* Image */}
          <motion.div
            className="lg:order-1 relative h-64 min-h-64 lg:h-full md:min-h-96"
            variants={slideInRightVariants}
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
          >
            <Image
              src="/fleet/vessel/nepal-butan-northeast pic.jpeg"
              alt="Container ship services"
              fill
              className="object-contain md:object-cover rounded-none lg:order-2"
            />
          </motion.div>

          {/* Text Content */}
          <motion.div
            variants={slideInLeftVariants}
            initial="hidden"
            animate={isInView2 ? "visible" : "hidden"}
          >
            <SectionTitle className="text-[22px] md:text-[26px] 2xl:text-[30px] tracking-tight max-md:max-w-lg max-md:text-center max-md:mx-auto">
              Cross-Border Transit and Trade: Nepal, Bhutan, and North East India via Bangladesh
            </SectionTitle>
            <SectionDescription className="max-md:text-center">
             <span className="font-bold">Nepal:</span>

                    The Agreement on the Movement of Traffic-in-Transit between Bangladesh and Bhutan,
                    signed on March 22, 2023, enables landlocked Bhutan to use Bangladeshi sea, land, and rail 
                    routes for third-country trade, primarily through Chattogram and Mongla ports.
                    This deal streamlines bilateral trade,
                    reduces reliance on Indian ports, and facilitates faster, cost-effective cargo movement.
                    </SectionDescription>
                    <SectionDescription className="max-md:text-center">
                    <span className="font-bold">Bhutan:</span>
                
                    Bangladesh Government has provided transit facilities to Nepal in Chittagong and
                    Mongla Ports. The overland trade route to Bangladesh from Kakarbhitta-Phulbari-Banglabandha 
                    has been operational since September 1997. The Government of Bangladesh agreed on 10 August 2020 to include Rohanpur
                    as the Port of Call in Nepal-Bangladesh Transit Agreement. On 22-23 March 2021, Nepal and Bangladesh signed an Exchange 
                    of Letters on the designation of Rohanpur-Singhabad railway route as an 
                    additional transit route for movement of traffic-in-transit between Nepal and Bangladesh and also for third-country
                    transit trade.
                    </SectionDescription>
                  <SectionDescription className="max-md:text-center">
                    <span className="font-bold">North East India:</span>
                      India-Bangladesh transit enables movement of goods via rail, road, and water,
                      connecting mainland India to its Northeastern states through Bangladesh (using Chittagong/Mongla ports and Akhaura/Bibirbazar border points).
                      While offering revenue for Bangladesh. 
            </SectionDescription>
          </motion.div>
        </div>
      </div>
    </motion.section>
    </>
  );
}
