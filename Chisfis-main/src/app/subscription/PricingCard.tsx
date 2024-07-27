import { CheckIcon } from "@heroicons/react/24/solid";
import React, { FC } from "react";
import ButtonPrimary from "@/shared/ButtonPrimary";
import ButtonSecondary from "@/shared/ButtonSecondary";

export interface PageSubcriptionProps {}

export interface PricingItem {
  isPopular: boolean;
  name: string;
  pricing: string;
  desc: string;
  per: string;
  features: string[];
}

const pricings: PricingItem[] = [
  {
    isPopular: false,
    name: "Action  Plan",
    pricing: "€299",
    per: "/12 months",
    features: ["12 Months Listing",
      " Personal Account Manager",
      "34 HD photograph",
      "Unlimited Description",
      "Upload Property Video",
      "Social Media Marketing",
      "2 Promotion Reports ",
      "10 booking inquiries",
      " 2 reservations guaranteed (Each Booking Of 1 to 3 Weeks)",
     ],
    desc: ` Literally you probably haven't heard of them jean shorts.`,
  },
  {
    isPopular: true,
    name: "Game Plan",
    pricing: "€399",
    per: "/18 months",
    features: [
      "18 Months Listing",
      "Personal Account Manager",
      "Unlimited HD photograph",
      "Unlimited Description",
      "Upload Property Video",
        "Social Media Marketing" ,
        "3 Promotion Reports" ,
      "15 booking inquiries",
      "3 reservations guaranteed (Each Booking Of 1 to 3 Weeks)"

    ],
    desc: ` Literally you probably haven't heard of them jean shorts.`,
  },
  {
    isPopular: false,
    name: "Master Plan",
    pricing: "€499",
    per: "/24 months",
    features: [
     "24 Months Listing",
     "  Personal Account Manager",
     " Unlimited HD photograph",
     "Unlimited Description",
     "Upload Property Video",
     " Social Media Marketing",
     " 4 Promotion Reports ",
     "20 booking inquiries",
     "4 reservations guaranteed (Each Booking Of 1 to 3 Weeks)",

    ],
    desc: ` Literally you probably haven't heard of them jean shorts.`,
  },
];

const PageSubcription: FC<PageSubcriptionProps> = () => {
  const renderPricingItem = (pricing: PricingItem, index: number) => {
    return (
      <div
        key={index}
        className={`h-full relative px-6 py-8 rounded-3xl border-2 flex flex-col overflow-hidden ${
          pricing.isPopular
            // ? "border-primary-500"
            ? "border-orange-500"
            : "border-neutral-100 dark:border-neutral-700"
        }`}
      >
        {pricing.isPopular && (
          <span className="bg-orange-500 text-white px-3 py-1 tracking-widest text-xs absolute right-3 top-3 rounded-full z-10">
            POPULAR
          </span>
        )}
        <div className="mb-8">
          <h3 className="block text-sm uppercase tracking-widest text-neutral-6000 dark:text-neutral-300 mb-2 font-medium">
            {pricing.name}
          </h3>
          <h2 className="text-xl leading-none flex items-center text-neutral-900 dark:text-neutral-300">
            <span>{pricing.pricing}</span>
            <span className="text-lg ml-1 font-normal text-neutral-500">
              {pricing.per}
            </span>
          </h2>
        </div>
        <nav className="space-y-4 mb-8">
          {pricing.features.map((item, index) => (
            <li className="flex items-center" key={index}>
              <span className="mr-4 inline-flex flex-shrink-0 text-primary-6000">
                <CheckIcon className="w-5 h-5" aria-hidden="true" />
              </span>
              <span className="text-neutral-700 dark:text-neutral-300">
                {item}
              </span>
            </li>
          ))}
        </nav>
        <div className="flex flex-col mt-auto">
          {pricing.isPopular ? (
            <ButtonPrimary>Know More</ButtonPrimary>
          ) : (
            <ButtonSecondary>
              <span className="font-medium">Know More</span>
            </ButtonSecondary>
          )}
          {/* <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-3">
            {pricing.desc}
          </p> */}
        </div>
      </div>
    );
  };

  return (
    <div className={`nc-PageSubcription container pb-24 lg:pb-32 `}>
      <header className="text-center max-w-2xl mx-auto my-20">
        <h2 className="flex items-center text-3xl leading-[115%] md:text-5xl md:leading-[115%] font-semibold text-neutral-900 dark:text-neutral-100 justify-center">
          <span className="mr-4 text-3xl md:text-4xl leading-none">💎</span>
          Subscription
        </h2>
        <span className="block text-sm mt-2 text-neutral-700 sm:text-base dark:text-neutral-200">
        Pricing that suits your property of any kind
        </span>
      </header>
      <section className="text-neutral-600 text-sm md:text-base overflow-hidden">
        <div className="grid lg:grid-cols-3 gap-5 xl:gap-8">
          {pricings.map(renderPricingItem)}
        </div>
      </section>
    </div>
  );
};

export default PageSubcription;