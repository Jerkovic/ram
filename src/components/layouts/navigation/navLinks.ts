import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import * as React from "react";
import { SvgIconProps } from "@mui/material";

export interface NavigationItem {
  id?: string;
  type?: "group" | "item";
  href?: string;
  title: string;
  Icon?: React.ElementType<SvgIconProps>;
  menuMinWidth?: string;
  menuChildren?: NavigationItem[];
}

const NAV_LINKS: NavigationItem[] = [
  {
    title: "Home",
    href: "/",
    Icon: HomeOutlinedIcon,
  },
  {
    id: "dashboard-menu",
    type: "group",
    title: "Dashboard",
    Icon: BarChartOutlinedIcon,
    menuChildren: [
      {
        title: "Dashboard01",
        href: "/dashboards/dashboard1",
      },
      {
        title: "Dashboard02",
        href: "/dashboards/dashboard2",
      },
      {
        title: "Dashboard03",
        href: "/dashboards/dashboard3",
      },
      {
        title: "Dashboard04",
        href: "/dashboards/dashboard4",
      },
      {
        title: "Dashboard05",
        href: "/dashboards/dashboard5",
        Icon: BarChartOutlinedIcon,
      },
    ],
  },
  {
    id: "components-menu",
    type: "group",
    title: "Components",
    Icon: GridViewOutlinedIcon,
    menuChildren: [
      {
        title: "Forms",
        href: "/components/forms",
      },
      {
        title: "Tables",
        href: "/components/tables",
      },
      {
        title: "Modal",
        href: "/components/modal",
      },
      {
        title: "Loaders",
        href: "/components/loaders",
      },
      {
        title: "Snackbar/Toast",
        href: "/components/snackbar",
      },
      {
        title: "Carousel",
        href: "/components/carousel",
      },
      {
        title: "Navigation",
        href: "/components/navigation",
      },
      {
        title: "UI Elements",
        type: "group",
        menuChildren: [
          {
            title: "Card",
            href: "/components/card",
          },
          {
            title: "CardHeader",
            href: "/components/cardHeader",
          },
          {
            title: "PageHeader",
            href: "/components/pageHeader",
          },
        ],
      },
    ],
  },
  {
    id: "admin-menu",
    type: "group",
    title: "Settings",
    Icon: GridViewOutlinedIcon,
    menuChildren: [
      {
        title: "Tables",
        href: "/tables",
      },
      {
        title: "Loaders",
        href: "/components/loaders",
      },
      {
        title: "Restaurants",
        href: "/restaurants",
      },
      {
        title: "Merry go round",
        href: "/components/carousel",
      },
      {
        title: "Navigation",
        href: "/components/navigation",
      },
    ],
  },
  {
    title: "Navigation",
    href: "/navigation",
    Icon: BarChartOutlinedIcon,
  },
];

export default NAV_LINKS;
