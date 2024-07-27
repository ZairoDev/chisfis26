
import React from "react";

interface Feature {
  title: string;
  description: string;
}

const OurFeatureHost: React.FC = () => {
  const features: Feature[] = [
    {
      title: "Assistance",
      description: "We are available on every step when you need us",
    },
    {
      title: "Cost Effective",
      description: "We serve quality services in less investment",
    },
    {
      title: "Secure Investment",
      description: "You will get booking or your invested amount",
    },
    {
      title: "Guaranteed bookings",
      description: "Host get assured reservations according to their subscription",
    },
    {
      title: "Best marketing strategies",
      description: "Best method to sky rocket your rental business.",
    },
    {
      title: "Secure payment methods",
      description: "We assure safe methods through secure online payment portals",
    },
    {
      title: "Rental climbing",
      description: "Get maximum number of renters for your rental property",
    },
    {
      title: "Attractive personal website",
      description: "For long term success of your business we also provide attractive professional website ",
    },
  ];

  return (
    <div className="m-5">
      <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100 mb-8">
        Our Features
      </h2>
      <div className="flex flex-col md:flex-row gap-8">
        <div className="flex flex-col gap-6 md:w-1/2">
          {features.slice(0, 4).map((feature, index) => (
            <div key={index} className="p-4 flex flex-col h-full justify-between">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                {feature.title}
              </h3>
              <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-6 md:w-1/2">
          {features.slice(4).map((feature, index) => (
            <div key={index} className="p-4 flex flex-col h-full justify-between">
              <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
                {feature.title}
              </h3>
              <p className="mt-2 text-base text-neutral-600 dark:text-neutral-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurFeatureHost;
