import CardCategoryBox1 from "@/components/CardCategoryBox1";
import Heading from "@/shared/Heading";
import { TaxonomyType } from "@/data/types";
import React from "react";

export interface SectionGridCategoryBoxProps {
  categories?: TaxonomyType[];
  headingCenter?: boolean;
  categoryCardType?: "card1";
  className?: string;
  gridClassName?: string;
}

const DEMO_CATS: TaxonomyType[] = [
  {
    id: "1",
    href: "/listing-stay-map",
    name: "Acropolis",
    taxonomy: "category",
    count: 1882,
    thumbnail:
      "https://images.pexels.com/photos/772689/pexels-photo-772689.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: "2",
    href: "/listing-stay-map",
    name: "Exarcheia",
    taxonomy: "category",
    count: 8288,
    thumbnail:
      "https://images.unsplash.com/photo-1536512060368-013a40c3f1c7?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "3",
    href: "/listing-stay-map",
    name: "Kolonaki",
    taxonomy: "category",
    count: 1288,
    thumbnail:
      "https://mi4realestate.com/wp-content/uploads/2021/10/Blog-Featured-Image-3.png",
  },
  {
    id: "4",
    href: "/listing-stay-map",
    name: "Piraeus",
    taxonomy: "category",
    count: 112,
    thumbnail:
      "https://www.visitgreece.gr/images/1743x752/jpg/files/s_1149861368_piraeus-mikrolimano_1743x752.webp",
  },
  {
    id: "5",
    href: "/listing-stay-map",
    name: "Glyfada",
    taxonomy: "category",
    count: 323,
    thumbnail:
      "https://mi4realestate.com/wp-content/uploads/2021/07/Untitled-design-8-799x670.png",
  },
  {
    id: "6",
    href: "/listing-stay-map",
    name: "Marousi",
    taxonomy: "category",
    count: 2223,
    thumbnail:
      "https://www.athens-car-rental.com/wp-content/uploads/2016/09/MAROUSI-ATHENS-CAR-RENTAL.png",
  },
  {
    id: "7",
    href: "/listing-stay-map",
    name: "Chalandri",
    taxonomy: "category",
    count: 1775,
    thumbnail:
      "https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcTGh3kIQ8TxHrxBXlFMIN6xskaoY7aYZKKMxinJfSsWI0WHiOgWthx0neAOZh7C3tp7gim8pKmeo7k5aoib06EIg7QlBVlaDgZIlFPeFA",
  },
  {
    id: "8",
    href: "/listing-stay-map",
    name: "Pangrati",
    taxonomy: "category",
    count: 1288,
    thumbnail:
      "https://www.greece-is.com/wp-content/uploads/2019/08/01-empedokleous-04.jpg",
  },
];

const SectionGridCategoryBox: React.FC<SectionGridCategoryBoxProps> = ({
  categories = DEMO_CATS,
  categoryCardType = "card1",
  headingCenter = true,
  className = "",
  gridClassName = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
}) => {
  let CardComponentName = CardCategoryBox1;
  switch (categoryCardType) {
    case "card1":
      CardComponentName = CardCategoryBox1;
      break;

    default:
      CardComponentName = CardCategoryBox1;
  }

  return (
    <div className={`nc-SectionGridCategoryBox relative ${className}`}>
      <Heading
        desc="Discover great places near where you live"
        isCenter={headingCenter}
      >
        Looking For Long Term Rentals
      </Heading>
      <div className={`grid ${gridClassName} gap-5 sm:gap-6 md:gap-8`}>
        {categories.map((item, i) => (
          <CardComponentName key={i} taxonomy={item} />
        ))}
      </div>
    </div>
  );
};

export default SectionGridCategoryBox;
