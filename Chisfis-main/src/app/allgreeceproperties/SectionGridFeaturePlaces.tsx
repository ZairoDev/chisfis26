
"use client";

import React, { FC, ReactNode, useState, useEffect } from "react";
import axios from "axios";
import { StayDataType } from "@/data/types";
import ButtonPrimary from "@/shared/ButtonPrimary";
import HeaderFilter from "@/components/HeaderFilter";
import StayCard from "@/components/StayCard";
import StayCard2 from "@/components/StayCard2";
import CustomStayCard from "./CustomStayCard";
import { useSearchParams } from "next/navigation";

export interface SectionGridFeaturePlacesProps {
  stayListings?: StayDataType[];
  gridClass?: string;
  // heading?: ReactNode;
  // subHeading?: ReactNode;
  // headingIsCenter?: boolean;
  // tabs?: string[];
  cardType?: "card1" | "card2";
}

const SectionGridFeaturePlaces: FC<SectionGridFeaturePlacesProps> = ({
  stayListings,
  gridClass = "",
  // heading = "Places to stay",
  // subHeading = "Popular places to stay that Chisfis recommends for you",
  // headingIsCenter,
  // tabs = ["Greece", "Italy", "Romania", "Spain"],
  cardType = "card2",
}) => {
  const [dataLength, setDataLength] = useState(0);
  const [fetchedData, setFetchedData] = useState<StayDataType[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordPerPage = 20;

  const params = useSearchParams();
  const country = params.get("country") || "Greece";

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        // const response = await axios.get("/api/properties");
        const response = await axios.get(`/api/countryspecificproperties/${country}`);
        setDataLength(response.data.length);
        setFetchedData(response.data);
        console.log("Complete data from /api/properties:", response.data);
      } catch (error) {
        console.error("Error fetching properties:", error);
      }
    };

    fetchProperties();
  }, []);

  const lastIndex = currentPage * recordPerPage;
  const firstIndex = lastIndex - recordPerPage;
  const records = fetchedData.slice(firstIndex, lastIndex);
  const npage = Math.ceil(dataLength / recordPerPage);


  const getPaginationNumbers = () => {
    const maxVisiblePages = 5;
    const startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
    const endPage = Math.min(startPage + maxVisiblePages - 1, npage);
    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const renderCard = (stay: StayDataType, index: number) => {
    let CardName = CustomStayCard;
    switch (cardType) {
      case "card1":
        CardName = StayCard;
        break;
      case "card2":
        CardName = CustomStayCard;
        break;
      default:
        CardName = StayCard;
    }

    return <CardName key={stay.id} data={stay} index={index} />;
  };

  const prePage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const changeCpage = (id: number) => {
    setCurrentPage(id);
  };

  const nextPage = () => {
    if (currentPage < npage) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="nc-SectionGridFeaturePlaces  relative">
      {/* <HeaderFilter 
        tabActive={"New York"}
        subHeading={subHeading}
        tabs={tabs}
        heading={heading}
      /> */}
      <div
        className={`grid p-12 mb-3 gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ${gridClass}`}
      >
        {records.map((stay, index) => renderCard(stay, firstIndex + index))}
      </div>
      <nav className="flex justify-center mt-8">
        <ul className="pagination flex space-x-2">
          <li
            className={`page-item ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <button
              className="px-3 py-1 bg-orange-500 text-white rounded-2xl"
              onClick={prePage}
            >
              Prev
            </button>
          </li>
          {getPaginationNumbers().map((n) => (
            <li
              key={n}
              className={`page-item ${
                currentPage === n ? "bg-orange-500 rounded-full text-white" : ""
              }`}
            >
              <button
                className="px-3 py-1 h-10 w-10 rounded-full"
                onClick={() => changeCpage(n)}
              >
                {n}
              </button>
            </li>
          ))}
          <li
            className={`page-item h-4 w-4 ${
              currentPage === npage ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            <button
              className="px-3 py-1 bg-orange-500 text-white rounded-2xl"
              onClick={nextPage}
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SectionGridFeaturePlaces;
