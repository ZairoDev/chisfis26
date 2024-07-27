import React, { FC } from "react";
import Termandcondition from "./TermAndCondition"
const MainPage: FC = () => {
    return (
      <div className="container ">
        <div className="flex flex-col justify-center items-center ml-11 mr-11 mb-4">
            <Termandcondition/>
        </div>
      </div>
    );
  };
  
  export default MainPage;