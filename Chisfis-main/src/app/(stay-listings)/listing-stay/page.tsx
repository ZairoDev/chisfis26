"use client";
import React, { FC, useState, useEffect, useContext } from "react";
import SectionGridFilterCard from "../SectionGridFilterCard";
import { MyContext } from "@/context/propertyContext";
import { PropertyDataType } from "@/data/types";
import { useSearchParams } from "next/navigation";

export interface ListingStayPageProps {}

const ListingStayPage: FC<ListingStayPageProps> = () => {


  const [countryPropertyCount, setCountryPropertyCount] = useState(0);
  const [countryContext, setCountryContext] = useState<
    PropertyDataType | undefined
  >(undefined);
  const context: PropertyDataType | undefined = useContext(MyContext);
  const searchParams = useSearchParams();
  const country: string = searchParams.get("country") || "Greece";

  useEffect(() => {
    setCountryContext(context);
  }, []);

  useEffect(() => {
    let countryCount = 0;
    const contextArray = Array.isArray(context) ? context : [context];
    contextArray.forEach((property) => {
      if (property?.country === country) {
        countryCount++;
      }
    });
    setCountryPropertyCount(countryCount);
  }, [countryContext, context, country])

  return <SectionGridFilterCard className="container pb-24 lg:pb-28" country={country} countryPropertyCount={countryPropertyCount}  />;
};

export default ListingStayPage;
