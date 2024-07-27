
import React, { FC } from "react";
import PricingCard from "./PricingCard";
import BecomeAhost from "./BecomeAHost";
import OurFeaturehost from "./OurFeatureHost";
import FactsSubscription from "./FactsSubscription";
import ProfessionalListing from "./ProfessionalListing";
import HowItwork from "./PaymentMethod";

const MainPage: FC = () => {
  return (
    <div className="container ">
      <div className="flex flex-col justify-center items-center ml-11 mr-11 space-y-12">
        <BecomeAhost />
        <OurFeaturehost />
        <ProfessionalListing/>
        <HowItwork/>
        <PricingCard />
        <FactsSubscription/>
      </div>
    </div>
  );
};

export default MainPage;
