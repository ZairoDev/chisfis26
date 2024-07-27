
import React from "react";
import Image from "next/image";
import listyourproperty from "../../images/List_your_properties_1.png";

const BecomeAHost: React.FC = () => {
  return (
    <div className="flex flex-col mt-5 md:flex-row md:gap-10">
      {/* Left side with content */}
      <div className=" md:w-1/2 p-4">
        <h2 className="text-3xl font-semibold text-neutral-900 md:text-4xl xl:text-5xl dark:text-neutral-100">
          Become A Host
        </h2>
        <p className="mt-7 text-base text-justify text-neutral-600 dark:text-neutral-400 xl:text-lg">
          We provide short term holiday rentals with easy ways of bookings.
          By providing luxurious holiday homes with basic touches like balcony,
          refrigerator, parking, air conditioner and many more facilities,
          we continue to offer the best to our customers.
          We also give travellers an option, whether they want an entire apartment
          for rent or a private room. We have listings which include Holiday cottages,
          Holiday apartments, Country cottages, Holiday homes and Villas in Europe,
          Asia and United States
        </p>
      </div>

      {/* Right side with image */}
      <div className="md:w-1/2  flex justify-center items-center">
        {/* <Image src={listyourproperty} alt="List your property" height={600} width={600} className="max-w-full h-auto" /> */}
        <img src={listyourproperty.src} alt="List your property" className="max-w-full h-auto w-auto" />
      </div>
    </div>
  );
};

export default BecomeAHost;
