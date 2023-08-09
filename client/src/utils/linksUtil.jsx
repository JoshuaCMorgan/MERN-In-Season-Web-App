import { FaBehance, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { IoBarChartSharp } from "react-icons/io5";
import { FaClipboardList } from "react-icons/fa";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";

export const dashboardLinks = [
  {
    id: 1,
    text: "list",
    path: "/dashboard",
    icon: <FaClipboardList />,
  },

  {
    id: 2,
    text: "profile",
    path: "/dashboard/profile",
    icon: <ImProfile />,
  },
];

export const homepageLinks = [
  {
    id: 1,
    href: "#home",
    url: "/",
    text: "home",
  },
  {
    id: 2,
    href: "#about",
    url: "/about",
    text: "about",
  },
  // {
  //   id: 3,
  //   url: "/availability-calendar",
  //   text: "availability calendar",
  // },
  { id: 4, url: "/dashboard", text: "shopping list" },
  { id: 5, url: "/register", text: "account" },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
];
