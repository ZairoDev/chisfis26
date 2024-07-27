"use client";
import React, { createContext, useState, useEffect, ReactNode } from "react";
import { PropertyDataType } from "@/data/types";
import axios from "axios";

const MyContext = createContext<PropertyDataType | undefined>(undefined);

const MyProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [allProperties, setAllProperties] = useState<PropertyDataType>();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("/api/allproperties");
      console.log("data from context: ", response?.data);
      setAllProperties(response?.data);
    };

    fetchData();

  }, []);

  return (
    <MyContext.Provider value={allProperties}>{children}</MyContext.Provider>
  );
};

export { MyContext, MyProvider };
