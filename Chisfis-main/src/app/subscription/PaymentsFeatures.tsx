import React, { FC } from "react";
import HIW1img from "@/images/HIW1.png";
import HIW2img from "@/images/HIW2.png";
import HIW3img from "@/images/HIW3.png";
import VectorImg from "@/images/VectorHIW.svg";
import Image, { StaticImageData } from "next/image";
// import Heading from "@/shared/Heading";

export interface SectionHowItWorkProps {
  className?: string;
  data?: {
    id: number;
    title: string;
    desc: string;
    img: StaticImageData;
    imgDark?: StaticImageData;
  }[];
}

const DEMO_DATA: SectionHowItWorkProps["data"] = [
  {
    id: 1,
    img: HIW1img,
    title: "No commission",
    desc: "No hidden charges or commissions on Vacation Saga",
  },
  {
    id: 2,
    img: HIW2img,
    title: "Direct Payment",
    desc: "Get paid directly from the guest in your bank account",
  },
  {
    id: 3,
    img: HIW3img,
    title: "Stay Connected ",
    desc: "Renew your subscription once it gets expired",
  },
];

const SectionHowItWork: FC<SectionHowItWorkProps> = ({
  className = "",
  data = DEMO_DATA,
}) => {
  return (
       <div className=" mt-12 ">
        {/* <div
      className={`nc-SectionHowItWork    ${className}`}
      data-nc-id="SectionHowItWork"
    > */}
      {/* <Heading isCenter desc="Keep calm & travel on"> */}
      {/* <Heading isCenter>
        3 easy saga mantra
      </Heading>  */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl md:text-4xl font-semibold">3 Easy Saga Mantra</h2>
      </div>
      <div className="mt-15 relative grid md:grid-cols-3 gap-20">
        {/* <Image
          className="hidden md:block absolute inset-x-0 top-10"
          src={VectorImg}
          alt=""
        /> */}
        <img
          className="hidden md:block absolute inset-x-0 top-10"
          src={VectorImg}
          alt=""
        />
        {data.map((item) => (
          <div
            key={item.id}
            className="relative flex flex-col items-center max-w-xs mx-auto"
          >
            {item.imgDark ? (
              <>
                <img
                  className="dark:hidden block mb-8 max-w-[180px] mx-auto"
                  src={item.img.src}
                  alt=""
                />
                <img
                  alt=""
                  className="hidden dark:block mb-8 max-w-[180px] mx-auto"
                  src={item.imgDark.src}
                />
              </>
            ) : (
              <img
                alt=""
                className="mb-8 max-w-[180px] mx-auto"
                src={item.img.src}
              />
            )}
            <div className="text-center mt-auto">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <span className="block mt-5 text-neutral-500 dark:text-neutral-400">
                {item.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
    //  </div>
  );
};

export default SectionHowItWork;

