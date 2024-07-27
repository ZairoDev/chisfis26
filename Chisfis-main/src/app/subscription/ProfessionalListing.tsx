

import React from "react";
import Image from 'next/image';
import banner from "../../images/how_we_work_banner.jpg";

const PageProfessionalListing: React.FC = () => {
    return (
    <div className=" w-full h-full">
    <div className="flex flex-col ">
        <div className="p-4 ">
            <span className="text-2xl md:text-4xl font-bold">
                Create a Professional <br /> Listing for Your Rental Space
            </span>
        </div>
        <div className="h-30 p-7 ">
            {/* <Image src={banner} alt="banner_img" layout="responsive" className="rounded-lg w-full h-full object-cover" /> */}
            <img src={banner.src} alt="banner_img" className="rounded-lg w-full h-full object-cover" />
        </div>
    </div>
</div>
          
    );
}

export default PageProfessionalListing;
