"use client";

import Logo from "@/shared/Logo";
import SocialsList1 from "@/shared/SocialsList1";
import { CustomLink } from "@/data/types";
import React, { FC } from "react";
import FooterNav from "./FooterNav";
import roundLogo from "@/images/companyLogo/logo1.png";
import { SocialType } from "@/shared/SocialsShare";
import { GrGroup } from "react-icons/gr";

export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
  icon?: string;
}

export interface SocialsList1Props {
  className?: string;
}

const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "Use Full Links",
    menus: [
      { href: "/about", label: "About Us" },
      { href: "#", label: "How we Work" },
      { href: "/subscription", label: "Becoma a Host" },
      { href: "/blog", label: "Blogs" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
  // {
  //   id: "1",
  //   title: "Explore",
  //   menus: [
  //     { href: "#", label: "Design features" },
  //     { href: "#", label: "Prototyping" },
  //     { href: "#", label: "Design systems" },
  //     { href: "#", label: "Pricing" },
  //     { href: "#", label: "Security" },
  //   ],
  // },
  {
    id: "1",
    title: "Destinations",
    menus: [
      { href: "/listing-stay-map", label: "Greece" },
      { href: "/listing-stay-map", label: "Italy" },
      { href: "/listing-stay-map", label: "Romania" },
      { href: "/listing-stay-map", label: "Spain" },
      { href: "/listing-stay-map", label: "Croatia" },
    ],
  },
  {
    id: "2",
    title: "Help Desk",
    menus: [
      { href: "#", label: "Owner Help" },
      { href: "#", label: "Traveller Help" },
      { href: "/privacy-policy", label: "Privacy Policy" },
      { href: "/termsandconditions", label: "Terms & Conditions" },
      { href: "#", label: "Support" },
    ],
  },
  // {
  //   id: "4",
  //   title: "Social Handles",
  //   menus: [
  //     { href: "https://www.facebook.com/Vacationsaga", label: "Facebook" },
  //     { href: "https://x.com/vacationsaga", label: "Twitter" },
  //     { href: "https://www.instagram.com/vacationsaga/", label: "Instagram" },
  //     // { href: "#", label: "117/N/70 3rd Floor Kakadeo Kanpur"}
  //     // { href: "#", label: "Contributing" },
  //     // { href: "#", label: "Concurrent Mode" },
  //   ],
  // },
];

const socials: SocialType[] = [
  { name: "Facebook", icon: "lab la-facebook-square", href: "https://www.facebook.com/Vacationsaga" },
  { name: "Twitter", icon: "lab la-twitter", href: "https://x.com/vacationsaga" },
  // { name: "Youtube", icon: "lab la-youtube", href: "#" },
  { name: "Instagram", icon: "lab la-instagram", href: "https://www.instagram.com/vacationsaga/" },
  { name: "Community", icon: "lab la-instagram", href: "https://www.facebook.com/share/cQVoYkgSxmp465km/" },
];

const renderItem = (item: SocialType, index: number) => {
  return (
    <a
      href={item.href}
      className="flex items-center text-2xl my-4 text-neutral-700 hover:text-black dark:text-neutral-300 dark:hover:text-white leading-none space-x-2 group"
      key={index}
    >
      <i className={item.icon}></i>
      <span className="hidden lg:block text-sm">{item.name}</span>
    </a>
  );
};

const Footer: React.FC = () => {
  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="font-semibold text-neutral-700 dark:text-neutral-200">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <a
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <FooterNav />

      <div className="nc-Footer relative py-24 lg:py-28 border-t border-neutral-200 dark:border-neutral-700 ">
        <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-4 lg:grid-cols-5 lg:gap-x-10 ">
          <div className="grid grid-cols-4 gap-5 col-span-2 md:col-span-4 lg:md:col-span-1 lg:flex lg:flex-col ">
            <div className="col-span-2 md:col-span-1 flex flex-col items-center mr-8">
              {/* <Logo /> */}
              <img src={roundLogo.src} alt="Logo" className=" w-28 mb-2" />
              <p className=" text-primary-6000 text-2xl my-2 font-bold">Vacation Saga</p>
              <p className="whitespace-nowrap my-2">
                117/N/70 3rd Floor 
                Kakadeo Kanpur
              </p>
              <a href="mailto:info@vacationsaga.com">info@vacationsaga.com</a>
            </div>
            <div className="col-span-2 flex items-center md:col-span-3">
              {/* <SocialsList1 className="flex items-center space-x-3 lg:space-x-0 lg:flex-col lg:space-y-2.5 lg:items-start" /> */}
            </div>
          </div>
          {widgetMenus.map(renderWidgetMenuItem)}
          <div>
            <h3 className="font-semibold text-neutral-700 dark:text-neutral-200 text-sm">Social Handles</h3>
            {socials.map(renderItem)}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
