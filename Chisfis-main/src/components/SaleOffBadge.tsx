import React, { FC } from "react";

export interface SaleOffBadgeProps {
  className?: string;
  desc?: string;
  discount?: number;
}

const SaleOffBadge: FC<SaleOffBadgeProps> = ({
  className = "",
  desc = "-10% today",
  discount = 10,
}) => {
  return (
    <div
      className={`nc-SaleOffBadge flex items-center justify-center text-xs py-0.5 px-3 bg-red-700 text-red-50 rounded-full ${className}`}
      data-nc-id="SaleOffBadge"
    >
      -{discount}% today
    </div>
  );
};

export default SaleOffBadge;
