"use client";
import React from "react";
import { ReactNode } from "react";

export interface Heading2Props {
  heading?: ReactNode;
  subHeading?: ReactNode;
  className?: string;
  countryPropertyCount?: number;
}

const Heading2: React.FC<Heading2Props> = ({
  className = "",
  heading = "Stays in Greece",
  subHeading,
  countryPropertyCount = 113,
}) => {

  // const greeceTotalProperties = localStorage.getItem('greeceTotalProperties');

  return (
    <div className={`mb-12 lg:mb-16 ${className}`}>
      <h2 className="text-4xl font-semibold">{heading}</h2>
      {subHeading ? (
        subHeading
      ) : (
        <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
          {countryPropertyCount} stays
          {/* <span className="mx-2">·</span>
          Aug 12 - 18 */}
          {/* <span className="mx-2">·</span>2 Guests */}
        </span>
      )}
    </div>
  );
};

export default Heading2;
