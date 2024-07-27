import React from "react";
import Image from "next/image";

export interface People {
  id: string;
  avatar: string;
}

const FOUNDER_DEMO: People[] = [
  { id: "1", avatar: "/icons/1.png" },
  { id: "2", avatar: "/icons/2.png" },
  { id: "3", avatar: "/icons/3.png" },
  { id: "4", avatar: "/icons/4.png" },
  { id: "5", avatar: "/icons/5.png" },
  { id: "6", avatar: "/icons/6.png" },
  { id: "7", avatar: "/icons/7.png" },
  { id: "8", avatar: "/icons/8.png" },
];

const Ourfeature = () => {
  return (
    <div className="py-10 px-4">
      <div className="text-4xl font-bold text-center mb-8 ">
        <span>Our Values </span>
      </div>
      <div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 ">
          {FOUNDER_DEMO.map((item) => (
            <div key={item.id} className="max-w-sm">
              <div className="relative h-0 aspect-h-1 aspect-w-1 rounded-xl overflow-hidden">
                <Image
                  src={item.avatar}
                  alt="Img"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Ourfeature;
