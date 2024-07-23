"use client";

import {
  ChevronRight,
  ExternalLink,
  LayoutGrid,
  LogOut,
  Settings,
  Slack,
  Truck,
  User,
  Users2,
  UserSquare2,
  Warehouse,
  Boxes,
  SendToBack,
  LayoutList,
  ScanSearch,
  PanelTop,
  ChevronDown,
} from "lucide-react";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export default function Sidebar({ showSidebar, setShowSidebar }) {
  const pathname = usePathname();

  const sidebarLinks = [
    // {
    //   title: "Dashboard",
    //   icon: LayoutGrid,
    //   href: "/dashboard/",
    // },
    // {
    //   title: "Catalogue",
    //   icon: Slack,
    //   href: "/catalogue",
    // },
    {
      title: "Customers",
      icon: Users2,
      href: "/dashboard/customers",
    },
    {
      title: "Markers",
      icon: Warehouse,
      href: "/dashboard/markets",
    },
    {
      title: "Farmers",
      icon: UserSquare2,
      href: "/dashboard/farmers",
    },
    {
      title: "Orders",
      icon: Truck,
      href: "/dashboard/orders",
    },
    {
      title: "Our Staff",
      icon: User,
      href: "/dashboard/staff",
    },
    {
      title: "BG Community",
      icon: User,
      href: "/dashboard/community",
    },{
      title: "Wallet Staff",
      icon: User,
      href: "/dashboard/wallet",
    },
    {
      title: "Settings",
      icon: Settings,
      href: "/dashboard/settings",
    },
    {
      title: "Online Store",
      icon: ExternalLink,
      href: "/",
    },
  ];

  const catalogueLinks = [
    {
      title: "Products",
      icon: Boxes,
      href: "/dashboard/products",
    },
    {
      title: "Categories",
      icon: LayoutList,
      href: "/dashboard/categories",
    },
    {
      title: "Coupons",
      icon: ScanSearch,
      href: "/dashboard/coupons",
    },
    {
      title: "Store Banners",
      icon: PanelTop,
      href: "/dashboard/banners",
    },
  ];

  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className={showSidebar
      ? "sm:block mt-20 sm:mt-0 dark:bg-slate-700 bg-white  space-y-6 w-64 h-screen text-slate-800  dark:text-slate-300  fixed left-0 top-0 shadow-md overflow-x-scroll"
      : " mt-20 hidden sm:mt-0 sm:block dark:bg-slate-700 bg-white  space-y-6 w-64 h-screen text-slate-800  dark:text-slate-300  fixed left-0 top-0 shadow-md overflow-x-scroll"}>
      <Link onClick={()=> setShowSidebar(false)} className="px-6 py-4" href="/dashboard">
        {/*  className="w-36" in Image*/}
        <Image
          src="/logo-bg.png"
          alt="Bookgarden Logo"
          width={20}
          height={20}
        />
      </Link>
      <div className="space-y-3 flex flex-col">
        {/* TODO: ຂຽນຊື່ລາວໃນໜ້າ dashboard and Logo */}
        <Link
          onClick={() => setShowSidebar(false)}
          href="/dashboard"
          className={
            pathname === "/dashboard"
              ? " flex items-center space-x-3 px-6 py-2 border-l-8 border-green-600 text-green-600"
              : "flex items-center space-x-3 px-6 py-2 "
          }
        >
          <LayoutGrid />
          <span>Dashboard</span>
        </Link>

        <Collapsible className="px-6 py-2">
          <CollapsibleTrigger className="" onClick={() => setOpenMenu(!openMenu)}>
            <div className=" flex items-center  space-x-6 py-2">
              <div className="flex items-center space-x-3">
                <Slack />
                <span>Catalogue</span>
              </div>
              {openMenu ? <ChevronDown /> : <ChevronRight />}
            </div>
          </CollapsibleTrigger>
          <CollapsibleContent className=" rounded-lg py-3 px-3 pl-6 bg-slate-100 dark:bg-slate-800 ">
            {catalogueLinks.map((item, i) => {

              const Icon = item.icon;
              return (
                <Link
                  onClick={() => setShowSidebar(false)}
                  key={i}
                  href={item.href}
                  className={
                    pathname === item.href
                      ? " flex items-center space-x-3  py-1 text-sm text-green-600"
                      : " flex items-center space-x-3  py-1 "
                  }
                >
                  <Icon className="w-4 h-4" />
                  <span>{item.title}</span>
                </Link>
              );
            })}
          </CollapsibleContent>
        </Collapsible>

        {sidebarLinks.map((item, i) => {
          const Icon = item.icon;
          return (
            <Link
              onClick={() => setShowSidebar(false)}
              key={i}
              href={item.href}
              className={
                item.href == pathname
                  ? " flex items-center space-x-3 px-6 py-2 border-l-8 border-green-600 text-green-600"
                  : "flex items-center space-x-3 px-6 py-2 "
              }
            >
              <Icon />
              <span>{item.title}</span>
            </Link>
          );
        })}
        <div className="px-6 py-2">
          <button className=" bg-green-600 rounded-md flex items-center space-x-3 px-6 py-3 ">
            <LogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
