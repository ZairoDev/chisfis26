import React, { FC } from "react";
import Heading from "@/shared/Heading";

export interface Statistic {
  id: string;
  heading: string;
  subHeading: string;
}

const FOUNDER_DEMO: Statistic[] = [
  {
    id: "1",
    heading: "4.5k Property",
    subHeading:
      "Articles have been public around the world ",
  },
  {
    id: "2",
    heading: "Millions of Guest",
    subHeading: "Registered users account",
  },
  {
    id: "3",
    heading: "Short term / Long term rentals",
    subHeading:
      "Countries and regions have our presence",
  },
];

export interface SectionStatisticProps {
  className?: string;
}

const FactsSubscription: FC<SectionStatisticProps> = ({ className = "" }) => {
  return (
    <div className={`nc-SectionStatistic relative bottom-12 ${className} mb-4`}>
      <Heading
        desc=" We’re impartial and independent, and every day we create distinctive,
          world-class programmes and content"
      >
        {/* {/ 🚀 Fast  /} */}
        Facts
      </Heading>
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8">
        {FOUNDER_DEMO.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800"
          >
            {/* {/ <h3 className="text-sm font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200"> /} */}
            <h3 className="text-xl font-bold">

              {item.heading}
            </h3>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
              {item.subHeading}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FactsSubscription;