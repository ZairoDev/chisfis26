"use client";
import React, { FC, useEffect, useState } from "react";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType } from "@/data/types";
import Pagination from "@/shared/Pagination";
import TabFilters from "./TabFilters";
import Heading2 from "@/shared/Heading2";
import StayCard2 from "@/components/StayCard2";
import SectionGridFeaturePlaces from "../allgreeceproperties/SectionGridFeaturePlaces";
import {useSearchParams} from "next/navigation";
import { ObjectId } from "mongoose";
import axios from "axios";

export interface SectionGridFilterCardProps {
  className?: string;
  data?: StayDataType[];
  country?: string;
  countryPropertyCount?: number;
}

const DEMO_DATA: StayDataType[] = DEMO_STAY_LISTINGS.filter((_, i) => i < 8);

interface Properties {
  _id: ObjectId;
  userId: string;
  VSID: string;

  propertyType: string;
  placeName: string;
  rentalForm: string;
  numberOfPortions: number;

  street: string;
  postalCode: string;
  city: string;
  state: string;
  country: string;
  center: object;

  portionName: string[];
  portionSize: number[];
  guests: number[];
  bedrooms: number[];
  beds: number[];
  bathroom: number[];
  kitchen: number[];
  childrenAge: number[];

  basePrice: number[];
  weekendPrice: number[];
  monthlyDiscount: number[];
  currency: string;

  generalAmenities: object;
  otherAmenities: object;
  safeAmenities: object;

  smoking: string;
  pet: string;
  party: string;
  cooking: string;
  additionalRules: string[];

  reviews: string[];

  propertyCoverFileUrl: string;
  propertyPictureUrls: string[];
  portionCoverFileUrls: string[];
  portionPictureUrls: string[][];

  night: number[];
  time: number[];
  datesPerPortion: number[][];

  isLive: boolean;
}

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
  data = DEMO_DATA,
  country = "Greece",
  countryPropertyCount = 327,
}) => {

  const [countrySpecificProperties, setCountrySpecificProperties] = useState<Properties[]>();

  useEffect(() => {
    const getProperties = async () => {
      console.log('country: ', country);
      const response = await axios.get(`/api/countryspecificproperties/${country}`);
      if (response.data) {
        setCountrySpecificProperties(response?.data);
      }
    };

    getProperties();

  }, [])

  return (
    <div
      className={`nc-SectionGridFilterCard ${className}`}
      data-nc-id="SectionGridFilterCard"
    >
      <Heading2 heading={`Stays in ${country}`} countryPropertyCount={countryPropertyCount} />
      
      <div className="mb-8 lg:mb-11">
        <TabFilters />
      </div>
      {/* <div className="grid grid-cols-1 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {data.map((stay) => (
          <StayCard2 key={stay.id} data={stay} />
        ))}
      </div> */}
      <SectionGridFeaturePlaces/>
      {/* <div className="flex mt-16 justify-center items-center">
        <Pagination />
      </div> */}
    </div>
  );
};

export default SectionGridFilterCard;
