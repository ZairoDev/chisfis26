"use client";
import React, { FC, useEffect, useState } from "react";
import GallerySlider from "@/components/GallerySlider";
import { DEMO_STAY_LISTINGS } from "@/data/listings";
import { StayDataType, PropertyDataType } from "@/data/types";
import StartRating from "@/components/StartRating";
import BtnLikeIcon from "@/components/BtnLikeIcon";
import SaleOffBadge from "@/components/SaleOffBadge";
import Badge from "@/shared/Badge";
import Link from "next/link";
import axios from "axios";
import CustomGallerySlider from "@/components/CustomGallerySlider";

export interface StayCard2Props {
  className?: string;
  data?: StayDataType;
  size?: "default" | "small";
  propertyData?: PropertyDataType;
  index?: number;
}

interface Properties {
  _id: string;
  userId: string;

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

const DEMO_DATA = DEMO_STAY_LISTINGS[0];

const StayCard2: FC<StayCard2Props> = ({
  size = "default",
  className = "",
  data = DEMO_DATA,
  index = 0,
}) => {
  const {
    galleryImgs,
    listingCategory,
    address,
    title,
    // bedrooms,
    href,
    like,
    saleOff,
    isAds,
    price,
    reviewStart,
    reviewCount,
    id,
  } = data;

  const [GreeceProperties, setGreeceProperties] = useState<Properties[]>([]);

  const fetchProperties = async () => {
    console.log("fetching properties....");
    const response = await axios.get("/api/properties");
    console.log("Properties in Greece: ", response);
    setGreeceProperties(response?.data);
  };

  useEffect(() => {
    console.log("called useEffect");
    fetchProperties();
  }, []);
  console.log("greece", GreeceProperties ? GreeceProperties : "no data");

  const {
    _id,
    userId,
    propertyType,
    placeName,
    rentalForm,
    numberOfPortions,
    portionName,
    portionSize,
    city,
    postalCode,
    state,
    country,
    propertyCoverFileUrl,
    portionPictureUrls,
    portionCoverFileUrls,
    propertyPictureUrls,
    monthlyDiscount,
    bedrooms,
    beds,
    night,
    time,
    datesPerPortion,
    basePrice,
    // } = GreeceProperties[index === 4 ? 5: index] || {};
  } = GreeceProperties[index] || {};
  console.log(
    index,
    _id,
    userId,
    propertyType,
    placeName,
    rentalForm,
    numberOfPortions,
    propertyCoverFileUrl,
    portionPictureUrls,
    portionCoverFileUrls,
    propertyPictureUrls,
    bedrooms,
    beds,
    night,
    time,
    datesPerPortion
  );

  const customHref = `/listing-stay-detail/${_id}`;
  const customRoute = { pathname: "/listing-stay-detail/[id]", query: { id: _id } };


  const renderSliderGallery = () => {
    return (
      <Link
      href={{
        pathname: "/listing-stay-detail",
        query: { id: _id },
      }}
      key={index}
    >
      <div className="relative w-full">
        <CustomGallerySlider
          uniqueID={`StayCard2_${id}`}
          ratioClass="aspect-w-12 aspect-h-11"
          galleryImgs={galleryImgs}
          imageClass="rounded-lg"
          // href={href}
          href={`/listing-stay-detail?id=${_id}`}
          propertyPictureUrls={propertyPictureUrls}
        />
        <BtnLikeIcon isLiked={like} className="absolute right-3 top-3 z-[1]" />
        {/* {saleOff && <SaleOffBadge className="absolute left-3 top-3" />} */}
        {/* {monthlyDiscount?.length && (
          <SaleOffBadge
            className="absolute left-3 top-3"
            discount={monthlyDiscount[0]}
          />
        )} */}
      </div>
      </Link>
    );
  };

  const renderContent = () => {
    return (
      <Link
        href={{
          pathname: "/listing-stay-detail",
          query: { id: _id },
        }}
        key={index}
      >
        <div
          className={size === "default" ? "mt-3 space-y-3" : "mt-2 space-y-2"}
        >
          <div className="space-y-2">
            <span className="text-sm text-neutral-500 dark:text-neutral-400">
              {/* {listingCategory.name} · {bedrooms} beds */}
              {listingCategory.name} · {beds?.length && beds[0]} beds
            </span>
            <div className="flex items-center space-x-2">
              {isAds && <Badge name="ADS" color="green" />}
              <h2
                className={`font-semibold capitalize text-neutral-900 dark:text-white ${
                  size === "default" ? "text-base" : "text-base"
                }`}
              >
                {/* <span className="line-clamp-1">{title}</span> */}
                <span className="line-clamp-1">
                  {placeName}, {propertyType}
                </span>
              </h2>
            </div>
            <div className="flex items-center text-neutral-500 dark:text-neutral-400 text-sm space-x-1.5">
              {size === "default" && (
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              )}
              {/* <span className="">{address}</span> */}
              <span className="">
                {postalCode} {city} {country}
              </span>
            </div>
          </div>
          <div className="w-14 border-b border-neutral-100 dark:border-neutral-800"></div>
          <div className="flex justify-between items-center">
            <span className="text-base font-semibold">
              {/* {price} */}€{basePrice?.length && basePrice[0]}
              {` `}
              {size === "default" && (
                <span className="text-sm text-neutral-500 dark:text-neutral-400 font-normal">
                  /night
                </span>
              )}
            </span>
            {!!reviewStart && (
              <StartRating reviewCount={reviewCount} point={reviewStart} />
            )}
          </div>
        </div>
      </Link>
    );
  };

  return (
    <div className={`nc-StayCard2 group relative ${className}`}>
      {renderSliderGallery()}
      <Link href={href}>{renderContent()}</Link>
    </div>
  );
};

export default StayCard2;
